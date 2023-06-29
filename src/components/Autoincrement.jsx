import React, { useState, useEffect, useRef } from "react";

export default function Autoincrement({ max, title, x, plus, percent }) {
  const [counterState, setCounter] = useState(0);
  const autoIncrementRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounter();
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (autoIncrementRef.current) {
      observer.observe(autoIncrementRef.current);
    }

    return () => {
      observer.disconnect();
      clearInterval(intervalRef.current);
    };
  }, []);

  const startCounter = () => {
    intervalRef.current = setInterval(() => {
      setCounter((prev) => {
        if (prev === max) {
          clearInterval(intervalRef.current);
          return prev;
        }
        return prev + 1;
      });
    }, 10);
  };

  return (
    <div ref={autoIncrementRef} className="flex flex-col items-center gap-2">
      <h1 className="text-4xl text-yellow-400">
        {plus && "+"}
        {counterState}
        {x && "X"}
        {percent && "%"}
      </h1>
      <p className="text-center text-xl">{title}</p>
    </div>
  );
}
