import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import {excerciseOptions,youtubeOptions,fetchData} from '../../utils/fetchData';
import Details from '../Details';
import ExerciseVideos from '../ExerciseVideos';
import SimilarExercises from '../SimilarExercises';

const ExcerciseDetail = () => {
  const [exerciseDetail,setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();
  useEffect(() => {
  const fetchExercisesData = async() => {
    const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
    const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

    const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, excerciseOptions);
    setExerciseDetail(exerciseDetailData);

    const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
    setExerciseVideos(exerciseVideosData.contents);

    const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, excerciseOptions);
    setTargetMuscleExercises(targetMuscleExercisesData);

    const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, excerciseOptions);
    setEquipmentExercises(equimentExercisesData);
  }
  fetchExercisesData();
  },[id])
  return (
    <Box>
      <Details exerciseDetail={exerciseDetail}  />
      <ExerciseVideos/>
      <SimilarExercises/>
    </Box>
  )
}

export default ExcerciseDetail