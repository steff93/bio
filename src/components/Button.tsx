import "./Button.scss";

interface ButtonProps {
  name: string;
  title: string;
  link?: string;
}

const Button = ({ name, title, link: url }: ButtonProps) => {
  return (
    <a
      className={`social-link social-link--${name}`}
      href={url ? url : ""}
      target="_blank"
    >
      {title}
    </a>
  );
};

export default Button;
