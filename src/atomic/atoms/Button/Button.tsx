import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick?: () => void;
  type?: "primary" | "secondary";
  btnSize?: "s" | "m";
  img?: string;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { type = "primary", btnSize = "m", children, onClick, className, ...rest } = props;

  return (
      <div
          className={classNames(styles.button, styles[type], styles[btnSize], className)} // className уже включён
          onClick={onClick}
          {...rest} // передаём все остальные props, но не className
      >
        {children}
      </div>
  );
};

export default Button;
