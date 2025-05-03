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
              companyLink="https://www.dfki.de/en/web/research/research-departments/augmented-vision"
              location="Kaiserslautern, Germany"
              jobtype="Working Student"
              companyDescription="The German Research Center for Artificial Intelligence (DFKI) is Germany’s leading industry-focused AI research institute, pioneering cutting-edge solutions across sectors through innovative, application-driven research."
              projectDescription="BERTHA is a Horizon Europe project aimed at developing a scalable, probabilistic Driver Behavioral Model (DBM) using Bayesian Belief Networks to replicate human driving behavior in autonomous vehicles. The goal is to enhance safety, predictability, and acceptance in mixed traffic environments. The DBM will be digitally validated through CARLA and immersive simulators and shared via an open-source HUB. This initiative supports industry-wide standardization and collaboration across the Connected, Cooperative, and Automated Mobility (CCAM) ecosystem."
              responsibilities={[
                "Operated and maintained CARLA driving simulators to ensure accurate and efficient data collection for autonomous vehicle research.",
                "Designed realistic driving scenarios using Scenic and XML, aligned with specific use cases in autonomous vehicle development.",
                "Developed Python scripts for extracting and processing sensor data from simulated vehicle environments, enabling enhanced data for model development.",
                "Built machine learning models to replicate human-like perception, optimizing behavioral accuracy and realism in autonomous driving systems."
              ]}
            />
          </Col>

          <Col md={12} className="work-experience-card">
            <WorkExperienceCard
              imgPath={fnp}
              role="Associate Software Engineer - Data Science"
              timeline="July 2022 - June 2023"
              companyName="Ferns N Petals (fnp)"
              companyLink="https://www.fnp.com/"
              location="Gurugram, India"
              jobtype="Full-Time"
              companyDescription="Ferns N Petals (FNP) is a leading online gifting and flower delivery service in India, specializing in personalized gifts and floral arrangements for various occasions, and delivering happiness across multiple countries."
              projectDescription="The Auto Tagging Tool project aimed to automate the product categorization process for FNP, an e-commerce platform with a diverse product range. Leveraging machine learning (ML) and natural language processing (NLP), the tool automatically assigns relevant tags to products, reducing manual effort. It also optimizes the management of product preferences, ensuring correct product display order based on predefined criteria such as popularity, relevance, and seasonality. This solution enhances operational efficiency, accuracy, and customer experience, enabling FNP to scale its product catalog more effectively."
              responsibilities = {[
                "Contributed to developing an Auto-Tagging Tool using Django and MongoDB; designed APIs and implemented ML/NLP pipelines to automate product categorization and improve operational efficiency.",
                "Designed & implemented a Support Vector Machine (SVM) model with OneVsRest classification, improving user recommendation accuracy by 89%.",
                "Reduced data processing time by 20% through dimensionality reduction techniques such as PCA, enhancing model performance.",
                "Executed the full data science workflow: data collection, cleaning, exploration, visualization, modeling, evaluation, and deployment.",
                "Prepared analytical reports and presented data-driven insights to cross-functional teams, supporting faster and more informed decision-making."
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default WorkExperience;