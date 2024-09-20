import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useRouter} from 'next/router';

export default function ProjectItem({data}) {
    const title = data.properties.이름.title[0]?.plain_text;
    const tags = data.properties.태그.multi_select;
    const start = data.properties?.작업기간.date.start;
    const end = data.properties?.작업기간.date.end;
    const description = data.properties?.설명.rich_text[0].plain_text;
    const github = data.properties?.Github.url;
    const imgSrc = data.cover.file?.url || data.cover.external.url;
    const demo = data.properties?.Demo.url;
    console.log(demo);
    const router = useRouter();

    function countWorkDays(start,end) {
        const startDate = new Date(start);
        const endDate = new Date(end);

        let workdays = 0;
        let currentDate = new Date(startDate);

        while(currentDate <= endDate) {
            workdays++;
            currentDate.setDate(currentDate.getDate()+1);
        }
        return workdays;
    }
    
    const workDay = countWorkDays(start,end)
    return (
      <Card sx={{ width: 345, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <CardMedia sx={{ height: 300 }} image={imgSrc} title={title} />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          {workDay} 일
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
        <Typography variant="body3" sx={{ color: 'text.secondary' }}>
          {tags.map((aTag) => (
            <span key={aTag.id}>#{aTag.name} </span>
          ))}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => { router.push(github); }}>Visit Github</Button>
        {demo && (
          <Button size="small" onClick={() => { router.push(demo); }}>View Demo</Button>
        )}
      </CardActions>
    </Card>
    )
}