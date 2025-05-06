import Lottie from "lottie-react";
import animationData from "../assets/lotties/Bluedots.json"; // adjust path if needed

const HeroBackground = () => {
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
