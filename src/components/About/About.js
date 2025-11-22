import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import profileImg from "../../Assets/Images/ra.jpeg"; 
import Toolstack from "./Toolstack";
import pdf from "../../Assets/Cv_Raed_Hamrouni.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function About() {
  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I'M</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ 
                paddingTop: "120px", 
                paddingBottom: "50px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "25px"
              }}
              className="about-img"
            >
              <img 
                src={profileImg} 
                alt="Raed Hamrouni" 
                className="img-fluid" 
                style={{
                  borderRadius: "20px",
                  border: "4px solid #06b6d4",
                  boxShadow: "0 0 30px rgba(6, 182, 212, 0.5), 0 0 60px rgba(139, 92, 246, 0.3)",
                  maxWidth: "450px",
                  width: "100%",
                  objectFit: "cover",
                  transform: "translateY(-20px)"
                }}
              />
              
              {/* Download CV Button */}
              <Button
                variant="primary"
                href={pdf}
                target="_blank"
                download
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  padding: "12px 30px",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  borderRadius: "10px",
                  minWidth: "200px",
                  boxShadow: "0 8px 25px rgba(6, 182, 212, 0.4)",
                  transition: "all 0.3s ease"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 12px 35px rgba(6, 182, 212, 0.6)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(6, 182, 212, 0.4)";
                }}
              >
                <AiOutlineDownload style={{ fontSize: "1.3rem" }} />
                Download CV
              </Button>
            </Col>
          </Row>
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />

          <Github />
        </Container>
      </Container>
    </>
  );
}

export default About;