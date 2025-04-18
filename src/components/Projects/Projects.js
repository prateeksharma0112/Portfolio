import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import superstoreDashboard from "../../Assets/Projects/superstoreDashboard.png"
import finetuneLLM from "../../Assets/Projects/finetuneLLM.png";
import capstone2024 from "../../Assets/Projects/capstone2024.png";

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
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={superstoreDashboard}
              isBlog={false}
              title="Superstore Dashboard"
              description="Interactive Dashboard built with Svelte and D3.js using the Superstore Sales Dataset. 
              Features include dynamic, data-driven visualizations with hover effects, filtering, and linked views. 
              Designed with clean UI/UX for seamless navigation and impactful storytelling. Developed as part of a Visual 
              Analytics project at RPTU Kaiserslautern to deliver key business insights and strengthen skills in frontend 
              development, data visualization, and user-centered design."
              skills="Svelte · D3.js · Data Visualization · Visual Analytics"
              date="Oct 2024 - Feb 2025"
              ghLink="https://github.com/prateeksharma0112/Visual-Analytics-Project"
              demoLink="https://prateeksharma0112.github.io/Visual-Analytics-Project/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={capstone2024}
              isBlog={false}
              title="Capstone 2024 (Fraunhofer IESE & Insiders Technologies) "
              description="Contributed to the development of GenerAItor, an AI-powered document extraction application
              aimed at automating and enhancing document processing workflows. As part of the end-to-end
              SDLC, I worked as a Data Scientist and Developer, focusing on building an interactive 
              tutorial system to guide users and implementing functionality for intelligent field name 
              suggestions using OpenAI's Large Language Models. The project was developed in 
              collaboration with Fraunhofer IESE and Insiders Technologies."
              date="Sep 2024 - Dec 2024"
              skills=" React.js · Intro.js · REST APIs · Large Language Models (LLM) · TypeScript · Prompt Engineering · Requirements Engineering · Gitlab · AI Agents"
              ghLink="https://github.com/prateeksharma0112/Capstone2024"
              demoLink="https://drive.google.com/file/d/1RDVSk14ewpM-_nrJX4tj7JSuTPP_RxcU/view?usp=sharing"              
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={finetuneLLM}
              isBlog={false}
              title="Fine-tune LLM for Code Generation"
              description="Fine-tuned the microsoft/phi-1_5 model on the codeparrot/APPS dataset comprising 10,000 
              Python programming problems to improve code generation from natural language prompts. 
              Employed PEFT using LoRA for efficient fine-tuning. Generated high-quality synthetic 
              datasets using LLMs to enhance training diversity and model robustness. Evaluated model 
              performance using ROUGE metrics (ROUGE-1, ROUGE-2, ROUGE-L) across training, synthetic, 
              and combined datasets."
              date="March 2024 - April 2024"
              skills="Fine Tuning · Deep Learning · Machine Learning · Pandas · Python (Programming Language) · Large Language Models (LLM) · GitHub"
              ghLink="https://github.com/prateeksharma0112/FineTuningLLM"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
