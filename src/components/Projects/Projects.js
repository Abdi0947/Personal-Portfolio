import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import jedidia from "../../Assets/Projects/jedidiah.jpg";
import GPT from "../../Assets/Projects/gpt-3.png";
import clinic from "../../Assets/Projects/clinic.png";
import chatApp from "../../Assets/Projects/chatApp.jpg";




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
              isBlog={false}
              imgPath={clinic}
              title="clinic website" 
              description="clinic website offering easy appointment booking, access to medical records, and expert healthcare services."
              ghLink="https://github.com/Abdi0947/Clinic-website" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              imgPath={GPT}
              title="GPT-3" 
              description="the design layout of gpt-3,it is responsive and attractive."
              ghLink="https://github.com/Abdi0947/GPT-3" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              imgPath={chatApp}
              title="Chat Application" 
              description="A modern,responsive chat application built with React, enabling seamless real-time messaging, file sharing, and user management."
              ghLink="https://github.com/Abdi0947/chat_Application" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jedidia}
              isBlog={false}
              title="Jedidiah-choir" 
              description="Developed a choir website for performance showcases, event updates, and member engagement, enhancing online presence and audience interaction."
              ghLink="https://github.com/Abdi0947/JEDIDIAH-CHOIR" 
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
