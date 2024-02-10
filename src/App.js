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

function App() {
  return (
    <>
    <Navbar/>
      <Home/>
      
    <About/>
   <Skills/>
     <Experience/>
     <Education/>
      <Projects/>
      <Certificate/>
    <Contact/>
    </>
  );
}

export default App;
