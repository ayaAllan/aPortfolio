import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from "react-bootstrap/Button";
import Profile from '../../assets/img/profile/profile.webp'
import "./about.style.css";

const About = () => {
    return (
        <div id='about'>
            <div className="about">
                <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
                <Container>
                    <Row className="pt-3 pb-5 align-items-center">
                        {/* profile pic */}
                        <Col xs={12} md={6}>
                            <Row className="justify-content-center mb-2 mr-2">
                                <Image className="profile justify-content-end" alt="profile" src={Profile} fluid thumbnail/>
                            </Row>
                        </Col>

                        {/* details section */}
                        <Col xs={12} md={6}>
                            <Row className=" align-items-start p-2 my-details rounded">
                                Hi there! I'm <strong>&nbsp;Anas</strong>
                                <br />Lived in Germany, Morocco, and Canada. 
                                <br />
                                Mechanical engineering is my passion, prototyping to develop ideas into working realizations by overlapping disciplines and fading the lines between mechanical. electrical, and computer engineering.
                                <br /> I have experience working in a small bike shop and Fortune 500 pharmaceuticals company, take a look at my work and resume bellow.
                                <br /> <br />

                                {/* buttons section */}
                                <Col className="d-flex justify-content-end flex-wrap" >
                                <div>
                                    <a href="#contact">
                                    <Button className="m-1" variant="outline-primary">
                                        Let's talk
                                    </Button>
                                    </a>
                                </div>
                                <div>
                                    <a href="file:///Users/aya.abuallan/Downloads/anas_berrada_resume.pdf" target="_blank" rel="noopener noreferrer">
                                    <Button className="m-1" variant="outline-primary">
                                        My Resume
                                    </Button>
                                    </a>
                                </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default About
