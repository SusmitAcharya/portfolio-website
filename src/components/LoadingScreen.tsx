import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [isExiting, setIsExiting] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Welcome to what is going to be your favourite portfolio...";

  useEffect(() => {
    let currentIndex = 0;
    const typeInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 3500);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4200);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-700 ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="text-center px-6 max-w-2xl">
        <p className="text-lg md:text-2xl font-light tracking-wide text-foreground/80 min-h-[2em]">
          {displayedText}
          <span className="animate-pulse">|</span>
        </p>
        <div className="mt-8 flex justify-center">
          <div className="w-12 h-0.5 bg-primary animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
