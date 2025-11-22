import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Images/raedd.png"; 
import Tilt from "react-parallax-tilt";
import { AiOutlineRocket } from "react-icons/ai";
import { FaBrain, FaChartLine, FaCode } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a passionate <b className="purple">Data Science Engineer</b> who 
              bridges the gap between data intelligence and software development. 
              My journey combines the analytical power of AI with the creativity 
              of building real-world applications.
              <br />
              <br />
              I'm proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python, JavaScript, TypeScript, and SQL{" "}
                </b>
              </i>
              — mastering both the art of data manipulation and full-stack development.
              <br />
              <br />
              My expertise spans across
              <i>
                <b className="purple">
                  {" "}
                  Machine Learning, Deep Learning, and Predictive Analytics
                </b>
              </i>
              {" "}— where I transform raw data into actionable insights using{" "}
              <b className="purple">TensorFlow, Keras, and Scikit-learn</b>.
              <br />
              <br />
              I specialize in building
              <i>
                <b className="purple">
                  {" "}
                  Intelligent Web Applications, AI-Powered Solutions,{" "}
                </b>
              </i>
              and scalable microservices architectures that leverage the latest 
              in <b className="purple">Artificial Intelligence</b> technology.
              <br />
              <br />
              My tech stack includes building robust backends with
              <b className="purple"> Node.js & Express.js</b>, crafting intuitive 
              frontends using{" "}
              <i>
                <b className="purple">React.js & Angular</b>
              </i>, and orchestrating everything with{" "}
              <b className="purple">Docker, Kubernetes & Kafka</b>.
              <br />
              <br />
              <div style={{ 
                display: "flex", 
                gap: "15px", 
                marginTop: "30px",
                flexWrap: "wrap"
              }}>
                <div style={{
                  background: "rgba(200, 112, 240, 0.1)",
                  border: "1px solid rgba(200, 112, 240, 0.3)",
                  borderRadius: "12px",
                  padding: "15px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  flex: "1 1 calc(50% - 10px)",
                  minWidth: "200px"
                }}>
                  <FaBrain style={{ fontSize: "2em", color: "#c770f0" }} />
                  <div>
                    <div style={{ fontWeight: "bold", color: "#c770f0" }}>AI & ML Junior</div>
                    <div style={{ fontSize: "0.9em", color: "#a8a8c0" }}>Deep Learning & Neural Networks</div>
                  </div>
                </div>
                
                <div style={{
                  background: "rgba(200, 112, 240, 0.1)",
                  border: "1px solid rgba(200, 112, 240, 0.3)",
                  borderRadius: "12px",
                  padding: "15px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  flex: "1 1 calc(50% - 10px)",
                  minWidth: "200px"
                }}>
                  <FaCode style={{ fontSize: "2em", color: "#4a9eff" }} />
                  <div>
                    <div style={{ fontWeight: "bold", color: "#4a9eff" }}>Full-Stack Developer</div>
                    <div style={{ fontSize: "0.9em", color: "#a8a8c0" }}>MERN & MEAN Stack</div>
                  </div>
                </div>
                
                <div style={{
                  background: "rgba(200, 112, 240, 0.1)",
                  border: "1px solid rgba(200, 112, 240, 0.3)",
                  borderRadius: "12px",
                  padding: "15px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  flex: "1 1 calc(50% - 10px)",
                  minWidth: "200px"
                }}>
                  <FaChartLine style={{ fontSize: "2em", color: "#50c878" }} />
                  <div>
                    <div style={{ fontWeight: "bold", color: "#50c878" }}>Data Scientist</div>
                    <div style={{ fontSize: "0.9em", color: "#a8a8c0" }}>Predictive Analytics & Modeling</div>
                  </div>
                </div>
                
                <div style={{
                  background: "rgba(200, 112, 240, 0.1)",
                  border: "1px solid rgba(200, 112, 240, 0.3)",
                  borderRadius: "12px",
                  padding: "15px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  flex: "1 1 calc(50% - 10px)",
                  minWidth: "200px"
                }}>
                  <AiOutlineRocket style={{ fontSize: "2em", color: "#ff6b6b" }} />
                  <div>
                    <div style={{ fontWeight: "bold", color: "#ff6b6b" }}>DevOps Enthusiast</div>
                    <div style={{ fontSize: "0.9em", color: "#a8a8c0" }}>Docker, K8s & CI/CD</div>
                  </div>
                </div>
              </div>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <div style={{
                width: "100%",
                maxWidth: "350px",
                margin: "0 auto",
                borderRadius: "50%",
                overflow: "hidden",
                border: "5px solid #c770f0",
                boxShadow: "0 0 30px rgba(199, 112, 240, 0.5)",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                padding: "5px"
              }}>
                <img 
                  src={myImg} 
                  className="img-fluid" 
                  alt="Raed Hamrouni" 
                  style={{
                    borderRadius: "50%",
                    width: "100%",
                    height: "auto",
                    objectFit: "cover"
                  }}
                />
              </div>
            </Tilt>
            
            {/* Additional Info Cards */}
            <div style={{ marginTop: "30px" }}>
              <div style={{
                background: "rgba(25, 35, 60, 0.8)",
                border: "2px solid rgba(200, 112, 240, 0.3)",
                borderRadius: "15px",
                padding: "20px",
                textAlign: "center",
                marginBottom: "15px"
              }}>
                <h3 style={{ color: "#c770f0", fontSize: "2.5em", marginBottom: "5px" }}>5+</h3>
                <p style={{ color: "#a8a8c0", margin: 0 }}>Years in Tech Industry</p>
              </div>
              
             
              
              <div style={{
                background: "rgba(25, 35, 60, 0.8)",
                border: "2px solid rgba(80, 200, 120, 0.3)",
                borderRadius: "15px",
                padding: "20px",
                textAlign: "center"
              }}>
                <h3 style={{ color: "#50c878", fontSize: "2.5em", marginBottom: "5px" }}>2</h3>
                <p style={{ color: "#a8a8c0", margin: 0 }}>Degrees Simultaneously</p>
              </div>
            </div>
          </Col>
        </Row>
        
        {/* Bottom Quote Section */}
        <Row style={{ marginTop: "60px" }}>
          <Col md={12}>
            <div style={{
              background: "linear-gradient(135deg, rgba(200, 112, 240, 0.1) 0%, rgba(74, 158, 255, 0.1) 100%)",
              border: "2px solid rgba(200, 112, 240, 0.3)",
              borderRadius: "20px",
              padding: "40px",
              textAlign: "center"
            }}>
              <h2 style={{ 
                color: "#c770f0", 
                fontSize: "1.8em", 
                marginBottom: "20px",
                fontWeight: "600"
              }}>
                🎯 My Mission
              </h2>
              <p style={{ 
                fontSize: "1.2em", 
                color: "white", 
                lineHeight: "1.8",
                maxWidth: "800px",
                margin: "0 auto"
              }}>
                "Leveraging the power of <span className="purple">Artificial Intelligence</span> and{" "}
                <span className="purple">Data Science</span> to create innovative solutions that make a 
                real-world impact. Combining technical rigor with creative problem-solving to transform 
                complex data into actionable insights."
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;