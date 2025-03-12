'use client'
import { useRef, useState } from "react";
import AccordionItem from "./AccordionItem";
import {AnimatePresence, motion, stagger} from "framer-motion";

export interface ExperienceItem {
    title: String;
    org: String;
    description: String;
}




export default function Accordion ({accordionData}:{accordionData:Array<ExperienceItem> | null}) {

    const [expanded, setExpanded] = useState<number>(0);
    const contentRefs = useRef<any>([]);
    const childvariantsAlt = {
        visible: { opacity: 1, scale: 1, y: 0, x:0 },
        hidden: { opacity: 1, scale: 1, x: 0, y:0 }
    }
    const childvariants = {
        visible: { opacity: 1, scale: 1, y: 0, x:0 },
        hidden: { opacity: 1, scale: 1, x: 0, y:0 }
    }

    const accordionClick = (e:React.MouseEvent<HTMLButtonElement>, i:number) => {
        e.preventDefault();
        setExpanded(i);

        if (contentRefs.current[i] !== e.target) {
            contentRefs.current[i] = e.target;
            setTimeout(()=>{
                contentRefs.current[i].scrollIntoView();
            }, 300)
        }
    }


    

    return (
        <div id="experience" className="observe-me" data-section="navsection-experience">
            <div className="w-full section-experience section-main">
                <div className="w-full section-header">
                    <h2 className="font-extrabold text-[var(--primary-color)] text-[2em] mb-4 mt-[-50px] section-title">career experience</h2>
                </div>
                {accordionData?.map((item,i)=> {
                    return (
                        <AnimatePresence key={"accordion-" + i}>
                            <motion.section
                                className="accordionSection"
                                initial="hidden"
                                whileInView={"visible"}
                                viewport={{ once: false }}
                                variants={childvariants}
                            >
                                <AccordionItem
                                    key={i}
                                    data={item}
                                    i={i}
                                    expanded={expanded}
                                    setExpanded={accordionClick}
                                ></AccordionItem>
                        </motion.section>
                        </AnimatePresence>
                    )
                })}
            </div>
        </div>      
    )
    
  };
  
  
