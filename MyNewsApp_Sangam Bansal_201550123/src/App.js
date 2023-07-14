import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = ()=> {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
 
    return (
      <BrowserRouter>
      <div style={{backgroundColor: "black"}}> 
        <NavBar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
      <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey="30d54ba7ec604c3b8d40e04e1db658d1" key="general" pageSize={pageSize} country="in" category="general"/>}/>
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey="30d54ba7ec604c3b8d40e04e1db658d1" key="business" pageSize={pageSize} country="in" category="business"/>}/>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey="30d54ba7ec604c3b8d40e04e1db658d1" key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}/>
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey="30d54ba7ec604c3b8d40e04e1db658d1" key="general" pageSize={pageSize} country="in" category="general"/>}/>
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey="30d54ba7ec604c3b8d40e04e1db658d1" key="technology" pageSize={pageSize} country="in" category="technology"/>}/>
          </Routes>
      </div>
      </BrowserRouter>
    )
 
}

export default App;