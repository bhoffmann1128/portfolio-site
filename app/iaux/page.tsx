import jsonData from '@/json/data.json'
import SampleLinkList from '../components/sampleLinkList/SampleLinkList';


export default async function Page() {

  let pageData = jsonData;

  return (
    <div className="w-full sample-link-list-container">
        <h1 className="text-[3em] bg-[var(--background-color)] mt-[25px] pt-12 pb-4 px-4 mb-4 single-page-header font-extrabold text-[var(--secondary-color)] leading-none">IA / UX WORK SAMPLES</h1>
        <SampleLinkList
            sampleData={pageData.IAUX}
        ></SampleLinkList>

    </div>
  )
}

