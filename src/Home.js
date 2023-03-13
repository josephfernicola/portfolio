import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { BsDatabase } from "react-icons/bs";
import { SiMongodb } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { SiCss3 } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import postgresIcon from "./images/postgresIcon.png";
import mysqlIcon from "./images/mysqlIcon.png";
import javaIcon from "./images/javaIcon.png";
import nodeIcon from "./images/nodeIcon.png";
import expressIcon from "./images/expressIcon.png";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [bio, setBio] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGithubInfo = async () => {
      const response = await fetch(
        "https://api.github.com/users/josephfernicola",
        {
          headers: {
            Authorization: `${process.env.GITHUB_TOKEN}`,
          },
        }
      );
      const json = await response.json();
      if (response.ok) {
        setError(null);
        sessionStorage.setItem(
          "profilePicture",
          JSON.stringify(json.avatar_url)
        );
        sessionStorage.setItem("bio", JSON.stringify(json.bio));
        setBio(JSON.parse(sessionStorage.getItem("bio")));
        setProfilePicture(JSON.parse(sessionStorage.getItem("profilePicture")));
      }
      if (!response.ok) {
        setError("Unable to get profile information from GitHub.");
      }
    };
    if (
      JSON.parse(sessionStorage.getItem("bio")) === null ||
      JSON.parse(sessionStorage.getItem("profilePicture")) === null
    ) {
      fetchGithubInfo();
    } else {
      setBio(JSON.parse(sessionStorage.getItem("bio")));
      setProfilePicture(JSON.parse(sessionStorage.getItem("profilePicture")));
    }
  }, []);
  if (bio === null || profilePicture === null) {
    return (
      <div className="loadingScreen">
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  return (
    <main className="homeContainer">
      <section className="aboutContainer">
        <div className="headshotAndBio">
          <img
            alt="Github Profile"
            className="homeProfilePicture"
            src={profilePicture}
          ></img>
          <span>{bio}</span>
          <span className="error">{error}</span>
        </div>
        <div className="aboutDescription">
          <h3>Hi, my name is</h3>

          <h1 className="nameOnHomepage">Joseph Fernicola</h1>

          <span>I build websites and web applications</span>
          <p>
            I am a software engineer passionate about full stack web development
            and learning new technologies
          </p>
        </div>
      </section>
      <h3>I have experience with the following:</h3>
      <div className="allIconsContainer">
        <div className="iconAndName">
          <div className="techIcon" id="javascriptIcon">
            {<SiJavascript />}
          </div>
          <span>JavaScript</span>
        </div>
        <div className="iconAndName">
          <div className="techIcon" id="reactIcon">
            {<FaReact />}
          </div>
          <span>React</span>
        </div>
        <div className="iconAndName">
          <div className="techIcon" id="reduxIcon">
            {<SiRedux />}
          </div>
          <span>Redux</span>
        </div>
        <div className="iconAndName">
          <img
            className="techIcon"
            id="javaIcon"
            src={javaIcon}
            alt="Java"
          ></img>
          <span>Java</span>
        </div>
        <div className="iconAndName">
          <div className="techIcon" id="springIcon">
            {<SiSpring />}
          </div>
          <span>Spring Boot</span>
        </div>
        <div className="iconAndName">
          <img
            className="techIcon"
            id="nodeIcon"
            src={nodeIcon}
            alt="Node.js"
          ></img>
          <span>Node.js</span>
        </div>
        <div className="iconAndName">
          <img
            className="techIcon"
            id="expressIcon"
            src={expressIcon}
            alt="Express"
          ></img>
          <span>Express</span>
        </div>
        <div className="iconAndName">
          <div className="techIcon" id="sqlIcon">
            {<BsDatabase />}
          </div>
          <span>SQL</span>
        </div>
        <div className="iconAndName">
          <img
            className="techIcon"
            id="postgresIcon"
            src={postgresIcon}
            alt="PostgreSQL"
          ></img>
          <span>PostgreSQL</span>
        </div>
        <div className="iconAndName">
          <img
            className="techIcon"
            id="mysqlIcon"
            src={mysqlIcon}
            alt="MySQL"
          ></img>
          <span>MySQL</span>
        </div>
        <div className="iconAndName">
          <div className="techIcon" id="mongoIcon">
            {<SiMongodb />}
          </div>
          <span>MongoDB</span>
        </div>
        <div className="iconAndName">
          <div className="techIcon" id="htmlIcon">
            {<TiHtml5 />}
          </div>
          <span>HTML5</span>
        </div>
        <div className="iconAndName">
          <div className="techIcon" id="cssIcon">
            {<SiCss3 />}
          </div>
          <span>CSS3</span>
        </div>
        <div className="iconAndName">
          <div className="techIcon" id="firebaseIcon">
            {<SiFirebase />}
          </div>
          <span>Firebase</span>
        </div>
      </div>
    </main>
  );
};

export default Home;
