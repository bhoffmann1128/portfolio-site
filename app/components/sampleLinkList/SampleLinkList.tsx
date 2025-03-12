'use client'
import { FaFile } from "react-icons/fa";

export interface SampleItem {
    title: String;
    url: String;
}

export default function SampleLinkList ({sampleData}:{sampleData:Array<SampleItem> | null}) {

    return (
        <div className="pb-[50px]">
            <div className="w-full m-auto sample-link-list">
                {sampleData?.map((item,i)=> {
                    return (
                        <a href={`${item.url}`} key={"sampleLink-" + i} target="_blank" className="text-black bg-white text-[1.2em] w-full px-6 py-2 block flex items-center"><FaFile className="mr-[10px] text-[var(--primary-color)]" /> {item.title}</a>
                    )
                })}
            </div>
        </div>      
    )
    
  };
  
  
