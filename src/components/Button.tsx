import Popover from "@mui/material/Popover";

import { useId, useState } from "react";
import "./Button.scss";

interface ButtonProps {
  name: string;
  title: string;
  link?: string;
}

const Button = ({ name, title, link: url }: ButtonProps) => {
  const [popoverAnchor, setPopoverAnchor] = useState<HTMLAnchorElement | null>(
    null
  );
  const popoverId = useId();
  const isEmail = name === "email";

  const emailHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isEmail) return;
    e.preventDefault();
    setPopoverAnchor(e.currentTarget);
    console.log("show popover");
  };

  const showPopover = Boolean(popoverAnchor);

  const handlePopoverClose = () => {
    setPopoverAnchor(null);
  };

  return (
    <>
      <a
        className={`social-link social-link--${name}`}
        href={url ? url : ""}
        target="_blank"
        onClick={emailHandler}
      >
        {title}
      </a>
      <Popover
        className="save-email-popover"
        id={popoverId}
        open={showPopover}
        anchorEl={popoverAnchor}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: -40,
          horizontal: 60,
        }}
      >
        Email Address Copied!
      </Popover>
    </>
  );
};

export default Button;
