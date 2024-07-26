import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


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
              title="clinic website" // Change this to your project title
              description="clinic website offering easy appointment booking, access to medical records, and expert healthcare services."
              ghLink="https://github.com/Abdi0947/Clinic-website" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Jedidiah-choir" // Change this to your project title
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
