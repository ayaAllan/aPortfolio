import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
//components
import MyNavbar from "./components/navbar/navbar.component";
import MyCarousel from "./components/carousel/carousel.component";
import MyTitleMessage from "./components/title-message/title-message.component";
//pages
import About from "./pages/about/about.component";
import Projects from "./pages/projects/projects.component";
import Experience from './components/experience-timeline/experience.component';

const App = () =>  {
  return (
    <div>
      <MyNavbar/>
      <MyCarousel/>
      <MyTitleMessage/>

      <div>
        <Parallax
          blur={{ min: -1000, max: 1000 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <Container className="container-box rounded">
            <Fade duration={800}>
              <About />
            </Fade>
          </Container>
        </Parallax>
      </div>
      <Container className="container-box rounded">
          <Fade duration={800}>
            <Experience/>
          </Fade>
      </Container>
      <Container className="container-box rounded">
          <Fade duration={800}>
            <Projects/>
          </Fade>
      </Container>
    </div>
  );
}

export default App;
