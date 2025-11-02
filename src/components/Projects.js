import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/markit.png";
import projImg2 from "../assets/img/ngl.png";
import projImg3 from "../assets/img/quizathon.png";
import projImg4 from "../assets/img/researchagent.png";
import projImg5 from "../assets/img/plancnn.png";
import projImg6 from "../assets/img/cli.png";
import achImg1 from "../assets/img/ailet.jpg";
import achImg2 from "../assets/img/iitd.jpg";
import achImg3 from "../assets/img/Becon.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
     {
      title: "Quizathon",
      description: "Created the complete website for a college tech event, managing UI, functionality, and user experience.",
      imgUrl: projImg3,
    },
    {
      title: "Not Gonna Lie",
      description: "Anonymous Q&A web app logging sender metadata (IP, device, location)",
      imgUrl: projImg2,
    },
    {
      title: "Markit",
      description: "A Chrome extension to instantly save, organize, and export text highlights from any webpage",
      imgUrl: projImg1,
    },
    {
      title: "Plant Diease Prediction Using CNN",
      description: "Detects plant diseases from leaf images, suggests treatments, and works offline too",
      imgUrl: projImg5,
    },
    {
      title: "Research Agent",
      description: "A multi-tool AI assistant that autonomously researches queries, generates structured summaries with sources, and saves outputs for future reference",
      imgUrl: projImg4,
    },
    
    {
      title: "Smart Code Assistant CLI",
      description: "Instant Python code debugging, optimization, explanation, and test generation offline",
      imgUrl: projImg6,
    },
  ];

  const achievements = [
    { 
      title: "Paper Presentation Winner",
      description: "Won 1st place in Research Paper Presentation at AILET 2025", 
      imgUrl: achImg1, 
    },
    {
      title: "IITD Influencer Core", 
      description: "Selected to be part of the Influencers Core for Rendezvous’25 at IIT Delhi", 
      imgUrl: achImg2, 
    },
    { 
      title: "Two Day CEO Challenge Finalist", 
      description: "Stepped into the role of a CEO, ideating a unique product concept and pitching it to potential investors, enhancing skills in business strategy, product positioning, and investor communication", 
      imgUrl: achImg3, 
      link: "https://example.com/achievement3"
    },
  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Highlights</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Achievements</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Education</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>
                    
                    <Tab.Pane eventKey="second">
                      <Row>
                        {achievements.map((ach, index) => (
                          <ProjectCard key={index} {...ach} />
                        ))}
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
  <div className="education-section">
    <div className="edu-card">
      <h4>University College of Engineering Narasaraopet - JNTUK</h4>
      <h5>Bachelor of Technology - BTech, CSE</h5>
      <span>Aug 2024 – Apr 2028</span>
      <p>B.Tech in Computer Science and Engineering with specialization in AI and ML.</p>
    </div>

    <div className="edu-card">
      <h4>Sri Chaitanya College of Education</h4>
      <h5>Higher Secondary, MPC</h5>
      <span>Jun 2022 – Mar 2024</span>
      <p>Achieved 4th rank across the state.</p>
    </div>

    <div className="edu-card">
      <h4>Sri Vidyaniketan High School</h4>
      <h5>Secondary</h5>
      <p>Achieved 7th rank across the state</p>
    </div>
  </div>
</Tab.Pane>


                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
