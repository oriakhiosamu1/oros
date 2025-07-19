import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import rumax from '../assets/projects/rumax.png'
import saxo from '../assets/projects/saxo.png'
import myjob from '../assets/projects/myjob.png'
import paralegal from '../assets/projects/paralegal.png'
import laravelReact from '../assets/projects/laravel-react.jpg'
import oxbow from '../assets/projects/oxbow.png'
import acelife from '../assets/projects/acelife.png'

const Projects = () => {

  const recentWorks = [
    {
      id: 1,
      imgPath: oxbow,
      isBlog:false,
      title: "Oxbow Lake Hotel",
      description:"Oxbow is a full featured hoel booking and management platform built with a Laravel backend and React frontend. It supports real-time room availability checks, branch-specific admin dashboards (Swali and Gbarantoru), secure online payment via Paystack and automated status updates for bookings. The system also includes email confirmations, receipt generation and a sructured booking flow tailored for both customers and hotel staff.",
      ghLink: "https://github.com/oriakhiosamu1/oxbow",
      demoLink: "https://www.oxbowlakehotel.com.ng/",
    },

    {
      id: 2,
      imgPath: acelife,
      isBlog:false,
      title: "Acelife Synergy",
      description:"Acelife Synergy is a modern e-commerce platform offering a seamless online shopping experience. Built with robust security features, it integrates Google OAuth for secure authentication, Google ReCaptcha to prevent bot traffic, and a reliable payment gateway system for processing transactions. The platform combines user-friendly design with strong backend functionality for smooth product browsing, checkout and order management.",
      ghLink: "https://github.com/oriakhiosamu1/acelife",
      demoLink: "https://www.acelifesynergy.shop/",
    },

    {
      id: 3,
      imgPath: rumax,
      isBlog:false,
      title: "Rumax Technology",
      description:"This web project is an e-commerce platform designed for the seamless sale of hardware and software products. Users can easily browse, compare, and purchase a wide range of items, from cutting-edge computer components to essential software applications. With a user-friendly interface, secure payment, this platform aims to enhance the shopping experience while providing valuable information and support through detailed product description to customers.",
      ghLink: "https://github.com/oriakhiosamu1/rumax_tech",
      demoLink: "https://rumaxtechnology.online/",
    },

    {
      id: 4,
      imgPath: saxo,
      isBlog:false,
      title: "Saxo Investment Company",
      description:"This website is dedicated to empowering users in the world of cryptocurrency investment. It offers a comprehensive platform for swapping, investing with  crypto currencies. Designed for both beginners and experienced investors, the site provides insights into market trends and expert advice to help users make informed decisions. With robust security measures and user friendly navigation, this platform aims to simplify the investment process and support users in maximizing their cryptocurrency potentials.",
      ghLink: "https://saxoinvestment.online",
      demoLink:"https://saxoinvestment.online",
    },

    {
      id: 5,
      imgPath: myjob,
      isBlog:false,
      title: "Job Listing Website",
      description:"This job listing website, built with Laravel, serves as an intuitive platform connecting job seekers with employers. Featuring advanced search filters, users can easily browse and apply for job opportunities across various industries. The site allows employers to post job listings, manage applications, and find the perfect candidates with ease. With a responsive design and user-friendly interface, this platform aims to streamline the job search process while providing valuable resources and insights to both job seekers and employers, ensuring a seamless and efficient experience",
      ghLink:"https://github.com/oriakhiosamu1/my_job",
      demoLink:"https://github.com/oriakhiosamu1/my_job",
    },

    {
      id: 6,
      imgPath: laravelReact,
      isBlog:false,
      title: "E-Commerce Website",
      description:"This dynamic e-commerce shop, developed using Laravel and React, offers a seamless shopping experience that combines powerful backend functionality with an engaging frontend interface. Customers can effortlessly browse a wide range of products, filter by categories, and add items to their carts with real-time updates. The platform features secure payment processing, order tracking, and user account management, all while ensuring fast load times and responsiveness. With an intuitive design and integrated product reviews, this shop aims to provide a delightful and efficient shopping journey for all users.",
      ghLink:"https://github.com/oriakhiosamu1/laravel-react-e-commerce-app ",
      demoLink:"https://github.com/oriakhiosamu1/laravel-react-e-commerce-app ",
    },

    {
      id: 7,
      imgPath: paralegal,
      isBlog:false,
      title: "Paralegal Web App",
      description:"This paralegal web app is designed to enhance the academic experience for students and administrators alike. With features such as personalized school portals, dedicated student and admin logins, and seamless integration with Paystack for secure payments, users can easily manage their educational needs. The app allows for PDF receipt downloads for transactions, simplifying record-keeping. Additionally, students can register for hostel accommodations directly through the portal. With a user-friendly interface and robust functionality, this app aims to streamline administrative processes while providing an efficient platform for students to access vital resources.",
      ghLink:"https://github.com/oriakhiosamu1/paralegal_web_app ",
      demoLink:"https://github.com/oriakhiosamu1/paralegal_web_app ",
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