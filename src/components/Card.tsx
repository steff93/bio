import { faMedium } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ProfilePicture from "../assets/images/7A1A8707.jpg";
import "./Card.scss";
import { socialLinks } from "./config";

const Card = () => {
  const { github, linkedIn, medium, email } = socialLinks;

  return (
    <div className="card">
      <div className="card__header">
        <img
          className="profile-image"
          alt="profile-image"
          src={ProfilePicture}
        />
        <h3 className="profile-name">Stefan Boghean</h3>
        <h4 className="profile-title">Senior Front End Engineer</h4>
      </div>
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
    // {/* <div className="card__socials">
    //   {Object.entries(socialLinks).map(([name, info], index) => {
    //     return <Button name={name} {...info} key={index} />;
    //   })}
    // </div> */}
    // </div>
  );
};

export default Card;
