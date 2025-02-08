import { faMedium } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { socialLinks } from "./components/config";
import Menu from "./components/Menu";
import "./Header.scss";

const Header = () => {
  const { github, linkedIn, medium, email } = socialLinks;

  return (
    <div className="header">
      <div className="inner">
        {/* <div className="logo">Dreams don't work unless you do.</div> */}
        <Menu />
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

          <a href={`mailto:${email.link}`}>
            <EmailIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
