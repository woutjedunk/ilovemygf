import { useEffect, useState } from "react";
import foto1 from "../photos/1.jpg";
import foto2 from "../photos/2.jpg";
import foto3 from "../photos/3.jpg";
import foto4 from "../photos/4.jpg";  
import foto5 from "../photos/5.jpg";
import foto6 from "../photos/6.jpg";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswers: number[];
  funFact?: string;
}

interface QuizProps {
  onComplete: () => void;
}

const images: string[] = [
  foto1,
  foto2,
  foto3,    
  foto4,
  foto5,
  foto6,
]

const Quiz = ({ onComplete }: QuizProps) => {
  const questions: Question[] = [
    {
      id: 1,
      question:
        "Wat is de eerste film die we samen gezien hebben in de cinema?",
      options: [
        "Challengers",
        "Guardians of the Galaxy Vol. 3",
        "Barbie",
        "Thunderbolts*",
      ],
      correctAnswers: [1],
    },
    {
      id: 2,
      question: "Wat was er niet bij onze eerste picknick?",
      options: [
        "Smosje met kaas",
        "Rode pesto pasta",
        "Gelegde komkommer",
        "Aardbeien met chocolade",
      ],
      correctAnswers: [2],
    },
    {
      id: 3,
      question: "Waar hou ik het meest van aan jou?",
      options: [
        "Jouw glimlach",
        "Yo boobies",
        "Jouw verzorgde nagels",
        "Jouw glinsterende ogen",
      ],
      correctAnswers: [4],
      funFact: "😘",
    },
    {
      id: 4,
      question: "Wat is onze favoriete activiteit samen?",
      options: [
        "Bedrotten met een vleugje TikTok",
        "Samen op vakantie gaan",
        "Wandelingetje maken",
        "Praten met elkaar",
      ],
      correctAnswers: [0, 1, 2, 3],
      funFact: "Elke activiteit samen met jouw is mijn favoriet 🥰",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentQ, setCurrentQ] = useState(questions[0]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [showFunFact, setShowFunFact] = useState(false);

  const [showResults, setShowResults] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;

    if (currentQuestion == 2) {
      setCurrentQuestion(0);
      setCurrentQuestion(2);
      currentQ.options = [
        "Jouw glimlach",
        "Yo boobies",
        "Jouw verzorgde nagels",
        "Jouw glinsterende ogen",
        "Absoluut alles aan jou",
      ];
    }

    setSelectedAnswer(answerIndex);
    setShowResult(true);

    if (questions[currentQuestion].correctAnswers.includes(answerIndex)) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setShowFunFact(true);
    }, 1000);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setCurrentQ(questions[currentQuestion + 1]);
      setSelectedAnswer(null);
      setShowResult(false);
      setShowFunFact(false);
    } else {
      setShowResults(true);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return !showResults ? (
 
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-rose-100 p-6">
        <div className="flex flex-col items-center">
          <div className="max-w-2xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-600">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-sm font-medium text-gray-600">
                  Score: {score}/{questions.length}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
            {/* Question Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                {currentQ.question}
              </h2>
              <div className="space-y-4">
                {currentQ.options.map((option, index) => {
                  let buttonStyle =
                    "w-full p-4 rounded-xl border-2 transition-all duration-300 text-left font-medium ";
                  if (selectedAnswer === null) {
                    buttonStyle +=
                      "border-gray-200 hover:border-pink-300 hover:bg-pink-50 text-gray-700";
                  } else if (currentQ.correctAnswers.includes(index)) {
                    // Dit is een correct antwoord
                    buttonStyle += "border-green-500 bg-green-100 text-green-800";
                  } else if (
                    index === selectedAnswer &&
                    !currentQ.correctAnswers.includes(index)
                  ) {
                    // Dit was gekozen maar is fout
                    buttonStyle += "border-red-500 bg-red-100 text-red-800";
                  } else {
                    buttonStyle += "border-gray-200 bg-gray-50 text-gray-500";
                  }
                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      className={buttonStyle}
                      disabled={selectedAnswer !== null}
                    >
                      {option}
                      {showResult && currentQ.correctAnswers.includes(index) && (
                        <span className="float-right">✅</span>
                      )}
                      {showResult &&
                        index === selectedAnswer &&
                        !currentQ.correctAnswers.includes(index) && (
                          <span className="float-right">❌</span>
                        )}
                    </button>
                  );
                })}
              </div>
              {/* Fun Fact */}
              {showFunFact && currentQ.funFact && (
                <div className="mt-6 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl border border-pink-200 animate-fadeIn">
                  <p className="text-center text-gray-700 italic">
                    {currentQ.funFact}
                  </p>
                </div>
              )}
              {/* Next Button */}
              {showResult && (
                <div className="text-center mt-8">
                  <button
                    onClick={handleNext}
                    className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    {currentQuestion < questions.length - 1
                      ? "Volgende vraag"
                      : "Volgende"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="relative h-[500px]">
          {images.map((src: string, i: number) => (
              <img
                key={i}
                src={src}
                className={`absolute top-0 left-0  max-h-96 object-cover transition-opacity duration-700 ease-in-out border-4 rounded-2xl border-pink-200 ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
                alt=""
                
              />
            ))}
        </div>
      </div>

  ) : (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-rose-100 p-6">
      {score == 3 && (
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-8 flex flex-col items-center">
            Goed gedaan! 🎉
          </h1>
          <p className="text-2xl text-gray-700 mb-8">
            Je hebt {score} van de {questions.length} vragen goed beantwoord!
            Dus je houdt echt van mij! 🥰
          </p>
          <div className="p-5">
            <img
              className="m-auto"
              src="https://tenor.com/view/cat-kiss-catkiss-cat-kiss-cat-kissing-gif-16899029469483761674.gif"
            ></img>
          </div>
          <button
            onClick={onComplete}
            className="px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full text-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Neeeeeext
          </button>
        </div>
      )}
      {score < 3 && (
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-8 flex flex-col items-center">
            Goed gedaan! 🎉
          </h1>
          <p className="text-2xl text-gray-700 mb-8">
            {`Je hebt maar ${score} van de ${questions.length} vragen goed beantwoord :(`}
          </p>
          <div className="p-5">
            <img
              className="m-auto"
              src="https://tenor.com/view/shocked-shocked-cat-silly-cat-cat-kitten-gif-7414586676150300212.gif"
            ></img>
          </div>
          <button
            onClick={onComplete}
            className="px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full text-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Neeeeeext
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
