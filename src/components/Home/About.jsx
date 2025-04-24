import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";



const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hi, my name is <span className="yellow">ORIAKHI OSAMUDIAMEN </span>
                 and I'm from <span className="yellow"> EDO STATE, NIGERIA.</span>
                <br />
                <br />
                I recently graduated with a Bachelor's degree in BIOCHEMISTRY in 2023.
                <br />
                <br />
                  As a
                  <b className="yellow"> FULL-STACK </b> developer,  
                  specializing in PHP and LARAVEL, along with REACT.JS for dynamic UIs
                  <br />
                  <br />and API integration. I also create
                    <b className="yellow"> MOBILE APPLICATIONS, </b>
                    using REACT NATIVE. As a Beginner
                  <b className="yellow"> PENETRATION TESTER / BUG BOUNTY HUNTER,</b>
                  <br />
                  <br />
                  I'm focused in enhancing my skills in
                  <b className="yellow">CYBERSECURITY </b> and
                  <i>
                    <b className="yellow">
                      {" "}
                      WEBSITE AND MOBILE APPLICATION SECURITY.
                    </b>
                  </i>
                  {/* &nbsp; like
                  <i>
                    <b className="yellow"> React.js</b>
                  </i> */}
                  <br />
                  <br />
                  What sets me apart is my unique combination of
                  <i>
                    <b className="yellow"> WEB AND MOBILE DEVELOPMENT, </b>
                    expertise coupled with a growing emphasis on
                    <b className="yellow"> SECURITY, enabling me to deliver, </b>
                    functional, secure and innovative applications.
                  </i>
                  <br />
                  
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/oriakhiosamu1"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  {/* <li className="social-icons">
                    <a
                      href="https://twitter.com/19sajib"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="twitter"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li> */}
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/osamudiamen-oriakhi-527197361?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://wa.me/2348105775687"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="instagram"
                    >
                      <FaWhatsapp />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About