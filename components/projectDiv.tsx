import {motion, useScroll, useInView, useAnimate} from "framer-motion";
import parse from 'html-react-parser'
import { useState } from "react";
import { FaChevronRight, FaExpand } from "react-icons/fa";
import Image from 'next/image';

export interface Project {
    title: string;
    info: {
        overview: {
            text:string,
            image: string
        },
        details: Array<Object>
    };
    url: string;
    urlText: string;
    content: string;
    stack: Array<string>;
    images: Array<URL>;
    featuredImage: string;
  }

export default function ProjectDiv({clickHandler, item}:{clickHandler:any, item:Project}){

    const [scope, animate] = useAnimate();
    const [isInView, setIsInview] = useState(false);


    return (
        
        <div className="work-gallery__project-item">
            <button onClick={()=>clickHandler(item)}>
                
                <div className="work-gallery__project-item__media">
                    <Image
                        src={item.featuredImage}
                        alt={`Project Image for ${item.title}`}
                        width={500}
                        height={500}
                        style={{
                            width: '100%',
                            height: '100%',
                          }}
                        placeholder="blur" // Use a blur placeholder
                        blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkWFdbDwADjQGsfn+HOwAAAABJRU5ErkJggg=="
                    />
                </div>
                <div className="work-gallery__project-item__description">
                    <h2>{item.title}</h2>
                    <ul className="work-gallery__project-item__stacklist">
                        {item.stack.map((stack:String , i:number) => {
                            return (
                                <li key={`stacklistitem-${i}`}>{stack}</li>            
                            )
                        })}
                    </ul>
                    <div>{parse(item.info.overview.text)}</div>
                    <span className="work-gallery__project-item__button">VIEW DETAILS</span>
                </div>
            </button>
        </div>
    )
}