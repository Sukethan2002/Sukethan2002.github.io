
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Achievements from "./components/Achievements";
import Volunteering from "./components/Volunteering";
import Sports from "./components/Sports";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";

import "./styles/hero.css";
import "./styles/effects.css";

function App() {
  return (
    <>
      <CursorGlow />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Achievements />
        <Volunteering />
        <Sports />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
