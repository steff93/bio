import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as motion from "motion/react-client";
import ProfilePicture from "../assets/images/7A1A8707.jpg";
import "./ProfileImage.scss";

interface Props {
  onClose: () => void;
}

const ProfileImage = ({ onClose }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      className="lightbox"
      onClick={onClose}
    >
      <img alt="profile-image-big" src={ProfilePicture} />
      <FontAwesomeIcon
        icon={faX}
        className="lightbox-close"
        onClick={onClose}
      />
    </motion.div>
  );
};

export default ProfileImage;
