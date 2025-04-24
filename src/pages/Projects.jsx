import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import rumax from '../assets/projects/rumax.png'
import saxo from '../assets/projects/saxo.png'
import myjob from '../assets/projects/myjob.png'
import paralegal from '../assets/projects/paralegal.png'
import laravelReact from '../assets/projects/laravel-react.jpg'

const Projects = () => {
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rumax}
              isBlog={false}
              title="Rumax Technology"
              description="This web project is an e-commerce platform designed for the seamless sale of hardware and software products. Users can easily browse, compare, and purchase a wide range of items, from cutting-edge computer components to essential software applications. With a user-friendly interface, secure payment, this platform aims to enhance the shopping experience while providing valuable information and support through detailed product description to customers."
              ghLink="https://github.com/oriakhiosamu1/rumax_tech"
              demoLink="https://rumaxtechnology.online/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={saxo}
              isBlog={false}
              title="Saxo Investment Company"
              description="This website is dedicated to empowering users in the world of cryptocurrency investment. It offers a comprehensive platform for swapping, investing with  crypto currencies. Designed for both beginners and experienced investors, the site provides insights into market trends and expert advice to help users make informed decisions. With robust security measures and user friendly navigation, this platform aims to simplify the investment process and support users in maximizing their cryptocurrency potentials."
              ghLink="https://github.com/19sajib/saxotrade"
              demoLink="https://saxoinvestment.online/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myjob}
              isBlog={false}
              title="Job Listing Website"
              description="This job listing website, built with Laravel, serves as an intuitive platform connecting job seekers with employers. Featuring advanced search filters, users can easily browse and apply for job opportunities across various industries. The site allows employers to post job listings, manage applications, and find the perfect candidates with ease. With a responsive design and user-friendly interface, this platform aims to streamline the job search process while providing valuable resources and insights to both job seekers and employers, ensuring a seamless and efficient experience"
              ghLink="https://github.com/oriakhiosamu1/my_job "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={paralegal}
              isBlog={false}
              title="Paralegal Web App"
              description="This paralegal web app is designed to enhance the academic experience for students and administrators alike. With features such as personalized school portals, dedicated student and admin logins, and seamless integration with Paystack for secure payments, users can easily manage their educational needs. The app allows for PDF receipt downloads for transactions, simplifying record-keeping. Additionally, students can register for hostel accommodations directly through the portal. With a user-friendly interface and robust functionality, this app aims to streamline administrative processes while providing an efficient platform for students to access vital resources."
              ghLink="https://github.com/oriakhiosamu1/paralegal_web_app "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={laravelReact}
              isBlog={false}
              title="E-Commerce Website"
              description="This dynamic e-commerce shop, developed using Laravel and React, offers a seamless shopping experience that combines powerful backend functionality with an engaging frontend interface. Customers can effortlessly browse a wide range of products, filter by categories, and add items to their carts with real-time updates. The platform features secure payment processing, order tracking, and user account management, all while ensuring fast load times and responsiveness. With an intuitive design and integrated product reviews, this shop aims to provide a delightful and efficient shopping journey for all users."
              ghLink="https://github.com/oriakhiosamu1/laravel-react-e-commerce-app "
              // demoLink="https://project-krypto.netlify.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  )
}

export default Projects