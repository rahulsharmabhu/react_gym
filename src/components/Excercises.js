import React,{useEffect,useState} from 'react'
import Pagination from '@mui/material/Pagination'
import {Box,Stack,Typography} from '@mui/material'
import { excerciseOptions, fetchData } from '../utils/fetchData'
import ExcerciseCard from './ExcerciseCard'

const Excercises = ({excercises,setExcercises,bodyPart}) => {
  return (
    <Box id="excercises"
    sx={{mt: {lg: '110px'}}}
    mt="50px"
    p="20px"
    >
    <Typography vatiant='h3' mb="43px">
      Showing Results
    </Typography>
    <Stack direction="row" sx={{gap: {lg: '110px', xs: '50px'}}} flexWrap= 'wrap' justifyContent="center">
    {excercises.map((excercise,index) => (
     <ExcerciseCard key={index} excercise={excercise} />
    ))}
    </Stack>
    </Box>
  )
}

export default Excercises