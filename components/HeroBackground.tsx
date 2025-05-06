import { useEffect, useState } from "react";
import Lottie from "lottie-react";

const HeroBackground = () => {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch("/assets/lotties/Bluedots.json")
      .then((res) => res.json())
      .then(setAnimationData);
  }, []);

  if (!animationData) return null;

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default HeroBackground;
