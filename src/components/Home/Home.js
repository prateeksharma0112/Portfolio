import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";
import myPhoto from "../../Assets/Home/myPhoto.jpeg";
import Home2 from "./Home2.js";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
               Hello World!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Prateek Kumar Sharma</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
              <div className="current-location-box"><p className="current-location">📍 Kaiserslautern, Germany</p></div>
            </Col>

            <Col md={5} style={{ padding:"80px"}}>
            <div className="home-img">
              <img
                src={myPhoto}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "420px" }}
              />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
