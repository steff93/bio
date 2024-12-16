import ProfilePicture from "../assets/images/IMG_20180827_120934_111.jpg";
import Button from "./Button";
import "./Card.scss";
import { socialLinks } from "./config";

const Card = () => {
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
      <div className="card__socials">
        {Object.entries(socialLinks).map(([name, info], index) => {
          return <Button name={name} {...info} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Card;
