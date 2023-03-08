import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbarContainer">
      <Link to="/portfolio/home">Home</Link>
      <Link to="/portfolio/about">About</Link>
      <Link to="/portfolio/projects">Projects</Link>
      <Link to="/portfolio/contact">Contact</Link>
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
