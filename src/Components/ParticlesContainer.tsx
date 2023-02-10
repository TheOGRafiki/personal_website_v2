import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    await loadSlim(engine);
  }, []);

  const particleStyle = {
    position: "static",
    width: "100%",
    height: " 100vh",
    top: 0,
  } as React.CSSProperties;
  return (
    <>
      <Particles
        id="tsparticles"
        style={particleStyle}
        init={particlesInit}
        options={{
          fullScreen: {
            enable: true,
            zIndex: 1,
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onhover: {
                enable: true,
                mode: "grab",
              },
            },
            modes: {
              push: {
                quantity: 3,
              },
              grab: {
                distance: 200,
                line_linked: {
                  opacity: 0.1,
                },
              },
            },
          },
          particles: {
            color: {
              value: "#0000",
            },
            links: {
              color: "#0000",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 60,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
    </>
  );
};

export default ParticlesContainer;
