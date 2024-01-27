import "./Card.scss";

// const socials = [];
// email - add option to copy email on click
// Linked In
// Git Hub
// Facebook
// Instagram

const Card = () => {
  return (
    <div className="card">
      <div className="card__header">
        <img alt="profile-image" />
        <h3 className="profile-name">Stefan Boghean</h3>
        <h5 className="profile-title">Front-end Developer</h5>
      </div>
      <div className="card__socials"></div>
    </div>
  );
};

export default Card;
