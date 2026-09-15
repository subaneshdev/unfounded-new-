"use client";

import React, { useEffect, useState } from "react";

interface WordRotateProps {
  words: string[];
  duration?: number;
  className?: string;
}

export function WordRotate({
  words,
  duration = 2500,
  className = "",
}: WordRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <span className={`inline-block overflow-hidden align-baseline ${className}`}>
      <span
        key={words[index]}
        className="inline-block transition-all duration-500 transform animate-fade-rise"
      >
        {words[index]}
      </span>
    </span>
  );
}
