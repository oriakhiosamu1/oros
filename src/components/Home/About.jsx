import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
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
                  I'm a
                  <b className="yellow"> BACKEND DEVELOPER </b>
                  building reliable, scalable APIs with
                  <b className="yellow"> JAVA / SPRING BOOT </b>
                  and
                  <b className="yellow"> PHP / LARAVEL, </b>
                  paired with
                  <b className="yellow"> REACT.JS </b>
                  on the frontend when a project calls for it.
                  <br />
                  <br />
                  My day-to-day covers
                  <b className="yellow"> RESTFUL API DESIGN, </b>
                  <b className="yellow"> JWT AUTHENTICATION, </b>
                  <b className="yellow"> MYSQL </b>
                  database design, and integrating payment providers like
                  <b className="yellow"> PAYSTACK AND FLUTTERWAVE </b>
                  into production systems.
                  <br />
                  <br />
                  I care about clean, maintainable code and ship with
                  <b className="yellow"> CI/CD PIPELINES </b>
                  via GitHub Actions, so features go from local machine to
                  production without drama.
                  <br />
                  <br />
                  I'm self-taught, currently deepening my
                  <b className="yellow"> AWS </b>
                  cloud fundamentals, and I bring a
                  <i>
                    <b className="yellow">
                      {" "}
                      BIOCHEMISTRY BACKGROUND
                    </b>
                  </i>
                  {" "}that shaped how I approach problems: methodically, and
                  with attention to detail.
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