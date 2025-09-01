// import logo from './logo.svg';
import './App.css';
import './StarsAnim.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Parallax from './Parallax';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './experience';
import Contact from './Contact';
import { useState } from 'react';
import Cursor from './cursor';

function App() {
  const [theme,setheme]=useState("day")
  return (
    <>
    <div className="body"  style={{ backgroundColor: theme === 'day' ? 'white' : '#0B1340', color:theme === 'day' ? 'black' : 'white', '--border-color': theme === 'day' ? 'black' : 'white', '--strip': theme === 'day' ?'rgba(255, 255, 255, 0.712)':'#0a1138c5'}}>
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
    <section><Cursor/></section>    
    <section id='Homepage'><Navbar theme={theme} themfunc={setheme}/><Hero/></section>
    <section id='AboutMe'><AboutMe /></section>
    <section id='Parallax'><Parallax type="Projects"/></section>
    <section id='Projects'><Projects theme={theme} /></section>
    <section id='Parallax'><Parallax type="Skills"/></section>
    <section id='Skills'><Skills/></section>
    <section id='Parallax'><Parallax type="Experience"/></section>
<section id='Experience'><Experience theme={theme} /></section>
<section id='Parallax'><Parallax type="Skills"/></section>

    <section id='Contact'><Contact/></section>
    </div>
    </>

  );
}

export default App;
