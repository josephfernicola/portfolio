import emrPreview from "../images/emrPreview.png";
import waldoPreview from "../images/waldoPreview.png";
import shoppingCartPreview from "../images/shoppingCartPreview.png";
import memoryCardPreview from "../images/memoryCardPreview.png";
import twitterCloneCodePreview from "../images/twitterCloneCodePreview.png";

const Projects = () => {
  return (
    <main className="projectsContainer">
      <h1 className="projectsHeader">Take a look at my projects!</h1>
      <div className="allProjects">
        <div className="twitterCloneContainer">
          <div className="titleAndImage">
            <div className="twitterTitle">Twitter Clone RESTful API</div>
            <img
              src={twitterCloneCodePreview}
              alt="Twitter Clone Preview"
              className="projectImage"
            ></img>
          </div>
          <div className="projectDescription">
            <p>Description for Twitter Clone RESTful API</p>
          </div>
        </div>
        <div className="emrContainter">
          <div className="titleAndImage">
            <a
              href="https://noble-ehr.herokuapp.com/login"
              target="_blank"
              rel="noopener noreferrer"
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
            <p>Description for Electronic Medical Record</p>
          </div>
        </div>
        <div className="waldoContainer">
          <div className="titleAndImage">
            <a
              href="https://josephfernicola.github.io/wheres-waldo"
              target="_blank"
              rel="noopener noreferrer"
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
            <p>Description for Where's Waldo</p>
          </div>
        </div>
        <div className="shoppingCartContainer">
          <div className="titleAndImage">
            <a
              href="https://josephfernicola.github.io/shopping-cart/"
              target="_blank"
              rel="noopener noreferrer"
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
            <p>Description for Shopping Cart</p>
          </div>
        </div>
        <div className="memoryCardContainer">
          <div className="titleAndImage">
            <a
              href="https://josephfernicola.github.io/memory-card/"
              target="_blank"
              rel="noopener noreferrer"
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
            <p>Description for Memory Card Game</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
