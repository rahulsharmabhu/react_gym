import React, {useState} from 'react'
import {Box} from '@mui/material';
import Excercises from '../Excercises';
import HeroBanner from '../HeroBanner';
import SearchExcercises from '../SearchExcercises';

const Home = () => {
  return (
    <Box>
      <HeroBanner/>
      <SearchExcercises/>
      <Excercises/>
    </Box>
  )
}

export default Home