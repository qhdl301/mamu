import { useMemo, FC, useEffect, useState } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { MovieInfo, MovieReview } from './components';
import { useRootStore } from '../../../../contexts';
import { useParams } from 'react-router';
import { observer } from 'mobx-react-lite';


const useStyles = makeStyles({
  root: {
      width: '100%',
      height: '100%',
      margin : 4,
      padding : 4,
  }
});

const MovieDetail:FC = () => {
  const clsses = useStyles();
  const {movieBoxoffice} = useRootStore();
  const params = useParams<{movieCd:string}>();
  const [isDetailInfoLoading, setIsDetailInfoLoading] = useState(true);

  const targetMovie = useMemo(()=>{
    // todo : 단, 해당상황은 list에서 basicInfo가 무조건 있다는 전재이다.
    return movieBoxoffice.movieItems.find(item => item.basicInfo.movieCd === params.movieCd)
  },[params.movieCd])

  useEffect(()=>{
    setIsDetailInfoLoading(true);
    targetMovie?.getDetail().then(()=>{
      setIsDetailInfoLoading(false);
    });
  },[targetMovie]);

  return (
    <Box className={clsses.root} component="div">
      <MovieInfo 
        isDetailInfoLoading={isDetailInfoLoading}
        title={targetMovie?.basicInfo.title}
        imgSrc={targetMovie?.basicInfo.imgUrl}
        description={targetMovie?.detailInfo?.description}
       />
      <MovieReview/>
    </Box>
  )
}

export default observer(MovieDetail);