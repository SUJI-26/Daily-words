import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "#0f0c29" },
        particles: {
          number: { value: 40 },
          size: { value: 3 },
          move: { enable: true, speed: 1 },
          links: { enable: true }
        }
      }}
    />
  );
}

export default ParticlesBackground;
