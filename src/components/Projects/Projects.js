import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import scraper from "../../Assets/Projects/scraper.jpg";
import companion from "../../Assets/Projects/companion.jpg";
import templates from "../../Assets/Projects/templates.jpg";

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
              imgPath={companion}
              isBlog={false}
              title="DTU Student Companion"
              description="An all in one solution for college students for helping them with day to day requirements and activities build with node.js, EJS, and MongoDB. Have features which allows user for realtime messaging, community pages, time table management, notes and assignments and video conference."
              ghLink="https://github.com/Bhavil-Ahuja/DTU-Student-Companion"
              demoLink="https://dtu-student-companion.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={templates}
              isBlog={false}
              title="Templates for Genletter"
              description="It was a part of Winter of Code-3.0 where I contributed to alpha.dev's open-source project, organised by GDSC, IIIT Kalyani. I facilitated a MERN website to help convert raw data into formal documents like resume, offer and application letters. It takes the user input and generates a PDF file with the required data."
              ghLink="https://github.com/jaydip1235/Genletter/tree/development"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scraper}
              isBlog={false}
              title="GitHub Web Scraper"
              description="A basic python script for scraping the GitHub repository search page results. It takes the search query as input and returns the list of repositories with their name, description, and URL. It stores the results in a CSV file and plots a bar graph for the top 10 results based on the stars and the forks."
              ghLink="https://github.com/Bhavil-Ahuja/GitHub-Webscraping-using-Python"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
