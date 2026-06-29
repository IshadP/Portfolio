"use client";

import { useState } from "react";
import { useMotionValue, useSpring, useMotionValueEvent } from "framer-motion";

const BASE = { x: 250, y: 280 };
const DEPTH_X = -8;
const DEPTH_Y = 3;
const LEN = Math.sqrt(DEPTH_X * DEPTH_X + DEPTH_Y * DEPTH_Y);
const UX = DEPTH_X / LEN;
const UY = DEPTH_Y / LEN;
const LAYERS_COUNT = 10;
const MID = (LAYERS_COUNT - 1) / 2;
const MAX_DIST = 192;

export default function DepthStack() {
  const [mouse, setMouse] = useState({ x: 250, y: 280 });

  // Raw interactive target motion values
  const rawX = useMotionValue(250);
  const rawY = useMotionValue(280);

  // Apply spring damping for smooth organic tracking
  const springX = useSpring(rawX, { stiffness: 120, damping: 20 });
  const springY = useSpring(rawY, { stiffness: 120, damping: 20 });

  // Sync animation frames to local React rendering state
  useMotionValueEvent(springX, "change", (val) => {
    setMouse((prev) => ({ ...prev, x: val }));
  });
  useMotionValueEvent(springY, "change", (val) => {
    setMouse((prev) => ({ ...prev, y: val }));
  });

  return (
    <svg
      className="w-full max-w-[800px] aspect-square border rounded-xl bg-black shadow-2xl cursor-crosshair"
      viewBox="0 0 500 500"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 500;
        const y = ((e.clientY - rect.top) / rect.height) * 500;
        rawX.set(x);
        rawY.set(y);
      }}
      onMouseLeave={() => {
        rawX.set(250);
        rawY.set(280);
      }}
    >
      {Array.from({ length: LAYERS_COUNT }).map((_, i) => {
        const spacing = 16 * (i - MID);
        const originX = BASE.x + UX * spacing;
        const originY = BASE.y + UY * spacing;

        const mx = mouse.x - BASE.x;
        const my = mouse.y - BASE.y;

        const projectedMouse = mx * UX + my * UY;
        const dist = Math.abs(projectedMouse - spacing);
        const t = Math.max(0, 1 - dist / MAX_DIST);
        const smoothT = t * t;

        const h = 16 + smoothT * 128;
        const gray = Math.round(50 + (255 - 50) * smoothT);
        const strokeColor = `rgb(${gray},${gray},${gray})`;

        return (
          <g key={i} transform={`translate(${originX}, ${originY})`}>
            <path
              strokeLinejoin="round"
              strokeWidth="1.5px"
              d={`
                M -109 ${-32 - h}
                L -101 ${-35 - h}
                L 101 ${29 - h}
                L 101 29
                L 93 32
                L -109 -32
                Z
              `}
              fill="#000"
              stroke={strokeColor}
            />
            <path
              strokeLinejoin="round"
              strokeWidth="0.8px"
              d={`
                M -94 ${-27 - h}
                L 93 ${32 - h}
                L 93 24
              `}
              fill="none"
              stroke="#333"
            />
          </g>
        );
      })}
    </svg>
  );
}
