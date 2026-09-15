"use client";

import React, { useId } from "react";

interface AnimatedGridPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: any;
  numSquares?: number;
  className?: string;
  maxOpacity?: number;
  duration?: number;
}

export function AnimatedGridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 30,
  className = "",
  maxOpacity = 0.4,
  duration = 4,
}: AnimatedGridPatternProps) {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/20 stroke-neutral-300/40 ${className}`}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      <svg x={x} y={y} className="overflow-visible">
        {Array.from({ length: numSquares }).map((_, i) => (
          <rect
            strokeWidth="0"
            key={i}
            width={width - 1}
            height={height - 1}
            x={(i * 67) % 1200}
            y={(i * 83) % 900}
            className="animate-pulse fill-neutral-900/[0.04]"
            style={{
              animationDuration: `${(i % 3) + duration}s`,
              animationDelay: `${(i % 5) * 0.7}s`,
            }}
          />
        ))}
      </svg>
    </svg>
  );
}
