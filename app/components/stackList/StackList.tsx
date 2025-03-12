"use client"
import { FaAws, FaCamera, FaCss3, FaDatabase, FaDotCircle, FaFile, FaGit, FaPen, FaPencilAlt, FaPhp, FaReact, FaStar, FaUsers, FaWordpress } from 'react-icons/fa';
import {SiNextdotjs} from "react-icons/si"
import {DiJavascript1} from "react-icons/di"
import {BsFillGearFill, BsBoxFill} from "react-icons/bs"
import {MdWeb} from "react-icons/md"
import {AnimatePresence, motion} from "framer-motion";


export default function StackList({stackData}:{stackData:any}){

    const childvariantsAlt = {
        visible: { opacity: 1, scale: 1, y: 0, x:0 },
        hidden: { opacity: 1, scale: 1, x: 0 }
    }
    const childvariants = {
        visible: { opacity: 1, scale: 1, y: 0, x:0},
        hidden: { opacity: 1, scale: 1, x: 0 }
    }

    const container = {
        hidden: { opacity: 0, x: 0 },
        show: {
          opacity: 1,
          x: 0,
          transition: {
            duration: .5,
            staggerChildren: 1,
            staggerDirection: -1,
            delay: 0.5,
            x: 0
          }
        }
      };
    
      const social_icons = [
        {
            type: "React",
            library: <FaReact />,
        },
        {
            type: "NEXT",
            library: <SiNextdotjs />,
        },
        {
            type: "Javascript",
            library: <DiJavascript1 />,
        },
        {
            type: "PHP",
            library: <FaPhp />,
        },
        {
            type: "CSS",
            library: <FaCss3 />,
        },
        {
            type: "AWS / RDS",
            library: <FaAws />,
        },
        {
            type: "AWS / LAMBDA",
            library: <FaAws />,
        },
        {
            type: "AWS / API Gateway",
            library: <FaAws />,
        },
        {
            type: "REST",
            library: <BsFillGearFill />,
        },
        {
            type: "MySQL",
            library: <FaDatabase />,
        },
        {
            type: "Wordpress",
            library: <FaWordpress />,
        },
        {
            type: "Headless CMS",
            library: <FaFile />,
        },
        {
            type: "Agile",
            library: <FaUsers />,
        },
        {
            type: "Git",
            library: <FaGit />,
        },
        {
            type: "Illustrator",
            library: <FaPen />,
        },
        {
            type: "Photoshop",
            library: <FaCamera />,
        },
        {
            type: "Canva",
            library: <MdWeb />,
        },
      ];

    return (

        
        <div id="stack" className="m-auto w-full mt-12 pb-[50px] observe-me" data-section="navsection-stack">
            <h3 className="italic mb-4 text-white bg-[var(--secondary-color)] inline-block pl-2 pr-24 py-[7px]">stack.</h3>
            <motion.ul className="px-4 md:px-0 grid grid-cols-2 md:grid-cols-4 items-center w-full justify-evenly stackgrid gap-y-3" variants={container} initial="hidden" whileInView="show" animate="show" exit="hidden" viewport={{once: false}}>
                {social_icons.map((stack:any, i:number) => {
                    
                    return (
                        <AnimatePresence key={"stacklist-" + i}>
                            <motion.div
                                initial="hidden"
                                whileInView={"visible"}
                                viewport={{ once: false }}
                                variants={i % 2 == 0 ? childvariantsAlt : childvariants}
                            >
                             <li><span>{stack.library} {stack.type}</span></li>
                        </motion.div>
                        </AnimatePresence>
                    )
                })}
                
                
            </motion.ul> 
        </div>
        
    )
}