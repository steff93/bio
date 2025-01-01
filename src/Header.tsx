import { faMedium } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Header.scss";
import { socialLinks } from "./components/config";

const Header = () => {
  const { github, linkedIn, medium } = socialLinks;

  return (
    <div className="header">
      <div className="inner">
        <div className="logo">Dreams don't work unless you do.</div>
        <div className="social-links">
          <a href={linkedIn.link} target="_blank">
            <LinkedInIcon />
          </a>

          <a href={github.link} target="_blank">
            <GitHubIcon />
          </a>

          <a href={medium.link} target="_blank">
            <FontAwesomeIcon icon={faMedium} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
