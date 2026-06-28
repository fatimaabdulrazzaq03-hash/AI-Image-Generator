import { useEffect, useState } from "react";
import axios from "axios";

function History() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/images/history"
      );

      setImages(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
const deleteImage = async (id) => {
  try {
    console.log("Deleting:", id);

    const res = await axios.delete(
      `http://localhost:5000/api/images/delete/${id}`
    );

    console.log(res.data);

    setImages((prev) => prev.filter((item) => item._id !== id));

    alert("Image Deleted Successfully");

  } catch (error) {
    console.log(error.response?.data || error.message);
    alert("Delete Failed");
  }
};

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      <h1 className="text-5xl font-bold mb-10">
        History
      </h1>

      {images.length === 0 ? (
        <p className="text-gray-400 text-xl">
          No Images Found
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">

          {images.map((item) => (
            <div
              key={item._id}
              className="bg-gray-900 border border-gray-800 rounded-3xl p-5"
            >
              <img
                src={item.imageUrl}
                alt={item.prompt}
                className="rounded-2xl mb-4 w-full h-60 object-cover"
              />

              <h2 className="font-bold text-lg">
                {item.prompt}
              </h2>

              <p className="text-gray-400 mt-2 text-sm">
                {new Date(item.createdAt).toLocaleString()}
              </p>

              <button
               onClick={() => deleteImage(item._id)}
                className="mt-4 w-full bg-red-600 hover:bg-red-700 py-2 rounded-xl font-semibold"
>
🗑 Delete
</button>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default History;