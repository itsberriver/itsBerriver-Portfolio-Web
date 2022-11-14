//import { Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from '../src/views/Home'
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <AboutMe/>
      
    </div>
  );
}

export default App;
