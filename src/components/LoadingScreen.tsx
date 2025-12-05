import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2500);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3200);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-700 ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="text-center px-6 max-w-2xl">
        <p className="text-lg md:text-2xl font-light tracking-wide text-foreground/80 animate-fade-in">
          Welcome to what is going to be your favourite portfolio...
        </p>
        <div className="mt-8 flex justify-center">
          <div className="w-12 h-0.5 bg-primary animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
