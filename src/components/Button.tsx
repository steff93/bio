import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import Popover from "@mui/material/Popover";
import { useId, useState } from "react";
import { copyTextToClipboard } from "../helpers/copyText";
import "./Button.scss";

interface ButtonProps {
  name: string;
  title: string;
  link: string;
}

const Button = ({ name, title, link: url }: ButtonProps) => {
  const [popoverAnchor, setPopoverAnchor] = useState<HTMLAnchorElement | null>(
    null
  );
  const popoverId = useId();
  const showPopover = Boolean(popoverAnchor);

  const isEmail = name === "email";

  const emailHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isEmail) return;
    e.preventDefault();

    const { currentTarget } = e;

    copyTextToClipboard(url)
      .then(() => {
        setPopoverAnchor(currentTarget);
      })
      .catch((err) => console.log(err));
  };

  const handlePopoverClose = () => {
    setPopoverAnchor(null);
  };

  return (
    <>
      <a
        className={`social-link social-link--${name}`}
        href={!isEmail ? url : ""}
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
          vertical: "center",
          horizontal: "right",
        }}
      >
        <ContentPasteIcon fontSize="small" /> Email Address Copied!
      </Popover>
    </>
  );
};

export default Button;
