import { useState, useEffect } from "react";

function ImageCard({ imageUrl }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
  setLoaded(false);
}, [imageUrl]);

  return (
    <div className="w-full max-w-5xl mt-14">
      <h2 className="text-3xl font-bold mb-6">
        Generated Image
      </h2>

      <div className="bg-white/5 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 flex justify-center items-center min-h-[450px]">

        {imageUrl ? (
          <div className="w-full flex justify-center">
            {!loaded && (
              <p className="text-purple-400 text-xl animate-pulse">
                ⏳ Loading Image...
              </p>
            )}

            <img
              src={imageUrl}
              alt="AI Generated"
              onLoad={() => setLoaded(true)}
              onError={() => setLoaded(false)}
              className={`rounded-2xl w-full max-w-3xl transition-all duration-700 ${
                loaded ? "opacity-100" : "opacity-0 absolute"
              }`}
            />
          </div>
        ) : (
          <p className="text-gray-400 text-xl">
            Your AI image will appear here ✨
          </p>
        )}

      </div>
    </div>
  );
}

export default ImageCard;