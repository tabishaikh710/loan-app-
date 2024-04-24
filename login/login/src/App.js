import React from 'react';


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';


import LoginForm from './LoginForm'; // Adjust the path to LoginForm
import  Basecontent from './Basecontent';

function App() {
  return (
    
    <BrowserRouter>
    <div className="App">
      <Routes>

        <Route index element={<LoginForm />} />
        <Route path="/basecontent" element={<Basecontent />} />
      </Routes>
    </div>
  </BrowserRouter>
   
  );
}

export default App;
