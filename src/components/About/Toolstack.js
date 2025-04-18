import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiSlack,
  SiMacos,
  SiGithub,
  SiJupyter,
  SiMicrosoftteams,
  SiCanva,
  SiJirasoftware,      
} from "react-icons/si";
import { FaLinux} from "react-icons/fa";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <FaLinux />
          <span style={{ fontSize: "0.8rem", marginTop: "5px" }}>Linux</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <SiMacos />
          <span style={{ fontSize: "0.8rem", marginTop: "5px" }}>macOS</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <SiGithub />
          <span style={{ fontSize: "0.8rem", marginTop: "5px" }}>GitHub</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <SiVisualstudiocode />
          <span style={{ fontSize: "0.8rem", marginTop: "5px" }}>VS Code</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <SiJupyter />
          <span style={{ fontSize: "0.8rem", marginTop: "5px" }}>Jupyter Notebook</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <SiJirasoftware />
          <span style={{ fontSize: "0.8rem", marginTop: "5px" }}>Jira</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <SiSlack />
          <span style={{ fontSize: "0.8rem", marginTop: "5px" }}>Slack</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <SiMicrosoftteams />
          <span style={{ fontSize: "0.8rem", marginTop: "5px" }}>Microsoft Teams</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <SiCanva />
          <span style={{ fontSize: "0.8rem", marginTop: "5px" }}>Canva</span>
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;
