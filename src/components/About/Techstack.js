import React from "react";
import { Col, Row } from "react-bootstrap";

import Python from "../../Assets/TechIcons/Python.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Angular from "../../Assets/Images/angular.png";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Kubernates from "../../Assets/TechIcons/Kubernates.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import MUI from "../../Assets/TechIcons/MUI.svg";
import Kafka from "../../Assets/TechIcons/Kafka.svg";
import Tensorflow from "../../Assets/TechIcons/Tensorflow.png";
import Keras from "../../Assets/TechIcons/Keras.png";
import Pandas from "../../Assets/TechIcons/Pandas.png";
import Numpy from "../../Assets/TechIcons/numpy.svg";
import Sklearn from "../../Assets/TechIcons/Sklearn.png"
import Matplotlib from "../../Assets/TechIcons/Matplotlib.png"
import Seaborn from "../../Assets/TechIcons/seaborn.svg"
import Bootstrap from "../../Assets/TechIcons/Bootstrap.png"


const categories = {
  Backend: [
    { icon: Node, label: "Node.js" },
    { icon: Python, label: "Python" },
    { icon: SQL, label: "PostgreSQL / MySQL" },
    { icon: Mongo, label: "MongoDB" },
    { icon: Kafka, label: "Kafka" },
  ],
  Frontend: [
    { icon: ReactIcon, label: "React.js" },
     { icon: Angular, label: "Angular" },
    { icon: Tailwind, label: "Tailwind CSS" },
    { icon: MUI, label: "Material UI" },
    { icon: Bootstrap, label: "Bootstrap" },
  ],
  DevOps: [
    { icon: Docker, label: "Docker" },
    { icon: Kubernates, label: "Kubernetes" },
    { icon: Git, label: "Git" },
  ],
  "Data Science": [
    { icon: Tensorflow, label: "TensorFlow" },
    { icon: Keras, label: "Keras" },
    { icon: Sklearn, label: "Scikit-learn" },
    { icon: Pandas, label: "Pandas" },
    { icon: Numpy, label: "NumPy" },
    { icon: Matplotlib, label: "Matplotlib" },
    { icon: Seaborn, label: "Seaborn" },
  ],
  
};

function Techstack() {
  return (
    <>
      {Object.keys(categories).map((category) => (
        <div key={category} style={{ marginBottom: "40px" }}>
          <h3 className="tech-category-title">{category}</h3>
          <Row style={{ justifyContent: "center" }}>
            {categories[category].map((skill, index) => (
              <Col key={index} xs={4} md={2} className="tech-icons">
                <img src={skill.icon} alt={skill.label} className="tech-icon-images" />
                <div className="tech-icons-text">{skill.label}</div>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </>
  );
}

export default Techstack;
