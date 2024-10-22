// components/DrumSVG.tsx
'use client';

import React from 'react';

const DrumSVG: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-16 h-16 text-secondary"
    aria-hidden="true"
    focusable="false"
  >
    <ellipse cx="12" cy="9" rx="10" ry="5"></ellipse>
    <path d="M7 13.4v7.9"></path>
    <path d="M12 14v8"></path>
    <path d="M17 13.4v7.9"></path>
    <path d="M2 9v8a10 5 0 0 0 20 0V9"></path>
  </svg>
);

export default DrumSVG;