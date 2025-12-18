import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCard(props) {
  const buttonContainerStyle = {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "90%",
    display: "flex",
    gap: "12px",
    justifyContent: "center"
  };

  const baseButtonStyle = {
    flex: 1,
    padding: "12px 20px",
    fontSize: "1rem",
    fontWeight: "600",
    border: "2px solid transparent",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    transition: "all 0.3s ease",
    position: "relative",
    overflow: "hidden",
    textDecoration: "none",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    fontFamily: "'Raleway', sans-serif",
    letterSpacing: "0.5px",
    textTransform: "uppercase"
  };

  const githubButtonStyle = {
    ...baseButtonStyle,
    background: "linear-gradient(135deg, #333333 0%, #1a1a1a 100%)",
    color: "white"
  };

  const demoButtonStyle = {
    ...baseButtonStyle,
    background: "linear-gradient(135deg, #c770f0 0%, #a855f7 100%)",
    color: "white"
  };

  const iconStyle = {
    fontSize: "1.3rem",
    transition: "transform 0.3s ease"
  };

  const handleMouseEnter = (e) => {
    const button = e.currentTarget;
    const icon = button.querySelector('.button-icon');
    
    button.style.transform = "translateY(-3px)";
    
    if (button.classList.contains('github-btn')) {
      button.style.background = "linear-gradient(135deg, #4a4a4a 0%, #2d2d2d 100%)";
      button.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.3), 0 0 20px rgba(110, 64, 201, 0.3)";
      button.style.border = "2px solid #6e40c9";
    } else {
      button.style.background = "linear-gradient(135deg, #d891ff 0%, #b968f7 100%)";
      button.style.boxShadow = "0 8px 25px rgba(199, 112, 240, 0.4), 0 0 30px rgba(199, 112, 240, 0.5)";
      button.style.border = "2px solid #e9b3ff";
    }
    
    if (icon) {
      icon.style.transform = "scale(1.2) rotate(5deg)";
    }
  };

  const handleMouseLeave = (e) => {
    const button = e.currentTarget;
    const icon = button.querySelector('.button-icon');
    
    button.style.transform = "translateY(0)";
    button.style.border = "2px solid transparent";
    button.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
    
    if (button.classList.contains('github-btn')) {
      button.style.background = "linear-gradient(135deg, #333333 0%, #1a1a1a 100%)";
    } else {
      button.style.background = "linear-gradient(135deg, #c770f0 0%, #a855f7 100%)";
    }
    
    if (icon) {
      icon.style.transform = "scale(1) rotate(0deg)";
    }
  };

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body style={{ 
        display: "flex", 
        flexDirection: "column",
        minHeight: "400px",
        position: "relative",
        paddingBottom: "90px"
      }}>
        <Card.Title style={{ 
          color: "#c770f0",
          fontWeight: "700",
          fontSize: "1.5rem",
          marginBottom: "15px",
          textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
          fontFamily: "'Raleway', sans-serif",
          letterSpacing: "1px"
        }}>
          {props.title}
        </Card.Title>
        
        <Card.Text style={{ 
          textAlign: "justify",
          flex: "1",
          color: "white",
          lineHeight: "1.6"
        }}>
          {props.description}
        </Card.Text>

        <div style={buttonContainerStyle}>
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            className="github-btn"
            style={githubButtonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <BsGithub className="button-icon" style={iconStyle} />
            <span>GitHub</span>
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="demo-btn"
              style={demoButtonStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <CgWebsite className="button-icon" style={iconStyle} />
              <span>Live Demo</span>
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;