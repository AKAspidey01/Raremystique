"use client";
import { ReactLenis } from 'lenis/react';

export default function SmoothScrollProvider({ children }) {
  return (
    <ReactLenis root options={{ duration: 1.2, easing: (t) => 1 - Math.pow(1 - t, 2), smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}