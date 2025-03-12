import WorkGallery from '@/components/workGallery';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'
import AnimatedHeader from '@/app/components/animatedHeader/animatedHeader';
import Accordion from './components/accordion/Accordion';
import StackList from './components/stackList/StackList';
import jsonData from '@/json/data.json'


export default async function Page() {

  let pageData = jsonData;

  return (
    <div className="w-full">
          <AnimatedHeader />
          <WorkGallery
            pageData={pageData}
          ></WorkGallery>
          <div className="bottom-section w-full">
            <Accordion
              accordionData={pageData.resume.experience}
            ></Accordion>
            <StackList
              stackData={pageData.resume.stackNew}
            ></StackList>
            <div id="contact" className="pre-footer w-full observe-me" data-section="navsection-contact">
                <div className="w-full m-auto" >
                      <div className="w-full md:w-3/6 contact-info 2xl:p-0">
                        <h1 className="text-white bg-[var(--secondary-color)] px-2 py-2 inline-block font-extrabold text-3xl">say hello.</h1>
                        <ul className="text-2xl mt-4">
                          <li><a href="https://www.linkedin.com/in/brenthoffmann/"><FaLinkedin className="mr-2"/> LinkedIn</a></li>
                        </ul>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

