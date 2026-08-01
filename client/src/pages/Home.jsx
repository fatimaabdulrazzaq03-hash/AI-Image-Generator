import { useState } from "react";
import PromptBox from "../components/PromptBox";
import ImageCard from "../components/ImageCard";

function Home() {
  const [imageUrl, setImageUrl] = useState("");
  const [history, setHistory] = useState([]);

  return (
    <div className="relative min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-purple-700 rounded-full blur-[120px] opacity-20 -top-16 -left-16"></div>

      <div className="absolute w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-red-600 rounded-full blur-[120px] opacity-20 top-52 right-0"></div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center">

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center leading-tight">
          Turn Your Ideas Into
        </h1>

        <h1 className="mt-2 sm:mt-3 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent leading-tight">
          AI Masterpieces
        </h1>

        <p className="text-gray-400 text-center mt-6 max-w-2xl text-sm sm:text-base md:text-lg px-2">
          Describe anything you imagine and let AI create amazing images.
        </p>

        <div className="w-full mt-8">
          <PromptBox
            setImageUrl={setImageUrl}
            imageUrl={imageUrl}
            setHistory={setHistory}
          />
        </div>

        <div className="w-full mt-8">
          <ImageCard imageUrl={imageUrl} />
        </div>

      </div>
    </div>
  );
}

export default Home;