'use client'
import {animate, motion, useMotionValue, useTransform} from "framer-motion";
import ParticlesComponent from '@/components/particlesComponent';
import { FaPlus } from "react-icons/fa";
import { useSearchParams } from "next/navigation";
import CursorBlinker from "./cursorBlinker";
import { useEffect } from "react";

export default function AnimatedHeader(){

    let role = ['full-stack developer'];
    const searchParams = useSearchParams();
    const search = searchParams?.get('r');
    const count = useMotionValue(0);
    const baseText = "Versatile developer, excels at transforming complex ideas into impactful solutions, bridging technical and non-technical teams with clarity, adaptability, and a passion for innovation. ";
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) =>
        baseText.slice(0, latest)
    );

    if(search == "pm")role = ['project manager'];
    if(search == "fed")role = ['front end developer'];

    useEffect(() => {
        const controls = animate(count, baseText.length, {
          type: "tween", 
          duration: 2,
          ease: "easeInOut",
          delay: .25
        });
        return controls.stop;
      }, []);


    
        return (
            <div className="w-full relative homepage-titlecard observe-me" data-section="navsection-about">
                <div className="homepage-titlecard__inner">
                    <div className="homepage-titlecard__logo">
                        <motion.div
                        initial={{ opacity: 0, y: -25, x:0 }}
                        animate={{ opacity: 1, y:0, x:0 }}
                        transition={{ delay: 0, duration: 0.5 }}
                        >
                            <h1>Brent Hoffmann</h1>
                        </motion.div>
                    </div>
                    {role && role.length > 1 && (
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y:0 }}
                            transition={{ delay: 0, duration: 1 }}
                        >
                            <h2 className="role-subheader">{role[0]}<span><FaPlus className="mx-2" /></span>{role[1]}</h2>
                        </motion.div>
                        
                    )}
                    {role && role.length == 1 && (
                    <>
                        <div className="flex-col items-center justify-center">
                            <motion.div
                                initial={{ opacity: 0, y: 25 }}
                                animate={{ opacity: 1, y:0 }}
                                transition={{ delay: 1, duration: 1 }}
                            >
                                <h2 className="text-[1em] md:text-[2em] font-bold flex items-center subheader">{role[0]}</h2>
                            </motion.div>
                        </div>
                    </>
                    )}

                    <div className="mt-4 d-inline">
                        <motion.span>
                            {displayText}
                        </motion.span>
                        <CursorBlinker />
                    </div>
                </div>
            </div>
        )
}

