import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

// Importez vos images ici
import cert1 from "../../Assets/Images/IBM1.jpg";
import cert2 from "../../Assets/Images/Clean.jpg";
import cert3 from "../../Assets/Images/Ai_Agents.jpg";
import cert4 from "../../Assets/Images/IntroductionR.jpg";
import cert5 from "../../Assets/Images/IntermediateR.jpg";
import cert6 from "../../Assets/Images/Tydiverse.jpg";
import DATAcamp from "../../Assets/Images/datacamps.jpeg"
import IBMLogo from "../../Assets/Images/IBMLOGO.png";

function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const certifications = [
    {
      image: cert1,
      organization: "IBM",
      title: "Artificial Intelligence Fundamentals",
      logo: IBMLogo
    },
     {
      image: cert4,
      organization: "DATACAMP",
      title: "Introduction to R",
      logo: DATAcamp
    },
     {
      image: cert5,
      organization: "DATACAMP",
      title: "Intermediate R",
      logo: DATAcamp
    },
    {
      image: cert6,
      organization: "DATACAMP",
      title: "Introduction to Tydiverse",
      logo: DATAcamp
    },
    {
      image: cert2,
      organization: "DATACAMP",
      title: "Cleaning Data with Generative AI",
      logo: DATAcamp
    },
    {
      image: cert3,
      organization: "DATACAMP",
      title: "Introduction to Ai Agents",
      logo: DATAcamp
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === certifications.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? certifications.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12} style={{ paddingTop: "30px", paddingBottom: "50px" }}>
            <h1 style={{ fontSize: "2.6em", paddingBottom: "20px", textAlign: "center" }}>
              <strong className="purple">Certification</strong>
            </h1>
            
            <p style={{ 
              color: "white", 
              textAlign: "center", 
              fontSize: "1.1em", 
              marginBottom: "50px",
              maxWidth: "800px",
              margin: "0 auto 50px"
            }}>
              I am constantly seeking new opportunities to expand my knowledge and enhance my skills. 
              I actively pursue certifications and tests to validate what I've learned, allowing me to 
              stay current in my field.
            </p>

            {/* Carousel */}
            <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto" }}>
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                style={{
                  position: "absolute",
                  left: "20px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 2,
                  background: "rgba(200, 112, 240, 0.2)",
                  border: "1px solid rgba(200, 112, 240, 0.5)",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#c770f0",
                  fontSize: "24px"
                }}
              >
                <BsChevronLeft />
              </button>

              {/* Certification Cards */}
              <Row style={{ justifyContent: "center", alignItems: "center", minHeight: "500px" }}>
                {certifications.map((cert, index) => {
                  let position = "nextSlide";
                  if (index === currentIndex) {
                    position = "activeSlide";
                  }
                  if (
                    index === currentIndex - 1 ||
                    (currentIndex === 0 && index === certifications.length - 1)
                  ) {
                    position = "lastSlide";
                  }

                  return (
                    <Col 
                      key={index}
                      md={4}
                      style={{
                        opacity: position === "activeSlide" ? 1 : 0,
                        transform: position === "activeSlide" ? "scale(1)" : "scale(0.8)",
                        transition: "all 0.3s ease",
                        position: position === "activeSlide" ? "relative" : "absolute",
                        display: position === "activeSlide" ? "block" : "none"
                      }}
                    >
                      <div style={{
                        background: "rgba(25, 35, 60, 0.8)",
                        borderRadius: "15px",
                        padding: "20px",
                        border: "1px solid rgba(200, 112, 240, 0.3)",
                        boxShadow: "0 4px 20px rgba(200, 112, 240, 0.2)"
                      }}>
                        {/* Certificate Image */}
                        <div style={{
                          background: "#fff",
                          borderRadius: "10px",
                          padding: "15px",
                          marginBottom: "20px",
                          minHeight: "350px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}>
                          <img 
                            src={cert.image} 
                            alt={cert.title}
                            style={{ 
                              width: "100%", 
                              height: "auto",
                              borderRadius: "5px"
                            }}
                          />
                        </div>

                        {/* Certificate Info */}
                        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                          <img 
                            src={cert.logo} 
                            alt={cert.organization}
                            style={{ 
                              width: "50px", 
                              height: "50px",
                              borderRadius: "50%",
                              background: "#fff",
                              padding: "5px"
                            }}
                          />
                          <div>
                            <h4 style={{ color: "#c770f0", marginBottom: "5px", fontSize: "1.1em" }}>
                              {cert.organization}
                            </h4>
                            <p style={{ color: "white", margin: 0, fontSize: "0.95em" }}>
                              {cert.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                style={{
                  position: "absolute",
                  right: "20px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 2,
                  background: "rgba(200, 112, 240, 0.2)",
                  border: "1px solid rgba(200, 112, 240, 0.5)",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#c770f0",
                  fontSize: "24px"
                }}
              >
                <BsChevronRight />
              </button>

              {/* Dots Indicator */}
              <div style={{ 
                display: "flex", 
                justifyContent: "center", 
                gap: "10px", 
                marginTop: "30px" 
              }}>
                {certifications.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      border: "none",
                      background: index === currentIndex ? "#c770f0" : "rgba(200, 112, 240, 0.3)",
                      cursor: "pointer",
                      transition: "all 0.3s ease"
                    }}
                  />
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;