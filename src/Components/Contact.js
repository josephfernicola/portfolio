const Contact = () => {
  const openEmail = () => {
    window.open("mailto:josephrfernicola@gmail.com");
  };
  return (
    <main className="contactContainer">
      <h1 className="contactHeader">Get In Touch</h1>
      <ul className="contactIconParent">
        <li>
          <a
            href="https://www.linkedin.com/in/joseph-fernicola-248780205/"
            className="contactIcon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in icon"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/josephfernicola"
            className="contactIcon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github icon"></i>
          </a>
        </li>
        <li>
          <div className="contactIcon" onClick={openEmail}>
            <i className="fas fa-envelope icon"></i>
          </div>
        </li>
      </ul>
    </main>
  );
};

export default Contact;
