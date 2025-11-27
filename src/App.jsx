import { useEffect } from 'react';
import ReactGA from 'react-ga4';

import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Gallery from './components/Gallery/Gallery';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {

  useEffect(() => {
    // 1) Initialize GA
    ReactGA.initialize('G-YRVNLSBS9B'); // <-- your GA4 ID

    // 2) Send one pageview (your site has no routing)
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname + window.location.search,
    });
  }, []);

  return (
    <ThemeProvider>
      <main className="bg-primary text-primary-content overflow-hidden transition-colors duration-300">
        <Navbar />
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="gallery">
          <Gallery />
        </div>
        
        <div id="resume">
          <Resume />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
