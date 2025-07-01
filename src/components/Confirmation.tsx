import { useState } from "react";

interface ConfirmationProps {
  onYes: () => void;
}

const getRandomPosition = () => {
  const top = Math.random() * 70 + 10; // tussen 10% en 80%
  const left = Math.random() * 70 + 10; // tussen 10% en 80%
  return { top: `${top}%`, left: `${left}%` };
};

const Confirmation = ({ onYes }: ConfirmationProps) => {
  const [noBtnPos, setNoBtnPos] = useState({ top: "50%", left: "60%" }); // Start positie naast "Ja"
  const [noBtnTries, setNoBtnTries] = useState(0);
  const [noBtnClicked, setNoBtnClicked] = useState(false);

  const moveNoBtn = () => {
    setNoBtnTries(noBtnTries + 1);
    setNoBtnPos(getRandomPosition());
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-purple-50 to-rose-100 relative overflow-hidden">
      <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-12 text-center">
        Hou je nog van mij?
      </h1>
      <div className="flex flex-row items-center justify-center gap-8 relative w-full h-96">
        <button
          onClick={onYes}
          className="px-10 py-4 h-20 w-50 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full text-2xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 z-10"
        >
          Ja 💖
        </button>
        <button
          style={
            noBtnClicked 
                ? { position: "absolute", ...noBtnPos, transition: "top 0.1s, left 0.1s" }
                : { }
            }
          onClick={() => {moveNoBtn(); setNoBtnClicked(true)}}
          className="px-10 py-4 bg-gray-200 text-gray-700 rounded-full text-sm font-semibold shadow z-20 select-none"
        >
          Nee 
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
