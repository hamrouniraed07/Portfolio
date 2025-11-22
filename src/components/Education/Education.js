import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { FaUniversity, FaArrowRight } from "react-icons/fa";

import isitcomLogo from "../../Assets/Images/isitcom.jpg";
import PolyLogo from "../../Assets/Images/poly-tec.webp";

function Education() {
 const educationData = [
  {
    logo: PolyLogo,
    institution: "Polytechnic School of Sousse",
    degree: "Engineering Degree – Data Science",
    period: "2024 – Present",
    description:
      "Currently pursuing an Engineering Degree in Data Science at the Polytechnic School of Sousse, an institution recognized with the EUR-ACE Certificate of Excellence. The program provides strong foundations in machine learning, predictive analytics and advanced software development. This engineering curriculum reinforces my expertise in Artificial Intelligence while strengthening my analytical and problem-solving abilities.",
    link: "#",
    badge1: { text: "Ongoing", color: "#4a90e2" },
    badge2: { icon: "🎓", color: "#50c878" }
  },
  {
    logo: isitcomLogo,
    institution: "ISITCOM – Higher Institute of Computer Science and Communication Technologies",
    degree: "Professional Master’s Degree – Web Services & Multimedia",
    period: "2023 – Present",
    description:
      "Enrolled in a Professional Master’s program specializing in Web Services and Multimedia at ISITCOM. The program combines strong theoretical knowledge and practical experience in full-stack development, service-oriented architectures, cloud technologies, and multimedia systems.",
    link: "#",
    badge1: { text: "Ongoing", color: "#4a90e2" },
    badge2: { icon: "🎓", color: "#50c878" }
  },
  {
    logo: isitcomLogo,
    institution: "ISITCOM – Higher Institute of Computer Science and Communication Technologies",
    degree: "Bachelor's Degree – Computer Science & Multimedia",
    period: "2020 – 2023",
    description:
      "Completed a Bachelor's Degree in Computer Science and Multimedia at ISITCOM. This program provided essential foundations in software engineering, web development, databases, UI/UX, and multimedia technologies, preparing me for further studies in software engineering and data science.",
    link: "#",
    badge1: { text: "Completed", color: "#50c878" },
    badge2: { icon: "🎓", color: "#50c878" }
  }
];


  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12} style={{ paddingTop: "30px", paddingBottom: "50px" }}>
            <h1 style={{ fontSize: "2.6em", paddingBottom: "20px", textAlign: "center" }}>
              <strong className="purple">Education</strong>
            </h1>
            
            <p style={{ 
              color: "white", 
              textAlign: "center", 
              fontSize: "1.1em", 
              marginBottom: "50px",
              maxWidth: "900px",
              margin: "0 auto 50px"
            }}>
              I am a future Data Science Engineer with a strong foundation in Artificial Intelligence, predictive analytics, and software development. Thanks to my versatile academic path, I combine solid engineering principles with hands-on experience in building intelligent, data-driven solutions. Passionate about new technologies, I leverage data and modern development practices to solve complex problems with rigor, creativity, and a collaborative mindset.
            </p>

            {/* Education Timeline */}
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
              {educationData.map((edu, index) => (
                <div 
                  key={index}
                  style={{
                    background: "rgba(25, 35, 60, 0.6)",
                    borderRadius: "15px",
                    padding: "30px",
                    marginBottom: "30px",
                    border: "1px solid rgba(200, 112, 240, 0.3)",
                    position: "relative",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 8px 30px rgba(200, 112, 240, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <Row>
                    {/* Logo */}
                    <Col md={2} style={{ display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
                      <div style={{
                        width: "100px",
                        height: "100px",
                        background: "#fff",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "10px"
                      }}>
                        <img 
                          src={edu.logo} 
                          alt={edu.institution}
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>
                    </Col>

                    {/* Content */}
                    <Col md={10}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "15px" }}>
                        <div>
                          <h3 style={{ 
                            color: "#4a9eff", 
                            fontSize: "1.8em", 
                            marginBottom: "5px",
                            fontWeight: "600"
                          }}>
                            {edu.institution}
                          </h3>
                          <h4 style={{ 
                            color: "white", 
                            fontSize: "1.2em",
                            fontWeight: "500",
                            marginBottom: "10px"
                          }}>
                            {edu.degree}
                          </h4>
                        </div>
                        
                        {/* Badges */}
                        <div style={{ display: "flex", gap: "10px" }}>
                          {edu.badge1 && (
                            <span style={{
                              background: edu.badge1.color,
                              color: "white",
                              padding: "5px 15px",
                              borderRadius: "20px",
                              fontSize: "0.9em",
                              fontWeight: "600"
                            }}>
                              {edu.badge1.text}
                            </span>
                          )}
                          {edu.badge2 && (
                            <span style={{
                              background: edu.badge2.color,
                              color: "white",
                              padding: "5px 15px",
                              borderRadius: "50%",
                              fontSize: "1.2em",
                              width: "35px",
                              height: "35px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center"
                            }}>
                              {edu.badge2.icon}
                            </span>
                          )}
                        </div>
                      </div>

                      <p style={{ 
                        color: "#a8a8c0", 
                        fontSize: "0.95em",
                        marginBottom: "15px",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px"
                      }}>
                        {edu.period}
                      </p>

                      <p style={{ 
                        color: "rgba(255, 255, 255, 0.85)", 
                        fontSize: "1em",
                        lineHeight: "1.7",
                        marginBottom: "20px",
                        textAlign: "justify"
                      }}>
                        {edu.description}
                      </p>

                   
                    </Col>
                  </Row>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Education;