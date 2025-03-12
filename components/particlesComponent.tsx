import { useCallback } from "react";
import Particles from "react-particles";
import { Container, Engine } from "tsparticles-engine";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

export default function ParticlesComponent() {
    
    
    const particlesInit = useCallback(async (engine: Engine) => {

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        //await console.log(container);
    }, []);
    
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                emitters: {
                    direction: "top",
                    rate: {
                      quantity: 50,
                      delay: 0.01
                    },
                    size: {
                      width: 100,
                      height: 10
                    },
                    position: {
                      x: 50,
                      y: 400
                    }
                  },
                fullScreen: {
                    enable: false,
                    zIndex: -1,
                    },
                style:{
                    position:"absolute",
                    left: "0",
                    top: "50px",
                    width: "100%",
                    height: "550px",

                },                
                fpsLimit: 120,
                particles: {
                    color: {
                        value: ["#02b7ff","#bd35da", "#ffffff"],
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        attract: {
                            enable: false,
                            distance: 100,
                            rotate: {
                                x: 2000,
                                y: 2000
                            }
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
                        value: 50,
                    },
                    opacity: {
                        value: 0.5211089197812949,
                        random: false,
                        anim: {
                          enable: true,
                          speed: 1,
                          opacity_min: 0.1,
                          sync: true
                        }
                      },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: .5, max: 3 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};