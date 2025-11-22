import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m{" "}
            <span className="purple">Raed Mohamed Amine Hamrouni</span> from{" "}
            <span className="purple">Sousse, Tunisia</span>.
            <br />
            I’m a{" "}
            <span className="purple">future Data Science Engineer</span>{" "}
            with strong foundations in{" "}
            <span className="purple">
              Artificial Intelligence, predictive analytics, and software development
            </span>.
            <br />
            I hold a{" "}
            <span className="purple">Master’s Degree in Software Engineering</span>{" "}
            and I am currently completing my{" "}
            <span className="purple">final year of Engineering in Data Science</span>{" "}
            at the Polytechnic School of Sousse.
            <br />
            <br />
            My background combines{" "}
            <span className="purple">
              full-stack development, machine learning,
              microservices, and DevOps
            </span>
            . I enjoy turning complex challenges into intelligent, data-driven solutions.
            <br />
            <br />
            Outside of work and studies, I stay active and creative through:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Volunteering & community engagement
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in coding competitions (Nuit de l’Info, IEEE events)
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies & building innovative projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing football as a{" "}
              <span className="purple">3rd Division player in Tunisia</span> ⚽
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I aim to build intelligent solutions that make a real impact."
          </p>
          <footer className="blockquote-footer">Raed Hamrouni</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
