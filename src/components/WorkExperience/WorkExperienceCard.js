import React from "react";
import { Row, Col } from "react-bootstrap";
import { MdOutlineDateRange } from "react-icons/md";
import "./WorkExperienceCard.css";

function WorkExperienceCard(props) {
  return (
    <div className="work-experience-card-view">
      <Row className="align-items-center">
      <div className="timeline-box"><span className="timeline"><MdOutlineDateRange/> {props.timeline}</span></div> 
        <Col md={3} className="work-experience-logo">
          <img
            src={props.imgPath}
            alt="company-logo"
            className="company-logo"
          />
          <div className="company-name" >{props.companyName}{/* Company name under logo */}</div>
        </Col>

        {/* Right Section: Role, Timeline, Location */}
        <Col md={9} className="work-experience-details">
          <div className="role-position">
            <span className="role-name">{props.role}</span>
            <span className="location">{props.location}</span>
          </div>
          <div className="job-type">{props.jobtype}</div>
          <div className="company-description">
            <strong>About the company :</strong>
            <p>{props.companyDescription}</p>
          </div>
          <div className="responsibilities">
            <strong>Responsibilities :</strong>
            <ul>
              {props.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default WorkExperienceCard;
