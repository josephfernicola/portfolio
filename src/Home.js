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
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [bio, setBio] = useState(null);

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
        localStorage.setItem("profilePicture", JSON.stringify(json.avatar_url));
        localStorage.setItem("bio", JSON.stringify(json.bio));
        setBio(JSON.parse(localStorage.getItem("bio")));
        setProfilePicture(JSON.parse(localStorage.getItem("profilePicture")));
      }
    };
    if (
      JSON.parse(localStorage.getItem("bio")) == null ||
      JSON.parse(localStorage.getItem("profilePicture")) == null
    ) {
      fetchGithubInfo();
    } else {
      setBio(JSON.parse(localStorage.getItem("bio")));
      setProfilePicture(JSON.parse(localStorage.getItem("profilePicture")));
    }
  }, []);
  if (bio === null && profilePicture == null) {
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
            alt="Headshot"
            className="homeProfilePicture"
            src={profilePicture}
          ></img>
          <span>{bio}</span>
        </div>
        <div className="aboutDescription">
          <div>Hi, my name is</div>
          <h2>Joseph Fernicola</h2>
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
          <span>Node.js & Express.js</span>
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