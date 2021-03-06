import React from 'react';
import './App.scss';
import Header from "./Components/Header/Header";
import Intro from "./Components/Intro/Intro";
import Features from "./Components/Features/Features";
import Works from "./Components/Works/Works";
import Team from "./Components/Team/Team";
import Reviews from "./Components/Reviews/Reviews";
import Download from "./Components/Download/Download";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <>
    <Header />
    <Intro />
    <Features />
    <Works />
    <Team />
    <Reviews />
    <Download />
    <Footer />
    </>
  );
}

export default App;
