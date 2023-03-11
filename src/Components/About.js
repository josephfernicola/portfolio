import { BsGithub } from "react-icons/bs";

const About = () => {
  return (
    <main className="aboutSectionContainer">
      <h1>About Me</h1>
      <p className="aboutParagraph">
        Hello! My name is Joseph and I originally come from a background as a
        physical therapist. While working as a physical therapist, I got curious
        about the electronic medical record systems that I used at work everyday
        and why they had so many flaws in them. This curiousity prompted to me
        to begin learing about full stack web development through the Odin
        Project where I built various projects using HTML, CSS, JavaScript,
        React, Node.js, Express, and MongoDB which are displayed on my{" "}
        <a
          href="https://github.com/josephfernicola"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub {<BsGithub />}
        </a>
        .
      </p>
      <p className="aboutParagraph">
        It was during this process of self-teaching where I found my new passion
        in software development and knew that I had to make this career
        transition. I throroughly enjoyed building these projects, learning new
        technologies, and the exceptional feeling of solving problems through
        programming. After building my full-stack electronic medical record
        application, I also began working towards my bachelor's degree in
        computer science at Western Governors University to enhance my
        foundational knowledge.
      </p>
      <span className="aboutParagraph aboutSpan">
        I am currently completing Cook Systems' FastTrack'd Program in which I
        learned Java, Spring Boot, SQL, PostgreSQL, JavaScript, React, Redux,
        and Node.js. I am excited to continue growing as a developer and
        improving my skills!
      </span>
    </main>
  );
};

export default About;
