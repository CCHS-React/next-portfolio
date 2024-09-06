import {TOKEN, DATABASE_ID} from "../config";

export default function Projects({projects}) {
    console.log(projects)
    return (
        <>
            <h1>프로젝트</h1>
        </>
    )
}
export async function getStaticProps() {
    const options = {
        method : 'POST',
        headers : {
            Accept : 'application/json',
            'Notion-Version' : '2022-06-28',
            'Content-Type' : 'application/json',
            Authorization : `Bearer ${TOKEN}`
        },
        body : JSON.stringify({page_size : 100})
    };
    const res = await fetch (`https://api.notion.com/v1/databases/${DATABASE_ID}/query`,options)
    const projects = await res.json()

    // const projectNames = projects.result.map((aProject) =>(
    //     aProject.properties.Name.title[0].plain_text
    // ))
    // console.log(`projectNames : ${projectNames}`);
    
    return {
        props : {projects},
    }

}