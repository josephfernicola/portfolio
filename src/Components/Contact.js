import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const openEmail = () => {
    window.open("mailto:josephrfernicola@gmail.com");
  };
  return (
    <main className="contactContainer">
      <h1 className="contactHeader">Get In Touch</h1>
      <div className="buttonContainer">
        <div className="emailButton" onClick={openEmail}>
          {<MdEmail />}
          <div>Email Me</div>
        </div>

        <div className="linkedinButtonAndText">
          <a
            href="https://www.linkedin.com/in/joseph-fernicola-248780205/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedinButton"
          >
            {<BsLinkedin />}
          </a>
          <div>Connect on LinkedIn</div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
