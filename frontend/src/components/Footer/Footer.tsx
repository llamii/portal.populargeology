import React, { useEffect, useState } from 'react';

import Button from '@mui/material/Button';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { timeLineSlice } from '../../store/reducers/timeLineSlice';
import { instrumentTypes, timeTypes } from '../../types/timeline';

import './Footer.scss';

import { useNavigate } from 'react-router-dom'
import { pageRedirect } from '../../pages/pageRedirect'
import { footerDisplayStyles } from '../../types/layoutStyles'

interface IFooterProps {
  footerDisplayStyle: footerDisplayStyles
}

export const Footer: React.FC<IFooterProps> = (props) => {

  const { footerDisplayStyle } = props;

  const { time: timeState, instrument: instrumentState } = useAppSelector(
    (state) => state.timeLineReducer,
  );
  const { changeTime } = timeLineSlice.actions;
  const dispatch = useAppDispatch();
  const currentTimeIndex = Object.values(timeTypes).indexOf(timeState);

  const [prevButtonDisabled, setPrevButtonDisabled] = useState(false);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(false);

  const navigate = useNavigate()


  useEffect(() => {
    const isReliefOrEarth = instrumentState === instrumentTypes.relief || instrumentState === instrumentTypes.earth
    const startIndex = isReliefOrEarth ? 4 : 0;

    if (currentTimeIndex !== startIndex && currentTimeIndex !== Object.values(timeTypes).length - 1) {
      setNextButtonDisabled(false)
      setPrevButtonDisabled(false)
    } else if (currentTimeIndex === startIndex) {
      setPrevButtonDisabled(true)
    } else if (currentTimeIndex === Object.values(timeTypes).length - 1) {
      setNextButtonDisabled(true)
    }

  }, [currentTimeIndex, instrumentState])


  const prevTime = () => {
    let prevTimeIndex;
    if (instrumentState === instrumentTypes.relief || instrumentState === instrumentTypes.earth) {
       prevTimeIndex = currentTimeIndex === 4 ? 4 : currentTimeIndex - 1;
    } else {
       prevTimeIndex = currentTimeIndex ? currentTimeIndex - 1 : currentTimeIndex;
    }
    const newTime = Object.values(timeTypes)[prevTimeIndex]

    dispatch(changeTime(newTime));
    navigate(`/${pageRedirect(newTime, instrumentState)}`)
  };

  const nextTime = () => {
    const nextTimeIndex =
        currentTimeIndex === Object.values(timeTypes).length - 1
          ? currentTimeIndex
          : currentTimeIndex + 1;
    const newTime = Object.values(timeTypes)[nextTimeIndex]

    dispatch(changeTime(newTime));
    navigate(`/${pageRedirect(newTime, instrumentState)}`)
  };


  switch (footerDisplayStyle) {

    case 'hide':
      return null

    case 'default':
      return (
        <div className={"footer-default"}>
          <Button color={'inherit'} className={prevButtonDisabled ? 'btn-deactivated' : ''} disableRipple={prevButtonDisabled} onClick={prevTime}>
            Что было раньше?
          </Button>

          <Button color={'inherit'} className={nextButtonDisabled ? 'btn-deactivated' : ''} disableRipple={nextButtonDisabled} onClick={nextTime}>
            Что было дальше?
          </Button>

        </div>
      );

    case 'home':
      return (
        <div className={"footer-home"}>
          <Button>
           <a href="https://populargeology.ru/about/#">О проекте</a>
         </Button>
         <Button>
           <a href="https://populargeology.ru/about/#">Участники</a>
         </Button>
         <Button>
           <a href="https://populargeology.ru/istochniki/">Источники</a>
         </Button>
        </div>
    );

    case 'back':
      return (
        <div className={"footer-back"}>
          <Button color={'inherit'} onClick={() => navigate(`/${pageRedirect(timeState, instrumentState)}`)} variant="outlined">
            НАЗАД
          </Button>
        </div>
      )
  }


};
