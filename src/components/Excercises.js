import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import { excerciseOptions, fetchData } from "../utils/fetchData";
import ExcerciseCard from "./ExcerciseCard";
import Loader from "./Loader";

const Excercises = ({ excercises, setExcercises, bodyPart }) => {
  console.log(excercises,'this is excercise');
  const [currentPage, setCurrentPage] = useState(1);
  const [excercisesPerPage] = useState(6);
  
  useEffect(() => {
    const fetchExcercisesData = async () => {
    let excerciseData = [];
    if(bodyPart === 'all'){
     excerciseData = await fetchData('https://excercisedb.p.rapidapi.com/exercises',excerciseOptions);
    } else {
     excerciseData = await fetchData(`https://excercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,excerciseOptions);
    }
    setExcercises(excerciseData);
    };
    fetchExcercisesData();
   },[bodyPart])

  const indexOfLastExcercise = currentPage * excercisesPerPage;
  const indexOfFirstExcercise = indexOfLastExcercise - excercisesPerPage;
  const currentExcercise = excercises.slice(indexOfFirstExcercise,indexOfLastExcercise);
  const paginate = (e,value) => {
  setCurrentPage(value);
  window.scrollTo({top: 1800,behavior: 'smooth'})
  }

  if (!currentExcercise.length) return <Loader />;

  return (
    <Box id="excercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography vatiant="h3" mb="43px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExcercise.map((excercise, index) => (
          <ExcerciseCard key={index} excercise={excercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {excercises.length > 9 && (
          <Pagination color="standard" shape="rounded" defaultPage={1} count={Math.ceil(excercises.length / excercisesPerPage )} page={currentPage} onChange={paginate} 
          size="large"/>
        )}
      </Stack>
    </Box>
  );
};

export default Excercises;
