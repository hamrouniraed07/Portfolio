import React from "react";
import { Col, Row } from "react-bootstrap";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import Jupyter from "../../Assets/TechIcons/Jupyter.png";
import Brave from "../../Assets/Images/brave.svg";
import Ubuntu from "../../Assets/Images/ubuntu.png";
import Collab from "../../Assets/Images/collab.png";
import Postman from "../../Assets/TechIcons/Postman.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Ubuntu} alt="macOs" className="tech-icon-images" />
        <div className="tech-icons-text">Ubuntu</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={Brave} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Brave</div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>

     <Col xs={4} md={2} className="tech-icons ">
        <img src={Jupyter} alt="go" className="tech-icon-images" />
        <div className="tech-icons-text">Jupyter Notebook</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={Collab} alt="go" className="tech-icon-images" />
        <div className="tech-icons-text">Google Collab</div>
      </Col>
       <Col xs={4} md={2} className="tech-icons ">
        <img src={Postman} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Postman</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
