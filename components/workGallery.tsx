'use client'
import PortfolioModal from "@/app/components/portfolioModal/PortfolioModal";
import ProjectDiv from "./projectDiv";
import { Project } from "./projectDiv";
import {AnimatePresence, motion, stagger} from "framer-motion";
import { useState } from "react";

export default function WorkGallery({pageData}:{pageData:any | undefined}){

    const [showModal, setShowModal] = useState(false);
    const [currentProjectData, setCurrentProjectData] = useState<Project | null>(null)

    const closeModal = () => {
        setShowModal(false);
    }

    const clickProjectHandler = (item:Project) => {
        setCurrentProjectData(item);
        setShowModal(true);
    }

    const childvariants = {
        visible: { opacity: 1, scale: 1, y: 0, x:0, filter: "blur(0px)", transition: { ease: "easeOut", duration: .5, delay: .5 } },
        hidden: { opacity: 0, scale: 1, x: -225, filter: "blur(10px)" }
    }
    const childvariantsAlt = {
        visible: { opacity: 1, scale: 1, y: 0, x:0, transition: {ease: "easeOut" } },
        hidden: { opacity: 0, scale: 1, x: 225 }
    }

    const container = {
        hidden: { opacity: 0, x: 0 },
        show: {
          opacity: 1,
          transition: {
            duration: .5,
            staggerChildren: 1,
            staggerDirection: -1,
            delay: 0.5,
            x: 0
          }
        }
      };

    return (
            <>
            <div id="featuredProjects" data-section="navsection-featuredprojects" className="observe-me w-full section-workgallery section-main">
                <div className="w-full">
                    <div className="section-header">
                        <motion.div variants={container} initial="hidden" whileInView="show" animate="show" exit="visible" viewport={{once: true}}>
                        <h2 className="section-title">featured projects</h2>
                        </motion.div>
                    </div>
                    <motion.div variants={container} initial="hidden" whileInView="show" animate="show" exit="visible" viewport={{once: true}}>
                    <div className="w-full work-gallery-container">
                        {pageData.projects.map((item : Project, i:number) => {

                            return (
                                <AnimatePresence key={"animate-" + i}>
                                    <motion.div
                                        initial="visible"
                                        whileInView={"visible"}
                                        viewport={{ once: true }}
                                        variants={i % 2 == 0 ? childvariantsAlt : childvariants}
                                    >
                                        <ProjectDiv
                                            key={`project-item-0${i}`}
                                            clickHandler={() => clickProjectHandler(item)}
                                            item={item}
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            )
                        })}
                    </div>
                    </motion.div>
                </div>
            </div>
            <div className="w-full section-workgallery-bottom relative z-2"></div>
            <PortfolioModal
            show={showModal}
            onClose={()=>closeModal()}
            projectData={currentProjectData}
          ></PortfolioModal>
          </>

    )
}