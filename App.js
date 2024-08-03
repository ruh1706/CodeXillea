import React, { useState,useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from './Component/Header';
import Main from "./Component/Main";
import Footer from "./Component/Footer";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Courses from "./Component/Courses";
import UpcomingBatches from "./Component/UpcomingBatches";
import Registration from "./Component/Registration";

function App() {
  return (
    <div >
       
    
    <Header></Header>
     <Routes>
     <Route path='/' element={<Main/>}/>
     <Route path='/Aboutus' element={<About/>}/>
     <Route path='/Contactus' element={<Contact/>}/>
     <Route path='/Courses' element={<Courses/>}/>
     <Route path='/UpcomingBatches' element={<UpcomingBatches/>}/>
     <Route path='/Registration' element={<Registration/>}/>
     
       
     </Routes>
     <Footer></Footer>
   
     </div>
  );
}

export default App;
