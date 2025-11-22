import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { MdWork, MdLocationOn, MdCalendarToday } from "react-icons/md";
import { BsBriefcaseFill } from "react-icons/bs";

function ExperienceCard({ role, company, location, period, description, technologies, index }) {
  const colors = [
    { primary: "#c770f0", secondary: "#8e44ad", accent: "#e040fb" },
    { primary: "#4dd4ac", secondary: "#1abc9c", accent: "#00e676" },
    { primary: "#ffa500", secondary: "#ff6b00", accent: "#ffd700" },
    { primary: "#00d4ff", secondary: "#0099cc", accent: "#00ffff" }
  ];
  
  const color = colors[index % colors.length];

  return (
    <div style={{ 
      display: "flex", 
      marginBottom: "50px", 
      position: "relative",
      alignItems: "flex-start"
    }}>
      {/* Timeline vertical line */}
      {index < 3 && (
        <div style={{
          position: "absolute",
          left: "40px",
          top: "85px",
          height: "calc(100% + 50px)",
          width: "2px",
          background: `linear-gradient(180deg, ${color.primary}60 0%, transparent 100%)`
        }} />
      )}
      
      {/* Icon circle with gradient */}
      <div style={{
        position: "relative",
        zIndex: 1,
        marginRight: "30px",
        flexShrink: 0
      }}>
        <div style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: `linear-gradient(135deg, ${color.primary} 0%, ${color.secondary} 100%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: `0 8px 30px ${color.primary}50, 0 0 0 4px rgba(255,255,255,0.05)`,
          border: "2px solid rgba(255, 255, 255, 0.1)",
          position: "relative",
          overflow: "hidden"
        }}>
          {/* Animated glow effect */}
          <div style={{
            position: "absolute",
            top: "-50%",
            left: "-50%",
            width: "200%",
            height: "200%",
            background: `radial-gradient(circle, ${color.accent}30 0%, transparent 70%)`,
            animation: "pulse 3s ease-in-out infinite"
          }} />
          <BsBriefcaseFill style={{ fontSize: "2.2rem", color: "#fff", zIndex: 1 }} />
        </div>
      </div>

      {/* Content card with modern design */}
      <div style={{
        flex: 1,
        background: "rgba(255, 255, 255, 0.02)",
        backdropFilter: "blur(20px)",
        border: `1px solid ${color.primary}30`,
        borderLeft: `4px solid ${color.primary}`,
        borderRadius: "16px",
        padding: "0",
        boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)`,
        overflow: "hidden",
        position: "relative"
      }}>
        {/* Top gradient bar */}
        <div style={{
          height: "4px",
          background: `linear-gradient(90deg, ${color.primary} 0%, ${color.accent} 100%)`,
          width: "100%"
        }} />

        {/* Decorative corner gradient */}
        <div style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "200px",
          height: "200px",
          background: `radial-gradient(circle at top right, ${color.primary}08, transparent 70%)`,
          pointerEvents: "none"
        }} />

        <div style={{ padding: "30px" }}>
          {/* Title with gradient text */}
          <h3 style={{ 
            background: `linear-gradient(135deg, ${color.primary} 0%, ${color.accent} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontSize: "1.9rem", 
            fontWeight: "800",
            marginBottom: "15px",
            fontFamily: "'Raleway', sans-serif",
            letterSpacing: "-0.5px"
          }}>
            {role}
          </h3>
          
          {/* Company info with icons */}
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "25px", 
            flexWrap: "wrap",
            marginBottom: "25px",
            paddingBottom: "20px",
            borderBottom: `1px solid ${color.primary}20`
          }}>
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "8px",
              background: `${color.primary}10`,
              padding: "8px 14px",
              borderRadius: "8px",
              border: `1px solid ${color.primary}30`
            }}>
              <MdWork style={{ color: color.primary, fontSize: "1.1rem" }} />
              <span style={{ color: "#fff", fontSize: "0.95rem", fontWeight: "600" }}>
                {company}
              </span>
            </div>
            
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <MdLocationOn style={{ color: color.secondary, fontSize: "1.1rem" }} />
              <span style={{ color: "#b8b8b8", fontSize: "0.95rem" }}>
                {location}
              </span>
            </div>
            
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <MdCalendarToday style={{ color: color.secondary, fontSize: "1rem" }} />
              <span style={{ color: "#b8b8b8", fontSize: "0.95rem", fontStyle: "italic" }}>
                {period}
              </span>
            </div>
          </div>

          {/* Description with custom bullets */}
          <ul style={{ 
            color: "#e5e5e5", 
            lineHeight: "1.9",
            paddingLeft: "0",
            margin: "0 0 25px 0",
            fontSize: "1rem",
            listStyle: "none"
          }}>
            {description.map((point, idx) => (
              <li key={idx} style={{ 
                marginBottom: "14px",
                paddingLeft: "25px",
                position: "relative"
              }}>
                <span style={{
                  position: "absolute",
                  left: "0",
                  top: "8px",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${color.primary} 0%, ${color.accent} 100%)`,
                  boxShadow: `0 0 8px ${color.primary}80`
                }} />
                {point}
              </li>
            ))}
          </ul>

          {/* Technologies with modern badges */}
          <div>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "14px",
              background: `${color.primary}15`,
              padding: "6px 14px",
              borderRadius: "20px",
              border: `1px solid ${color.primary}40`
            }}>
              <div style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: color.primary,
                boxShadow: `0 0 8px ${color.primary}`
              }} />
              <span style={{ 
                color: color.primary,
                fontWeight: "700",
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "1.5px"
              }}>
                Tech Stack
              </span>
            </div>
            
            <div style={{
              display: "flex", 
              flexWrap: "wrap", 
              gap: "10px"
            }}>
              {technologies.map((tech, idx) => (
                <span key={idx} style={{
                  background: `linear-gradient(135deg, ${color.primary}12 0%, ${color.secondary}12 100%)`,
                  border: `1.5px solid ${color.primary}40`,
                  borderRadius: "8px",
                  padding: "8px 18px",
                  color: "#fff",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                  boxShadow: `0 2px 8px ${color.primary}20`,
                  position: "relative",
                  overflow: "hidden"
                }}>
                  <span style={{ position: "relative", zIndex: 1 }}>{tech}</span>
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: "-100%",
                    width: "100%",
                    height: "100%",
                    background: `linear-gradient(90deg, transparent, ${color.primary}30, transparent)`,
                    transition: "left 0.5s ease"
                  }} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Experience() {
  const experiences = [
    {
      role: "Data Science Intern",
      company: "ARSII",
      location: "Sousse, Tunisia",
      period: "Jul 2025 - Sept 2025",
      description: [
        "Designed a supervised classification model to predict postoperative complications following pediatric circumcision",
        "Enabled early identification of risk factors and improved medical follow-up",
        "Collaborated with medical professionals to understand domain requirements and validate model outputs"
      ],
      technologies: ["Python", "TensorFlow", "NumPy", "Pandas"]
    },
    {
      role: "Software Developer Intern (Bachelor's Final Project)",
      company: "VIVIA",
      location: "Sousse, Tunisia",
      period: "Jan 2023 - Jun 2023",
      description: [
        "Developed a customer complaints management module for the company's CRM system",
        "Efficiently managed complaints and reduced processing time significantly",
        "Implemented full-stack features with real-time updates and user notifications"
      ],
      technologies: ["Node.js", "React.js", "PostgreSQL", "Express.js"]
    },
    {
      role: "Software Developer Intern",
      company: "SASTEC-SKILLS",
      location: "Sousse, Tunisia",
      period: "Jul 2022 - Aug 2022",
      description: [
        "Developed an online art gallery web application allowing users to sell their artworks",
        "Implemented user authentication, artwork upload, and payment integration",
        "Created responsive UI with modern design principles"
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"]
    },
    {
      role: "Software Developer Intern",
      company: "TUS",
      location: "Sousse, Tunisia",
      period: "Aug 2021 - Sept 2021",
      description: [
        "Developed a game (Wheel of Fortune) allowing customers to win prizes",
        "Implemented interactive animations and game logic",
        "Created engaging user experience with prize management system"
      ],
      technologies: ["HTML", "CSS", "JavaScript"]
    }
  ];

  return (
    <Container fluid className="experience-section" style={{ paddingTop: "150px", paddingBottom: "50px" }}>
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ 
          marginBottom: "15px",
          textAlign: "center"
        }}>
          Professional <strong className="purple">Journey</strong>
        </h1>
        <p style={{ 
          color: "#b8b8b8", 
          marginBottom: "60px",
          fontSize: "1.05rem",
          maxWidth: "900px",
          margin: "0 auto 60px",
          textAlign: "center",
          lineHeight: "1.7"
        }}>
          My professional path is defined by a relentless pursuit of <span style={{ color: "#c770f0", fontWeight: "600" }}>growth and excellence</span>. Each role has been a stepping stone, allowing me to apply my <span style={{ color: "#4dd4ac", fontWeight: "600" }}>technical expertise</span> while embracing new challenges.
        </p>

        <Row style={{ justifyContent: "center" }}>
          <Col md={12} lg={11} xl={10}>
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} index={index} />
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;