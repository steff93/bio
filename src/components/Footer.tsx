import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      Stefan Boghean <FontAwesomeIcon icon={faCopyright} /> {currentYear}
    </div>
  );
};

export default Footer;
