import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body style={{ 
        display: "flex", 
        flexDirection: "column",
        minHeight: "400px",
        position: "relative",
        paddingBottom: "70px"
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

        <div style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%"
        }}>
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "1rem",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px"
            }}
          >
            <BsGithub /> GitHub
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "1rem",
                fontWeight: "600",
                marginTop: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px"
              }}
            >
              <CgWebsite /> Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;