import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Home/avatar.png";
import FindMeOn from "./../About/FineMeOn.js";
import ContactMe from "./ContactMe";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={7} className="home-about-description">
            <ContactMe />
          </Col>
          <Col md={5} className="myAvtar" >
              <img src={myImg} className="img-fluid" alt="avatar" style={{width: "350px"}} />
              <FindMeOn />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;