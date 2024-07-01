import { MouseEventHandler } from "react";
import "./styles.scss";

interface IButtonProps {
  type?: TButtonType;
  title: string;
  onClick: MouseEventHandler;
}
const Button: React.FC<IButtonProps> = ({
  type = "primary",
  title,
  onClick,
}) => {
  return (
    <button className={`btn btn-${type}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
