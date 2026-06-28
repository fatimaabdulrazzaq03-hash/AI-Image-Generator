import { useState } from "react";
import axios from "axios";

function PromptBox({ setImageUrl, imageUrl, setHistory }) {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const prompts = [
  "A cute fluffy white cat sitting on a wooden table",
  "A golden retriever playing in a green park",
  "A cute panda eating bamboo in a forest",
  "A majestic lion sitting on a rock at sunset",
  "A royal Bengal tiger walking through the jungle",
  "A beautiful white horse running across a green field",
  "A colorful butterfly resting on a red flower",
  "A peaceful snowy mountain under a blue sky",
  "A breathtaking sunset over a tropical beach",
  "A magical green forest with glowing lights",
  "A modern luxury villa with a swimming pool",
  "A futuristic red sports car on a city road",
  "A black Lamborghini parked in front of a luxury hotel",
  "A cozy wooden cabin in a snowy forest",
  "A futuristic city with neon lights at night",
  "A cute astronaut floating in space",
  "A magical castle above the clouds",
  "A crystal clear lake surrounded by mountains",
  "A beautiful flower garden in spring",
  "A majestic eagle flying over the mountains",
  "A peaceful village with colorful houses",
  "A luxury yacht sailing on the blue ocean",
  "A hot air balloon flying at sunrise",
  "A beautiful mosque under the evening sky",
  "A realistic robot standing in a futuristic laboratory"
];

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      alert("Please enter a prompt!");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/generate",
        {
          prompt,
        }
      );

      const url = response.data.imageUrl;

      setImageUrl(url);
    //   setHistory((prev) => [url, ...prev]);

    } catch (error) {
      console.error(error);
      alert("Failed to generate image.");
    } finally {
      setLoading(false);
    }
  };

  const surpriseMe = () => {
    const random = prompts[Math.floor(Math.random() * prompts.length)];
    setPrompt(random);
  };

const downloadImage = async () => {
  if (!imageUrl) return;

  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "ai-image.png";
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

  } catch (error) {
    console.error(error);
    alert("Download failed.");
  }
};

  return (
    <div className="w-full max-w-5xl mt-12 relative z-20">

      {/* Input Box */}
      <div className="bg-gray-900 border border-purple-600 rounded-2xl p-3 flex items-center gap-3">

        <input
          type="text"
          placeholder="Describe your imagination..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="flex-1 bg-transparent outline-none text-white px-4"
        />

        <button
          onClick={handleGenerate}
          disabled={loading}
          className={`shrink-0 px-8 py-4 rounded-xl transition duration-300 ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-purple-600 to-red-600 hover:scale-105"
          }`}
        >
          {loading ? "⏳ Generating..." : "✨ Generate"}
        </button>

      </div>

      {/* Extra Buttons */}
      <div className="flex gap-3 mt-4">

        <button
          onClick={surpriseMe}
          disabled={loading}
          className="bg-pink-600 px-4 py-2 rounded-lg text-white hover:scale-105 transition"
        >
          🎲 Surprise Me
        </button>

        <button
          onClick={downloadImage}
          disabled={!imageUrl}
          className="bg-green-600 px-4 py-2 rounded-lg text-white hover:scale-105 transition"
        >
          📥 Download
        </button>

      </div>

    </div>
  );
}

export default PromptBox;