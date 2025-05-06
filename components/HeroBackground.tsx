"use client";

import { useEffect, useRef } from "react";

const HeroBackground = () => {
  // Load the Lottie player script once on mount
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="absolute inset-0 -z-10 pointer-events-none overflow-hidden"
      dangerouslySetInnerHTML={{
        __html: `
          <lottie-player
            src="https://lottie.host/84be9c59-2e19-42bc-9376-bf58a77a0d0f/1b5WE8TfJo.lottie"
            background="transparent"
            speed="1"
            loop
            autoplay
            style="width: 100%; height: 100%; position: absolute; object-fit: cover;"
          ></lottie-player>
        `,
      }}
    />
  );
};

export default HeroBackground;
