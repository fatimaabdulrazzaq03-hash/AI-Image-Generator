import { useState, useEffect } from "react";

function ImageCard({ imageUrl }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoaded(false);
    setError(false);
  }, [imageUrl]);

  return (
    <div className="w-full max-w-6xl mt-10 sm:mt-14 px-2 sm:px-0">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">
        Generated Image
      </h2>

      <div className="bg-white/5 backdrop-blur-xl border border-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-8 flex justify-center items-center min-h-[250px] sm:min-h-[450px]">

        {!imageUrl && (
          <p className="text-gray-400 text-base sm:text-xl text-center">
            Your AI image will appear here ✨
          </p>
        )}

        {imageUrl && !loaded && !error && (
          <p className="text-purple-400 text-base sm:text-xl animate-pulse text-center">
            ⏳ Loading Image...
          </p>
        )}

        {error && (
          <div className="text-center">
            <p className="text-red-500 text-base sm:text-xl mb-3">
              ❌ Failed to load image.
            </p>

            <a
              href={imageUrl}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 underline break-all"
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
              setLoaded(true);
              setError(false);
            }}
            onError={() => {
              setLoaded(false);
              setError(true);
            }}
            className={`${
              loaded ? "block" : "hidden"
            } w-full max-w-[900px] max-h-[70vh] object-contain rounded-2xl`}
          />
        )}
      </div>
    </div>
  );
}

export default ImageCard;