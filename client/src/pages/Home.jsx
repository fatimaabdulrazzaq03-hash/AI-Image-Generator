import { useState } from "react";
import PromptBox from "../components/PromptBox";
import ImageCard from "../components/ImageCard";

function Home() {

  const [imageUrl, setImageUrl] = useState("");
const [history, setHistory] = useState([]);

  return (
    <div className="relative min-h-screen flex flex-col items-center pt-24 px-6 overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute w-80 h-80 bg-purple-700 rounded-full blur-[150px] opacity-20 -top-20 -left-20"></div>

      <div className="absolute w-80 h-80 bg-red-600 rounded-full blur-[150px] opacity-20 top-60 right-0"></div>

      <h1 className="text-6xl md:text-7xl font-extrabold text-center z-10">
        Turn Your Ideas Into
      </h1>

      <h1 className="text-6xl md:text-7xl font-extrabold text-center mt-3 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent z-10">
        AI Masterpieces
      </h1>

      <p className="text-gray-400 text-center mt-8 max-w-2xl text-lg z-10">
        Describe anything you imagine and let AI create amazing images.
      </p>

      <PromptBox
  setImageUrl={setImageUrl}
  imageUrl={imageUrl}
  setHistory={setHistory}
/>

      <ImageCard imageUrl={imageUrl} />

    </div>
  );
}

export default Home;