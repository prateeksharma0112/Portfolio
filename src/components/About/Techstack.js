import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiReact,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import { 
  FaJsSquare,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa";
import {
  SiMysql,
  SiTailwindcss,
  SiTypescript,
  SiPytorch,
  SiNumpy,
  SiPandas,
  SiOpencv,
  SiDjango,
  SiSvelte,
  SiScikitlearn,
} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <DiPython />
          <span style={{ fontSize: "0.8rem", marginTop: "5px" }}>Python</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <CgCPlusPlus />
          <span style={{ fontSize: "0.8rem", marginTop: "5px" }}>C++</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <FaJsSquare />
          <span style={{ fontSize: "0.8rem", marginTop: "5px" }}>JavaScript</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <FaHtml5 />
          <span style={{ fontSize: "0.8rem", marginTop: "5px" }}>HTML5</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <FaCss3Alt />
          <span style={{ fontSize: "0.8rem", marginTop: "5px" }}>CSS3</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <DiReact />
          <span style={{ fontSize: "0.8rem", marginTop: "5px" }}>React</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <SiDjango />
          <span style={{ fontSize: "0.8rem", marginTop: "5px" }}>Django</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <SiSvelte />
          <span style={{ fontSize: "0.8rem", marginTop: "5px" }}>Svelte</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <DiMongodb />
          <span style={{ fontSize: "0.8rem", marginTop: "5px" }}>MongoDB</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <SiMysql />
          <span style={{ fontSize: "0.8rem", marginTop: "5px" }}>MySQL</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <DiGit />
          <span style={{ fontSize: "0.8rem", marginTop: "5px" }}>Git</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <SiTypescript />
          <span style={{ fontSize: "0.8rem", marginTop: "5px" }}>TypeScript</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <SiTailwindcss />
          <span style={{ fontSize: "0.8rem", marginTop: "5px" }}>Tailwind CSS</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <SiPytorch />
          <span style={{ fontSize: "0.8rem", marginTop: "5px" }}>PyTorch</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <SiNumpy />
          <span style={{ fontSize: "0.8rem", marginTop: "5px" }}>NumPy</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <SiPandas />
          <span style={{ fontSize: "0.8rem", marginTop: "5px" }}>Pandas</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <SiOpencv />
          <span style={{ fontSize: "0.8rem", marginTop: "5px" }}>OpenCV</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <SiScikitlearn />
          <span style={{ fontSize: "0.8rem", marginTop: "5px" }}>Scikitlearn</span>
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;
