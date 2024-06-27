import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Connect_pro from "../../Assets/Projects/Connect_pro.png";
import Tulips from "../../Assets/Projects/Tulips.png";
import Unity from "../../Assets/Projects/Unity.png";
import calculator from "../../Assets/Projects/Calculator.png"
import PyGuiGPT from "../../Assets/Projects/PyGuiGPT.jpg"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Connect_pro}
              isBlog={false}
              title="Connect Pro"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/ManishKumarGeek/connect-pro1"
              demoLink="https://connect-pro-new.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tulips}
              isBlog={false}
              title="Tulips Fighter"
              description="A thrilling Unity 2D fighter where warriors clash in intense battles. Unleash combos, dodge attacks, and emerge victorious! 🎮👊."
              demoLink="https://manish001.itch.io/tulips-fighters"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Unity}
              isBlog={false}
              title="Unity 3D"
              description="Unity C# Script for Unity 3D game, clean code"
              ghLink="https://github.com/ManishKumarGeek/Unity3D-Scripts"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Calculator"
              description="A simple calculator created using Android Studio and Kotlin with jetpack compose."
              demoLink="https://drive.google.com/file/d/1cJ6JM350EKHjJHfyy-7ulbP_4FIW7ihx/view?usp=sharing"
              ghLink="https://github.com/ManishKumarGeek/Kotlin_Calculator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PyGuiGPT}
              isBlog={false}
              title="PyGuiGPT"
              description="A script automates generating, typing, and saving Python solutions from OpenAI GPT-3 model using PyAutoGUI."
              ghLink="https://github.com/ManishKumarGeek/GPTxPyautoGui-for-python-only/tree/main"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
