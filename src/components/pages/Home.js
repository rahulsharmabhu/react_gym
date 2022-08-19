import React, {useState} from 'react'
import {Box} from '@mui/material';
import Excercises from '../Excercises';
import HeroBanner from '../HeroBanner';
import SearchExcercises from '../SearchExcercises';

const Home = () => {
  const [excercises,setExcercises] = useState([]);
  const [bodyPart,setBodyPart] = useState('all');
  return (
    <Box>
      <HeroBanner/>
      <SearchExcercises 
      setExcercises={setExcercises}
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}
      />
      <Excercises 
       setExcercises={setExcercises}
       excercises={excercises}
       bodyPart={bodyPart}
      />
    </Box>
  )
}

export default Home