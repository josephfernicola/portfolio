import { Link } from "react-router-dom";
import fileDownload from "js-file-download";

const Navbar = () => {
  return (
    <nav className="navbarContainer">
      <Link to="/portfolio">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
      <a
        href="JosephFernicolaResume.docx"
        target="_blank"
        rel="noopener noreferrer"
        className="resumeButton"
        download
      >
        Download Resume
      </a>
    </nav>
  );
};

export default Navbar;
