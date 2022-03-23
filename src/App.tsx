import React from 'react';
import './App.css';
import MainPage from './Pages/MainPage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ViewObj from './Pages/ViewObj';

function App() {
  return (
    <div className="App">
  <BrowserRouter>
    <Routes>  
      <Route path="/" element={<MainPage />} />
      <Route path="/:id" element={<ViewObj />} />
    </Routes>
  </BrowserRouter>,
    </div>  
  );
}

export default App;
