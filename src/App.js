import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import Header from './components/Header';
import Counter from './components/Counter';

function App(props){
  return (
    <BrowserRouter>
      <Header/>
      <hr/>
      <Routes>
          <Route path="/" element={<h1>Welcome to this site</h1>}/>
          <Route path="/counter" element={<Counter name="Roland" age="30"/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
  
}

export default App;