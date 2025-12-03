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
//import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import MUI from "../../Assets/TechIcons/MUI.svg";
import Kafka from "../../Assets/TechIcons/Kafka.svg";
import Tensorflow from "../../Assets/TechIcons/Tensorflow.png";
import Keras from "../../Assets/TechIcons/Keras.png";
import Pandas from "../../Assets/TechIcons/Pandas.png";
import Numpy from "../../Assets/TechIcons/numpy.svg";
import Sklearn from "../../Assets/TechIcons/Sklearn.png";
import Matplotlib from "../../Assets/TechIcons/Matplotlib.png";
import Seaborn from "../../Assets/TechIcons/seaborn.svg";
//import Bootstrap from "../../Assets/TechIcons/Bootstrap.png";
// Add these imports - you'll need to add the corresponding icon files
//import Flask from "../../Assets/Images/flask.png";
//import FastAPI from "../../Assets/Images/fastapi.png";
import Streamlit from "../../Assets/Images/streamlit.png";
import PostgreSQL from "../../Assets/Images/postgresql.png";
import PyTorch from "../../Assets/Images/pytorch.png";
import HuggingFace from "../../Assets/Images/huggingface.png";


const categories = {
  Backend: [
    { icon: Node, label: "Node.js" },
    { icon: Python, label: "Python" },
  ],
  Databases: [
    { icon: PostgreSQL, label: "PostgreSQL" },
    { icon: SQL, label: "MySQL" },
    { icon: Mongo, label: "MongoDB" },
  ],
  Frontend: [
    { icon: ReactIcon, label: "React.js" },
    { icon: Angular, label: "Angular" },
    { icon: Streamlit, label: "Streamlit" },
    { icon: MUI, label: "Material UI" },
  ],
  DevOps: [
    { icon: Docker, label: "Docker" },
    { icon: Kubernates, label: "Kubernetes" },
    { icon: Git, label: "Git" },
    { icon: Kafka, label: "Kafka" },
  ],
  "AI & Machine Learning": [
    { icon: HuggingFace, label: "Hugging Face" },
    { icon: Tensorflow, label: "TensorFlow" },
    { icon: PyTorch, label: "PyTorch" },
    { icon: Keras, label: "Keras" },
    { icon: Sklearn, label: "Scikit-learn" },
  ],
  "Data Science": [
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