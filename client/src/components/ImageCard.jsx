import { useState, useEffect } from "react";

function ImageCard({ imageUrl }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoaded(false);
    setError(false);
  }, [imageUrl]);

  return (
    <div className="w-full max-w-5xl mt-14">
      <h2 className="text-3xl font-bold mb-6">Generated Image</h2>

      <div className="bg-white/5 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 flex justify-center items-center min-h-[450px]">

        {!imageUrl && (
          <p className="text-gray-400 text-xl">
            Your AI image will appear here ✨
          </p>
        )}

        {imageUrl && !loaded && !error && (
          <p className="text-purple-400 text-xl animate-pulse">
            ⏳ Loading Image...
          </p>
        )}

        {error && (
          <div className="text-center">
            <p className="text-red-500 text-xl mb-3">
              ❌ Failed to load image.
            </p>

            <a
              href={imageUrl}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 underline"
            >
              Open Image
            </a>
          </div>
        )}

        {imageUrl && (
          <img
            src={imageUrl}
            alt="AI Generated"
            onLoad={() => {
              console.log("✅ Image Loaded");
              setLoaded(true);
              setError(false);
            }}
            onError={(e) => {
              console.log("❌ Failed Image URL:");
              console.log(e.target.src);

              setLoaded(false);
              setError(true);
            }}
            style={{
              display: loaded ? "block" : "none",
              maxWidth: "100%",
              borderRadius: "20px",
            }}
          />
        )}
      </div>
    </div>
  );
}

export default ImageCard;