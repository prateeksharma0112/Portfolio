import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Prateek Kumar Sharma </span>
            from New Delhi, India.
            <br />
            <br />
            Currently, I am pursuing my Master’s in Computer Science at RPTU Kaiserslautern, Germany.
            <br />
            <br />
            I have previously worked as an Associate Software Engineer - Data Science at Ferns N Petals, 
            where I built smart solutions using Machine Learning, NLP, and Full-Stack Web Development.
            <br />
            <br />
            I'm passionate about AI, Generative Models, Data Science, 
            and building end-to-end systems that solve real-world problems.
            <br />
            <br />
            <ImPointRight/> Apart from tech, here are a few things that keep me curious and inspired:
          </p>
          <ul>
            <li className="about-activity">
              🏏 Playing Cricket & 🏸 Badminton.
            </li>
            <li className="about-activity">
              ✍️ Writing Blogs and Sharing Ideas.
            </li>
            <li className="about-activity">
              🌍 Travelling, Photography, and Exploring Different Cuisines.
            </li>
            <li className="about-activity">
              📚 Reading about Technology, Economy, Social Issues, and Global Trends.
            </li>
            <li className="about-activity">
              🎧 Listening to Music. 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Passionate about building things that matter, simple, impactful, and future-ready."{" "}
          </p>
          <footer className="blockquote-footer">Prateek Kumar Sharma</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
