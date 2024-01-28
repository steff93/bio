import ProfilePicture from "../assets/images/IMG_20180827_120934_111.jpg";
import Button from "./Button";
import "./Card.scss";

const socialLinks = {
  email: {
    title: "Email",
    link: "stefan_boghean@yahoo.com",
  },
  github: {
    title: "GitHub",
    link: "https://github.com/steff93",
  },
  linkedIn: {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/stefan-boghean/",
  },
  facebook: {
    title: "Facebook",
    link: "https://www.facebook.com/stefan.boghean.9/",
  },
};

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
        <h5 className="profile-title">Passionate Front-end Developer</h5>
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
