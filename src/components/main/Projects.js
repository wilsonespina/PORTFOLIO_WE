import React from 'react';
import { withRouter, Link} from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { Link as Go, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Projects = ({scrollTo}) => {

  const backgroundImage = '../../assets/screenshot_landing.jpg';

  return(
    <Row className="projects-section section container-fluid">
      <Element name="project-4" className="element" id="projects">
        <Row className="project-4">
          <Col xs={12} sm={10} smOffset={1} md={10} mdOffset={1} lg={10} lgOffset={1} className="project-tile">
            <div className="projects-heading-top center-text">
              <h3 className="span-pink"><span className="large-font">Projects...</span></h3>
              <h3 className="span-green">Some of my past work</h3>
            </div>

            <Col xs={12} sm={12} md={12} lg={6} className="project-image-left img-container">
              <img src={backgroundImage} alt="image04" className="project-img"/>
              <div className="img-middle-layer">
                <Link to="/project4"><div className="img-text-layer">TRACE</div></Link>
              </div>
            </Col>

            <Col xs={12} sm={10} md={10} lg={6} className="project-text-right">
              <h1 className="span-white"><span className="span-blue">Project 4</span><span className="span-pink"> - </span><span className="span-yellow text-small">'TRACE'</span></h1>

              <h2 className="span-green">MERN stack application</h2>

              <p className="span-white small-font">I created a competitive <span className="medium-font">running app</span> that encourages users to compete and upload the best running traces they’ve saved on the exercise app, <span className="medium-font">Strava</span>.</p>

              <p className="span-white small-font">The app uses the <span className="medium-font">Strava</span> and <span className="medium-font">Google Maps</span> APIs to help visualise the trace of real-life runs. People can the <span className="medium-font">comment</span> and <span className="medium-font">rate</span> runs cubmitted by the Trace community.</p>

              <div className="projects-icons-box span-blue">
                <i className="devicon-javascript-plain"></i>
                <i className="devicon-html5-plain-wordmark skill-icon"></i>
                <i className="devicon-css3-plain-wordmark"></i>
                <i className="devicon-jquery-plain-wordmark"></i>
                <i className="devicon-sass-original"></i>
                <i className="devicon-bootstrap-plain-wordmark"></i>
                <i className="devicon-react-original-wordmark"></i>
                <i className="devicon-nodejs-plain-wordmark"></i>
                <i className="devicon-mongodb-plain-wordmark"></i>
                <i className="devicon-gulp-plain"></i>
                <i className="devicon-webpack-plain-wordmark"></i>
                <i className="devicon-git-plain-wordmark"></i>
                <i className="devicon-github-plain-wordmark"></i>
                <i className="devicon-heroku-line-wordmark"></i>
                <i className="devicon-mocha-plain"></i>
                <i className="devicon-trello-plain-wordmark"></i>
              </div>

            </Col>
          </Col>
        </Row>

        <Row className="project-3">
          <Col xs={12} sm={10} smOffset={1} md={10} mdOffset={1} lg={10} lgOffset={1} className="project-tile">
            <Col xs={12} sm={12} md={12} lg={6} className="project-image-left img-container">
              <img src="../../assets/screenshot_landingpage_project3.png" alt="image03" className="project-img"/>
              <div className="img-middle-layer">
                <Link to="/project3"><div className="img-text-layer">Gig.ly</div></Link>
              </div>
            </Col>

            <Col xs={12} sm={10} md={10} lg={6} className="project-text-right">
              <h1 className="span-white"><span className="span-blue">Project 3</span><span className="span-pink"> - </span><span className="span-yellow text-small">'Gigly'</span></h1>

              <h2 className="span-green">Group Project</h2>
              <p className="span-white">In my third project, I worked in a four person group project where our product was a social music event app designed for people to create groups attending upcoming gigs. Our application used a MEAN stack and combined three external API’s, pulling event information from Ticketmaster, playing relevant songs from Spotify and displaying the location for each event using Google Maps. This was my first opportunity to working in team environment and it highlighted the importance of using project management tools such as Trello to keep the team aligned and informed of agile sprints. Features within the app were shared between the team and I was responsible for implementing and running the back end testing using Mocha and Chai. I also built the comments functionality and styled the section using a combination of Bulma and SASS.</p>

              <div className="projects-icons-box span-blue">
                <i className="devicon-javascript-plain"></i>
                <i className="devicon-html5-plain-wordmark skill-icon"></i>
                <i className="devicon-css3-plain-wordmark"></i>
                <i className="devicon-jquery-plain-wordmark"></i>
                <i className="devicon-sass-original"></i>
                <i className="devicon-bootstrap-plain-wordmark"></i>
                <i className="devicon-nodejs-plain-wordmark"></i>
                <i className="devicon-mongodb-plain-wordmark"></i>
                <i className="devicon-gulp-plain"></i>
                <i className="devicon-git-plain-wordmark"></i>
                <i className="devicon-github-plain-wordmark"></i>
                <i className="devicon-heroku-line-wordmark"></i>
                <i className="devicon-mocha-plain"></i>
                <i className="devicon-trello-plain-wordmark"></i>
              </div>

            </Col>
          </Col>
        </Row>

        <Row className="project-2">
          <Col xs={12} sm={10} smOffset={1} md={10} mdOffset={1} lg={10} lgOffset={1} className="project-tile">

            <Col xs={12} sm={12} md={12} lg={6} className="project-image-left img-container">
              <img src="../../assets/screenshot_landingpage.jpg" alt="image02" className="project-img"/>
              <div className="img-middle-layer">
                <Link to="/project2"><div className="img-text-layer">KatSuper Store</div></Link>
              </div>
            </Col>

            <Col xs={12} sm={10} md={10} lg={6} className="project-text-right">
              <h1 className="span-white"><span className="span-blue">Project 2</span><span className="span-pink"> - </span><span className="span-yellow text-small">'KatSuper Store'</span></h1>


              <h2 className="span-green">RESTful app</h2>
              <p className="span-white">For my second major project at GA, I created my first fully RESTful application with backend authentication using Express.js Sessions. This project was my first opportunity to get to grips with an application that demonstrated the create, read update, delete (CRUD) functionality found in most websites.</p>

              <p className="span-white">During the course at GA, my coursemates and I often got food from a local food market near the campus. One particular Japanese Katsu wrap stall stood out and in tribute to that stall I chose to create site all about the best Katsu spot in London. The app uses embedded JavaScript (EJS) to render views in the browser and users can add, rate and comment on their favourite katsu curry places.
              </p>

              <div className="projects-icons-box span-blue">
                <i className="devicon-javascript-plain"></i>
                <i className="devicon-html5-plain-wordmark skill-icon"></i>
                <i className="devicon-css3-plain-wordmark"></i>
                <i className="devicon-sass-original"></i>
                <i className="devicon-bootstrap-plain-wordmark"></i>
                <i className="devicon-nodejs-plain-wordmark"></i>
                <i className="devicon-mongodb-plain-wordmark"></i>
                <i className="devicon-gulp-plain"></i>
                <i className="devicon-git-plain-wordmark"></i>
                <i className="devicon-github-plain-wordmark"></i>
                <i className="devicon-heroku-line-wordmark"></i>
                <i className="devicon-trello-plain-wordmark"></i>
              </div>

            </Col>
          </Col>
        </Row>

        <Row className="project-1">
          <Col xs={12} sm={10} smOffset={1} md={10} mdOffset={1} lg={10} lgOffset={1} className="project-tile">

            <Col xs={12} sm={12} md={12} lg={6} className="project-image-left img-container">
              <img src="../../assets/screenshot_game.jpg" alt="image01" className="project-img"/>
              <div className="img-middle-layer">
                <Link to="/project1"><div className="img-text-layer">Can You Diglett?</div></Link>
              </div>
            </Col>

            <Col xs={12} sm={10} md={10} lg={6} className="project-text-right">
              <h1 className="span-white"><span className="span-blue">Project 1</span><span className="span-pink"> - </span><span className="span-yellow text-small">'Can You Diglett?'</span></h1>

              <h2 className="span-green">JavaScript Game</h2>
              <p className="span-white">My first project at GA was to build an interactive game using JavaScript and jQuery for DOM manipulation. This was my first opportunity to apply my early JS knowledge to a working app and to also apply CSS styling to my own product. The overall look and feel of the app was that of a retro 8-bit arcade game with a simple colour scheme and mocked-up game controllers in the user interface. The game itself consisted of a character that a user can move around a grid and push an object into the goal area. The JS game logic included collision detection between the character, object and game environment as well as random spawning of the goal object. I also incorporated music and sound files to add an extra dimension to the user experience.</p>

              <div className="projects-icons-box span-blue">
                <i className="devicon-javascript-plain"></i>
                <i className="devicon-html5-plain-wordmark skill-icon"></i>
                <i className="devicon-css3-plain-wordmark"></i>
                <i className="devicon-jquery-plain-wordmark"></i>
                <i className="devicon-git-plain-wordmark"></i>
                <i className="devicon-github-plain-wordmark"></i>
                <i className="devicon-heroku-line-wordmark"></i>
                <i className="devicon-trello-plain-wordmark"></i>
              </div>
            </Col>
          </Col>
        </Row>


      </Element>
    </Row>
  );
};

export default withRouter(Projects);
