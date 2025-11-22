import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { IoFootball } from "react-icons/io5";
import { CgGym } from "react-icons/cg";
import footballImg from "../../Assets/Images/foot.jpeg";
import gymImg from "../../Assets/Images/gym.jpeg";


function Interests() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "50px" }}>
          <Col md={12}>
            <h1 style={{ fontSize: "2.6em", paddingBottom: "50px", textAlign: "center" }}>
              My <strong className="purple">Interests</strong>
            </h1>

            {/* Football Section */}
            <Row style={{ alignItems: "center", marginBottom: "100px" }}>
              {/* Left Side - Content */}
              <Col md={6} style={{ paddingRight: "40px" }}>
                <div style={{
                  background: "transparent",
                  padding: "20px 0"
                }}>
                  {/* Icon and Title */}
                  <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "15px",
                    marginBottom: "25px"
                  }}>
                    <div style={{
                      fontSize: "3em",
                      color: "#c770f0",
                      background: "rgba(199, 112, 240, 0.1)",
                      width: "70px",
                      height: "70px",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}>
                      <IoFootball />
                    </div>
                    <h2 style={{ 
                      color: "white", 
                      margin: 0,
                      fontSize: "2em",
                      fontWeight: "600"
                    }}>
                      Football
                    </h2>
                  </div>

                  {/* Description */}
                  <p style={{ 
                    color: "white", 
                    fontSize: "1.05em", 
                    lineHeight: "1.8",
                    marginBottom: "20px",
                    textAlign: "justify"
                  }}>
                  Football has been my passion since childhood. The beautiful game represents teamwork, strategy, and the pursuit of excellence. I currently play as a member of Thrayette Sport in the 3rd division in Tunisia. Whether on the field or analyzing tactics, football teaches valuable lessons about dedication and perseverance.
                  </p>

                  <p style={{ 
                    color: "rgba(255, 255, 255, 0.85)", 
                    fontSize: "1.05em", 
                    lineHeight: "1.8",
                    marginBottom: "25px",
                    textAlign: "justify"
                  }}>
                    I follow major leagues and tournaments, appreciate the technical aspects of the game, and enjoy playing with friends whenever possible. The strategic thinking required in football often parallels problem-solving in software development, making it a perfect complement to my technical work.
                  </p>

                  {/* Tags */}
                  <div style={{ 
                    display: "flex", 
                    gap: "10px", 
                    flexWrap: "wrap"
                  }}>
                    <span style={{
                      background: "rgba(139, 92, 72, 0.5)",
                      color: "#f0d4b8",
                      padding: "6px 15px",
                      borderRadius: "20px",
                      fontSize: "0.9em",
                      fontWeight: "500",
                      border: "1px solid rgba(139, 92, 72, 0.7)"
                    }}>
                      Team Sports
                    </span>
                    <span style={{
                      background: "rgba(139, 92, 72, 0.5)",
                      color: "#f0d4b8",
                      padding: "6px 15px",
                      borderRadius: "20px",
                      fontSize: "0.9em",
                      fontWeight: "500",
                      border: "1px solid rgba(139, 92, 72, 0.7)"
                    }}>
                      Strategy
                    </span>
                    <span style={{
                      background: "rgba(139, 92, 72, 0.5)",
                      color: "#f0d4b8",
                      padding: "6px 15px",
                      borderRadius: "20px",
                      fontSize: "0.9em",
                      fontWeight: "500",
                      border: "1px solid rgba(139, 92, 72, 0.7)"
                    }}>
                      Fitness
                    </span>
                  </div>
                </div>
              </Col>

              {/* Right Side - Image */}
              <Col md={6}>
                <div style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
                  height: "500px",
                  position: "relative"
                }}>
                  <img 
                    src={footballImg}
                    alt="Football"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                </div>
              </Col>
            </Row>

            {/* Gym Section */}
            <Row style={{ alignItems: "center", marginBottom: "50px" }}>
              {/* Left Side - Image */}
              <Col md={6}>
                <div style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
                  height: "500px",
                  position: "relative"
                }}>
                  <img 
                    src={gymImg}
                    alt="Gym"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                </div>
              </Col>

              {/* Right Side - Content */}
              <Col md={6} style={{ paddingLeft: "40px" }}>
                <div style={{
                  background: "transparent",
                  padding: "20px 0"
                }}>
                  {/* Icon and Title */}
                  <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "15px",
                    marginBottom: "25px"
                  }}>
                    <div style={{
                      fontSize: "3em",
                      color: "#c770f0",
                      background: "rgba(199, 112, 240, 0.1)",
                      width: "70px",
                      height: "70px",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}>
                      <CgGym />
                    </div>
                    <h2 style={{ 
                      color: "white", 
                      margin: 0,
                      fontSize: "2em",
                      fontWeight: "600"
                    }}>
                      Gym & Fitness
                    </h2>
                  </div>

                  {/* Description */}
                  <p style={{ 
                    color: "white", 
                    fontSize: "1.05em", 
                    lineHeight: "1.8",
                    marginBottom: "20px",
                    textAlign: "justify"
                  }}>
                    Physical fitness is essential for maintaining mental clarity and productivity. The gym is where I challenge myself, build discipline, and develop the resilience needed for both personal and professional growth.
                  </p>

                  <p style={{ 
                    color: "rgba(255, 255, 255, 0.85)", 
                    fontSize: "1.05em", 
                    lineHeight: "1.8",
                    marginBottom: "25px",
                    textAlign: "justify"
                  }}>
                    Regular training keeps me energized and focused, helping me perform at my best in all aspects of life. I believe in the connection between physical health and mental performance. The discipline and consistency required in fitness training directly translates to achieving goals in software development.
                  </p>

                  {/* Tags */}
                  <div style={{ 
                    display: "flex", 
                    gap: "10px", 
                    flexWrap: "wrap"
                  }}>
                    <span style={{
                      background: "rgba(139, 92, 72, 0.5)",
                      color: "#f0d4b8",
                      padding: "6px 15px",
                      borderRadius: "20px",
                      fontSize: "0.9em",
                      fontWeight: "500",
                      border: "1px solid rgba(139, 92, 72, 0.7)"
                    }}>
                      Strength Training
                    </span>
                    <span style={{
                      background: "rgba(139, 92, 72, 0.5)",
                      color: "#f0d4b8",
                      padding: "6px 15px",
                      borderRadius: "20px",
                      fontSize: "0.9em",
                      fontWeight: "500",
                      border: "1px solid rgba(139, 92, 72, 0.7)"
                    }}>
                      Discipline
                    </span>
                    <span style={{
                      background: "rgba(139, 92, 72, 0.5)",
                      color: "#f0d4b8",
                      padding: "6px 15px",
                      borderRadius: "20px",
                      fontSize: "0.9em",
                      fontWeight: "500",
                      border: "1px solid rgba(139, 92, 72, 0.7)"
                    }}>
                      Wellness
                    </span>
                  </div>
                </div>
              </Col>
            </Row>

          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Interests;