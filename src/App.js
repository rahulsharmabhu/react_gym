import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './components/pages/Home';
import ExcerciseDetail from './components/pages/ExcerciseDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Box width="400px" sx={{width : {xl: '1488px'}}} m="auto">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/excercise/:id' element={<ExcerciseDetail/>} />
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;
