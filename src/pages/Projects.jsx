import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import paralegal from '../assets/projects/paralegal.png'
import oxbow from '../assets/projects/oxbow.png'
import realestate from '../assets/projects/realestate.png'
import pulsedex from '../assets/projects/pulsedex.png'

const Projects = () => {

  const recentWorks = [
    {
      id: 1,
      imgPath: realestate,
      isBlog:false,
      title: "Real Estate Website",
      description:"ChristesRealEstate is a web-based real estate management system designed to streamline property, agent, blog, and payment administration from a centralized dashboard. The application features a modular React frontend with role-based admin controls, dynamic CRUD operations, and editable payment workflows (including real-time status and property type updates). It is architected to support scalable backend integration (Laravel API), clean state management, and future production deployment, with a strong focus on maintainability, data consistency, and operational efficiency.",
      // ghLink: "https://github.com/oriakhiosamu1/oxbow",
      demoLink: "https://christieesrealestate.com/",
    },

    {
      id: 2,
      imgPath: pulsedex,
      isBlog:false,
      title: "Pulsedex Website",
      description:"Pulsedex is a cryptocurrency exchange that allows users to trade cryptocurrencies worldwide and earn by mining.", 
      // ghLink: "https://github.com/oriakhiosamu1/oxbow",
      demoLink: "https://pulsedex.online/",
    },

    {
      id: 3,
      imgPath: oxbow,
      isBlog:false,
      title: "Oxbow Lake Hotel",
      description:"Oxbow is a full featured hoel booking and management platform built with a Laravel backend and React frontend. It supports real-time room availability checks, branch-specific admin dashboards (Swali and Gbarantoru), secure online payment via Paystack and automated status updates for bookings. The system also includes email confirmations, receipt generation and a sructured booking flow tailored for both customers and hotel staff.",
      ghLink: "https://github.com/oriakhiosamu1/oxbow",
      demoLink: "https://www.oxbowlakehotel.com.ng/",
    },

    {
      id: 4,
      imgPath: paralegal,
      isBlog:false,
      title: "Paralegal Web App",
      description:"This paralegal web app is designed to enhance the academic experience for students and administrators alike. With features such as personalized school portals, dedicated student and admin logins, and seamless integration with Paystack for secure payments, users can easily manage their educational needs. The app allows for PDF receipt downloads for transactions, simplifying record-keeping. Additionally, students can register for hostel accommodations directly through the portal. With a user-friendly interface and robust functionality, this app aims to streamline administrative processes while providing an efficient platform for students to access vital resources.",
      ghLink:"https://github.com/oriakhiosamu1/paralegal_web_app ",
      demoLink:"https://ugipnig.com/",
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {recentWorks.map((work)=>{
            return (
              <Col md={4} className="project-card">
                <ProjectCard
                  key={work.id}
                  imgPath={work.imgPath}
                  isBlog={work.isBlog}
                  title={work.title}
                  description={work.description}
                  ghLink = {work.ghLink}
                  demoLink={work.demoLink}
                />
              </Col>
            );
          })}

        </Row>
      </Container>
    </Container>
  )
}

export default Projects