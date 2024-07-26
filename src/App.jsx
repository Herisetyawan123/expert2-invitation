import { useState, useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CoverPage from "./section/cover-page";
import LeftPartial from "./partial/LeftPartial";
import RightPartial from "./partial/RightPartial";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  // State untuk melacak apakah musik diputar atau dijeda
  const [isPlaying, setIsPlaying] = useState(false);
  // Ref untuk elemen audio
  const audioRef = useRef(null);

  // Fungsi untuk play/pause audio
  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <main className="w-full grid grid-cols-12">
      <audio src="/sound.mp3" loop hidden ref={audioRef} />
      <CoverPage />
      <div className="hidden lg:block lg:col-span-8 h-[100vh] w-full sticky top-0">
        <LeftPartial />
      </div>
      <div className="col-span-12 lg:col-span-4">
        <RightPartial />
      </div>
      <div className="fixed bottom-10 left-10">
        <button
          className="w-16 h-16 bg-[#423740] backdrop-blur rounded-full"
          onClick={toggleAudio}
        >
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 mx-auto text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.25 6.75h1.5v10.5h-1.5V6.75zm4.5 0h1.5v10.5h-1.5V6.75z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 mx-auto text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 4.75l13.5 7.5-13.5 7.5V4.75z"
              />
            </svg>
          )}
        </button>
      </div>
    </main>
  );
}

export default App;
