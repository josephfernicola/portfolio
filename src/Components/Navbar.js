import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbarContainer">
      <Link to="/portfolio">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
      <Link
        to="files/resumeToDownload.docx"
        target="_blank"
        className="resumeButton"
        download
      >
        Download Resume
      </Link>
    </nav>
  );
};

export default Navbar;
