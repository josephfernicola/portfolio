import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbarContainer">
      <Link to="/portfolio/home" className="navbarLink">
        Home
      </Link>
      <Link to="/portfolio/about" className="navbarLink">
        About
      </Link>
      <Link to="/portfolio/projects" className="navbarLink">
        Projects
      </Link>
      <Link to="/portfolio/contact" className="navbarLink">
        Contact
      </Link>
      <a
        href="JosephFernicolaResume.docx"
        target="_blank"
        rel="noopener noreferrer"
        className="navbarLink"
        download
      >
        Download Resume
      </a>
    </nav>
  );
};

export default Navbar;
