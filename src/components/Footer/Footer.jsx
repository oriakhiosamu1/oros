import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/sLogo.png";

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
            <span>Dedicated to creating impactful solutions!</span>
          </Col>
          <Col md="4" className="footer-copywright">
            <span>Copyright © {year} </span>
            {/* <img src={logo} className="img-fluid logo" alt="brand" /> */}
            <span className = "px-2"> OROS </span>
          </Col>
          
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/oriakhiosamu1"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/19sajib"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/osamudiamen-oriakhi-527197361?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/19sajib/"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="leetcode"
                >
                  <FaWhatsapp />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    );  
}

export default Footer