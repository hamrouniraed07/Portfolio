import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import StudyQuiz from "../../Assets/Images/StudyQuiz.png"
import FootApp from "../../Assets/Images/FootApp.png"
import TNDB from "../../Assets/Images/TNDB.png"
import age from "../../Assets/Images/age.jpg"
import Hotel from "../../Assets/Images/Hotel.png"



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StudyQuiz}
              isBlog={false}
              title="Study_Quiz"
              description="StudyPal is an intelligent, gamified learning platform that uses local AI (Ollama) to create personalized quiz experiences. Built with FastAPI backend and React frontend, it adapts to user performance, provides AI-generated feedback, and features a dynamic avatar system based on learning progress."
              ghLink = "https://github.com/hamrouniraed07/Study_Quiz"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FootApp}
              isBlog={false}
              title="Football Team Management"
              description="A full-stack web application for managing football teams, built using the MEAN stack (MongoDB, Express.js, Angular, Node.js). This project allows users to view, add, update, and delete football teams, including details like players, coaches, trophies, and match statistics."
              ghLink="https://github.com/hamrouniraed07/Angular_Project"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={age}
              isBlog={false}
              title="Biological Age Estimation"
              description="This project aims to develop a regression model to predict a patient's biological age from dermatological data. The goal is to apply and master data preprocessing, modeling, and evaluation techniques for medical datasets"
              ghLink="https://github.com/hamrouniraed07/ML_Project"
                            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hotel}
              isBlog={false}
              title="Hotel Microservices Project"
              description="This project is a hotel booking application designed with a microservices architecture. The services are exposed via gRPC, GraphQL, REST, and Kafka, and orchestrated using Docker and Docker Compose."
              ghLink="hhttps://github.com/hamrouniraed07/Hotel_microservices"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TNDB}
              isBlog={false}
              title="TNDB - The Movie Database"
              description="TNDB is a full-stack web application designed for managing and exploring a movie database. full-stack web application designed for managing and exploring a movie database. It allows users to sign up, sign in, browse movies by categories, view movie details, add movies to watchlists and favorites, rate movies, and leave reviews. The application features a user-friendly frontend built with vanilla HTML, CSS, and JavaScript, and a robust backend API powered by Node.js, Express, and MongoDB."
              ghLink="https://github.com/hamrouniraed07/TNDB"
              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
