export default function ProjectItem({data}) {
    const title = data.properties.이름.title[0]?.plain_text;
    return (
        <div>
            <span>{title}</span>
        </div>
    )
}