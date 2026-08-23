import React from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import paralegal from '../assets/projects/paralegal.png'
import oxbow from '../assets/projects/oxbow.png'
import realestate from '../assets/projects/realestate.png'
import pulsedex from '../assets/projects/pulsedex.png'
import timothy from '../assets/projects/timothy.png'
import githubImg from '../assets/projects/OIP.webp'
// import blogWebsite from '../assets/projects/blog-website.png'

const Projects = () => {

  const liveWorks = [
    {
      id: 1,
      imgPath: timothy,
      isBlog: false,
      title: "Personal Portfolio Website",
      description: "A personal portfolio/Church website built with React, and Laravel. It features a responsive design, dynamic content management, and integration with social media platforms. The website serves as a showcase for personal projects, skills, and professional achievements, providing an engaging user experience.",
      demoLink: "https://timothyknaadzenga.org/",
    },

    {
      id: 2,
      imgPath: realestate,
      isBlog: false,
      title: "Real Estate Website",
      description: "ChristesRealEstate is a web-based real estate management system designed to streamline property, agent, blog, and payment administration from a centralized dashboard. The application features a modular React frontend with role-based admin controls, dynamic CRUD operations, and editable payment workflows (including real-time status and property type updates). It is architected to support scalable backend integration (Laravel API), clean state management, and future production deployment, with a strong focus on maintainability, data consistency, and operational efficiency.",
      demoLink: "https://christieesrealestate.com/",
    },
    {
      id: 3,
      imgPath: pulsedex,
      isBlog: false,
      title: "Pulsedex Website",
      description: "Pulsedex is a cryptocurrency exchange that allows users to trade cryptocurrencies worldwide and earn by mining.",
      demoLink: "https://pulsedex.online/",
    },
    {
      id: 4,
      imgPath: oxbow,
      isBlog: false,
      title: "Oxbow Lake Hotel",
      description: "Oxbow is a full featured hotel booking and management platform built with a Laravel backend and React frontend. It supports real-time room availability checks, branch-specific admin dashboards (Swali and Gbarantoru), secure online payment via Paystack and automated status updates for bookings. The system also includes email confirmations, receipt generation and a structured booking flow tailored for both customers and hotel staff.",
      demoLink: "https://www.oxbowlakehotel.com.ng/",
    },
    {
      id: 5,
      imgPath: paralegal,
      isBlog: false,
      title: "Paralegal Web App",
      description: "This paralegal web app is designed to enhance the academic experience for students and administrators alike. With features such as personalized school portals, dedicated student and admin logins, and seamless integration with Paystack for secure payments, users can easily manage their educational needs. The app allows for PDF receipt downloads for transactions, simplifying record-keeping. Additionally, students can register for hostel accommodations directly through the portal. With a user-friendly interface and robust functionality, this app aims to streamline administrative processes while providing an efficient platform for students to access vital resources.",
      demoLink: "https://ugipnig.com/",
    },
  ];

  const githubWorks = [
    {
      id: 1,
      imgPath: githubImg,
      isBlog: false,
      title: "Spring Boot E-Commerce Shop",
      description: "A backend-focused e-commerce application built with Spring Boot, covering core commerce features such as product management, cart/order handling, and API-driven storefront logic. Built to demonstrate clean layered architecture (controller/service/repository) and RESTful API design principles for a full online shopping backend.",
      ghLink: "https://github.com/oriakhiosamu1/springboot_ecommerce_shop",
    },
    {
      id: 2,
      imgPath: githubImg,
      isBlog: false,
      title: "Spring Boot Blog Website",
      description: "A blog platform built with Spring Boot featuring complete authentication (registration, login, and secured routes). Demonstrates JWT-based auth flow, role handling, and CRUD operations for blog posts within a Spring Boot backend architecture.",
      ghLink: "https://github.com/oriakhiosamu1/springboot_blog_website",
    },
  ];

  const renderCards = (works) => (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      {works.map((work) => {
        return (
          <Col md={4} className="project-card" key={work.id}>
            <ProjectCard
              imgPath={work.imgPath}
              isBlog={work.isBlog}
              title={work.title}
              description={work.description}
              ghLink={work.ghLink}
              demoLink={work.demoLink}
            />
          </Col>
        );
      })}
    </Row>
  );

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Tabs
          defaultActiveKey="live"
          id="projects-tabs"
          className="project-tabs"
          style={{ justifyContent: "center", marginBottom: "20px" }}
        >
          <Tab eventKey="live" title="Live Projects">
            {renderCards(liveWorks)}
          </Tab>
          <Tab eventKey="github" title="GitHub Projects">
            {renderCards(githubWorks)}
          </Tab>
        </Tabs>
      </Container>
    </Container>
  )
}

export default Projects