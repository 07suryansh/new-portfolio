import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Certificate from './Components/Certificate';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    
      <Route path='/' element={<Home/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/About' element={ <About/>}/>
      <Route path='/Skills' element={ <Skills/>}/>
      <Route path='/Experience' element={ <Experience/>}/>
      <Route path='/Education' element={ <Education/>}/>
      <Route path='/Projects' element={ <Projects/>}/>
      <Route path='/Certificate' element={ <Certificate/>}/>
      <Route path='/Contact' element={ <Contact/>}/>
     
    </Routes>
    </BrowserRouter>
      
      
     
    </>
  );
}

export default App;
