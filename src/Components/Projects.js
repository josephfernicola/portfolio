import emrPreview from "../images/emrPreview.png";
import waldoPreview from "../images/waldoPreview.png";
import shoppingCartPreview from "../images/shoppingCartPreview.png";
import memoryCardPreview from "../images/memoryCardPreview.png";
import twitterCloneCodePreview from "../images/twitterCloneCodePreview.png";
import resumeBuilderPreview from "../images/resumeBuilderPreview.png";

const Projects = () => {
  return (
    <main className="projectsContainer">
      <h1 className="projectsHeader">
        Click on my projects below to take a look!
      </h1>
      <ul className="allProjects">
        <li className="projectListItemContainer">
          <div className="titleAndImage">
            <div className="projectTitle">Twitter Clone RESTful API</div>
            <img
              src={twitterCloneCodePreview}
              alt="Twitter Clone Preview"
              className="projectImage"
            ></img>
          </div>
          <div className="projectDescription">
            <p>
              ▪ A RESTful Web Service for a social media application with 30
              various endpoints for performing CRUD operations and other HTTP
              requests for users, tweets, and hashtags
            </p>
            <p>
              ▪ Created a database schema using PostgreSQL in pgAdmin in
              collaboration with other developers
            </p>
            <p>
              ▪ Utilized Spring Boot and JPA to build controllers and service
              implementations that handle HTTP requests, backend validation and
              logic, and converts data between the API and its database models
            </p>
            <p>
              ▪ Fulfilled project requirements by using Postman to test,
              troubleshoot, and debug API functionality
            </p>
          </div>
        </li>
        <li className="projectListItemContainer">
          <div className="titleAndImage">
            <a
              href="https://noble-ehr.herokuapp.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="projectTitle"
            >
              Electronic Medical Record
            </a>
            <a
              href="https://noble-ehr.herokuapp.com/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={emrPreview}
                alt="Electronic Medical Record Preview"
                className="projectImage"
              ></img>
            </a>
          </div>
          <div className="projectDescription">
            <p>
              ▪ A full-stack electronic medical record accplication in which
              users can write patient notes, edit their own notes, view all
              patient notes from other providers, and delete their own notes.
            </p>
            <p>
              ▪ Built backend server and REST API using Node.js and Express.js
            </p>
            <p>
              ▪ Stored user information, patient information, and notes in
              MongoDB
            </p>
            <p>
              ▪ Implemented authentication and API endpoint protection using
              JSON web tokens
            </p>
            <p>
              ▪ Utilized Mongoose for structuring and accessing user and patient
              information
            </p>
          </div>
        </li>
        <li className="projectListItemContainer">
          <div className="titleAndImage">
            <a
              href="https://josephfernicola.github.io/wheres-waldo"
              target="_blank"
              rel="noopener noreferrer"
              className="projectTitle"
            >
              Where's Waldo
            </a>
            <a
              href="https://josephfernicola.github.io/wheres-waldo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={waldoPreview}
                alt="Where's Waldo Preview"
                className="projectImage"
              ></img>
            </a>
          </div>
          <div className="projectDescription">
            <p>
              ▪ A photo tagging Where’s Waldo application that includes four
              different maps to play, to find all three characters while being
              timed
            </p>
            <p>
              ▪ Users can click anywhere on the map to make their guess for a
              specific character which is validated with X and Y coordinates on
              the page
            </p>
            <p>
              ▪ Utilized Firebase for the backend to store and display the user
              scores and names for each map
            </p>
          </div>
        </li>
        <li className="projectListItemContainer">
          <div className="titleAndImage">
            <a
              href="https://josephfernicola.github.io/shopping-cart/"
              target="_blank"
              rel="noopener noreferrer"
              className="projectTitle"
            >
              Shopping Cart
            </a>
            <a
              href="https://josephfernicola.github.io/shopping-cart/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={shoppingCartPreview}
                alt="Shopping Cart Preview"
                className="projectImage"
              ></img>
            </a>
          </div>
          <div className="projectDescription">
            <p>
              ▪ A clothing store website which allows users to browse and add
              items to their cart
            </p>
            <p>
              ▪ Utilized React Router to navigate to different pages of the
              application
            </p>
            <p>
              ▪ Calculated the total price at the bottom of the cart page when
              any item is added or removed
            </p>
          </div>
        </li>
        <li className="projectListItemContainer">
          <div className="titleAndImage">
            <a
              href="https://josephfernicola.github.io/memory-card/"
              target="_blank"
              rel="noopener noreferrer"
              className="projectTitle"
            >
              Memory Card Game
            </a>
            <a
              href="https://josephfernicola.github.io/memory-card/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={memoryCardPreview}
                alt="Memory Card Game Preview"
                className="projectImage"
              ></img>
            </a>
          </div>
          <div className="projectDescription">
            <p>
              ▪ A React application in which users click on an album to get
              points but cannot click on the same album more than once
            </p>
            <p>▪ Randomly shuffled the list of albums after each click</p>
          </div>
        </li>
        <li className="projectListItemContainer">
          <div className="titleAndImage">
            <a
              href="https://josephfernicola.github.io/cv-application/"
              target="_blank"
              rel="noopener noreferrer"
              className="projectTitle"
            >
              Resume Builder
            </a>
            <a
              href="https://josephfernicola.github.io/cv-application/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={resumeBuilderPreview}
                alt="Resume Builder Preview"
                className="projectImage"
              ></img>
            </a>
          </div>
          <div className="projectDescription">
            <p>
              ▪ A resume builder application which allows users to generate a CV
              application by clicking on each item to fill out their information
            </p>
          </div>
        </li>
      </ul>
    </main>
  );
};

export default Projects;
