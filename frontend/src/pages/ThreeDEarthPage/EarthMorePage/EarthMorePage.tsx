import React from 'react'
import { Layout } from '../../../components/Layout/Layout';
import Grid from '@mui/material/Grid';
import './EarthMorePage.scss';
import { useAppSelector } from '../../../hooks/redux'

import { useGetEarthByIdQuery } from '../../../store/services/EarthService'
import { historyOfEarth } from '../../../types/timeline'


export const  EarthMorePage = () => {
  const { time: timeState, instrument: instrumentState } = useAppSelector((state) => state.timeLineReducer);

  const { data } = useGetEarthByIdQuery(historyOfEarth.indexOf(timeState)+1) // remove for deploy


  return (
    <Layout time={timeState}
            instrument={instrumentState}
            breadCrumbsFirstCrumb={'Узнать больше'}
            footerDisplayStyle={'back'}
            headerDisplayStyle={'default'}>
      <Grid className="parent" container spacing={0}>
        <Grid className="left" item xs={6}>
          <h1>тут будет узнать больше {data?.title}</h1>
          {/* <h2>{data?.time_ago}</h2> */}
          {/* <div className='contents'> */}
          {/*   { */}
          {/*     data?.text.split('\r\n').map((paragraph, index) => { */}
          {/*       return ( */}
          {/*         <p key = {index}> */}
          {/*           {paragraph} */}
          {/*         </p> */}
          {/*       ) */}
          {/*     }) */}
          {/*   } */}
          {/* </div> */}

        </Grid>
        <Grid className="right" item xs={6}>
         <h1>damn</h1>
        </Grid>
      </Grid>
    </Layout>
  );
};