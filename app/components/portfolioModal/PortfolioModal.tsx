'use client'
import { Project } from "../../../components/projectDiv";
import {AiOutlineClose} from "react-icons/ai"
import parse from 'html-react-parser'
import {motion} from "framer-motion";
import Image from 'next/image';

export default function PortfolioModal({show, onClose, projectData}:{show:any, onClose:Function, projectData:Project | null}){

    
    const handleCloseClick = () => {
        onClose();
    }

    return(
        
        <>
        
            <div className={`portfolio-modal relative z-[999] ${show ? "--modal-open" : ""}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">

                <div className="portfolio-modal__wrapper">
                    <div onClick={()=>handleCloseClick()} className="portoflio-modal__container">
                        <div className="portfolio-modal__inner">
                                <div className="portfolio-modal__close-button-container">
                                    <button type="button" onClick={() => handleCloseClick()} className="portfolioModalCloseBtn text-3xl"><AiOutlineClose /></button>
                                </div>
                                <div className="portfolio-modal__project-container">
                                    <div className="portfolio-modal__project-header">
                                        {projectData ? (
                                            <div className="portfolio-modal__project-header__inner">
                                                <h2 className="portfolio-modal__project-header__title">{projectData?.title}</h2>
                                                {projectData.url && (
                                                    <a className="portfolio-modal__project-header__link" href={projectData.url} target="_blank">{projectData.urlText}</a>
                                                )}
                                                <ul className='portfolio-modal__project-header__stacklist'>
                                                {projectData.stack.map((stack, i)=>{
                                                    return (
                                                        <li key={`portfoliomodal-stack-${i}`}>{stack}</li>
                                                    )
                                                })}
                                                </ul>
                                                <h3 className="portfolio-modal__project-header__description">{parse(projectData.info.overview.text)}</h3>
                                            </div>
                                         ):null}
                                    </div>
                                    <div className="portfolio-modal__project-descriptions">
                                        
                                            {projectData?.info.details && projectData?.info.details.map((content:any, i:number) => {
                                                return (
                                                    <div key={`portfoliomodal-projectitem-${i}`} className="portfolio-modal__project-section">
                                                        <div className="portfolio-modal__project-section__media">
                                                                <Image
                                                                    className="basis-full m-auto w-full h-auto"
                                                                    src={String(content.image)}
                                                                    alt={`Project Image for ${content.title}`}
                                                                    width={500}
                                                                    height={"500"}
                                                                    style={{
                                                                        width: '100%',
                                                                        height: 'auto',
                                                                    }}
                                                                    placeholder="blur" // Use a blur placeholder
                                                                    blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkWFdbDwADjQGsfn+HOwAAAABJRU5ErkJggg=="
                                                                />
                                                        </div>
                                                        <div className="portfolio-modal__project-section__content">
                                                            <h2 className="portfolio-modal__project-section__content__title">{content.title}</h2>
                                                            <div className="portfolio-modal__project-section__content-description">{parse(content.text)}</div>
                                                            {content.stats && (
                                                                <ul>
                                                                    {content.stats?.map((stat:string,i:number)=>{
                                                                        return (
                                                                            <li key={`work-item-stat-${i}`}><span>{stat}</span></li>
                                                                        )
                                                                    })}
                                                                </ul>
                                                            )}
                                                        </div>
                                                    </div>
                                                )
                                            })}

                                        
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )

}