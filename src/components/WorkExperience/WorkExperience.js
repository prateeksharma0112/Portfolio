import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WorkExperienceCard from "./WorkExperienceCard";
import Particle from "../Particle";
import DFKI from "../../Assets/WorkExperience/DFKI.png";
import fnp from "../../Assets/WorkExperience/fnp.png";


function WorkExperience() {
  return (
    <Container fluid className="workexperience-section">
      <Particle />
      <Container>
        <h1 className="workexperience-heading">
          My Professional <strong className="purple">Work Experience</strong>
        </h1>
        <p style={{ color: "white" }}>
        Here's a snapshot of my recent roles, contributions, and impact in real-world work environments.
        </p>
        <Row style={{ justifyContent: "center", paddingTop: "80px" ,paddingBottom: "10px" }} >
          <Col md={12} className="work-experience-card">
            <WorkExperienceCard
              imgPath={DFKI}
              role="Research Assistant"
              timeline="December 2024 - Present"
              companyName="DFKI"
              location="Kaiserslautern, Germany"
              jobtype="Working Student"
              companyDescription="The German Research Center for Artificial Intelligence (DFKI) is Germany’s leading industry-focused AI research institute, pioneering cutting-edge solutions across sectors through innovative, application-driven research."
              responsibilities={[
                "Operating driving simulators at DFKI to assist with ongoing data collection for autonomous vehicle research.",
                "Designing and testing realistic driving scenarios tailored to specific use cases in developing autonomous systems.",
                "Writing and maintaining Python scripts to process and extract sensor data from simulated vehicles.",
                "Developing and refining machine learning models to simulate human-like perception for safer and more predictable autonomous driving."
              ]}
            />
          </Col>

          <Col md={12} className="work-experience-card">
            <WorkExperienceCard
              imgPath={fnp}
              role="Associate Software Engineer - Data Science"
              timeline="July 2022 - June 2023"
              companyName="Ferns N Petals (fnp)"
              location="Gurugram, India"
              jobtype="Full-Time"
              companyDescription="Ferns N Petals (FNP) is a leading online gifting and flower delivery service in India, specializing in personalized gifts and floral arrangements for various occasions, and delivering happiness across multiple countries."
              responsibilities = {[
                "Contributed to developing the Auto-Tagging Tool to categorize products, and created an algorithm for product categorization using machine learning and NLP techniques.",
                "Designed & implemented a Support Vector Machine (SVM) model with OneVsRest classification, improving user recommendation accuracy by 89%.",
                "Reduced data processing time by 20% by applying dimensionality reduction techniques like PCA to enhance model performance.",
                "Executed the complete end-to-end data science workflow, including data collection, cleaning, exploration, visualization, modeling, evaluation, and deployment.",
                "Built a full-stack web application using Django integrated with MongoDB, providing real-time access for business users, and reducing reporting delays by 30%.",
                "Prepared analytical reports and presented data-driven insights to cross-functional teams, streamlining decision-making processes."
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default WorkExperience;