import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Lottie from 'react-lottie-player'
import lottiejson from '/public/mainpage.json'
import styles from './mainpage.module.css'
import {useRouter} from 'next/router';

export default function Mainpage() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/projects');
  };
  return (
    <div className={styles.wrapper}>
      <Grid container spacing={10}>
        <Grid size={5}>
          <div className={styles.introduce}>
            <h2 style={{fontSize:'45px'}}>안녕하세요!</h2>
            <p>안녕하세요, 제 이름은 [이름]입니다. 저는 [출생지]에서 태어나 [나이]살이며, 현재 [학교/회사/직업]에 다니고 있습니다. 저는 어렸을 때부터 [특정 관심사/취미]에 관심이 많았고</p>
            <Button variant="contained" onClick={handleClick}>프로젝트 보러가기</Button>
          </div>
        </Grid>
        <Grid size={7}>
          <div>
            <Lottie
              loop
              animationData={lottiejson}
              play
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
