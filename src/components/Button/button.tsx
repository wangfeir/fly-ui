import React from "react";
import classNames from 'classnames'
export enum ButtonType {
  Default = "primary",
  Primary = "primary",
  Danger = "danger",
  Link = "link",
  // primary | ghost | dashed | danger | link | text
}
export enum ButtonSize {
  Large = "large",
  Middle = "middle",
  Small = "small",
}

interface BaseButtonProps {
  className?: string;
  btnType?: ButtonType;
  size?: ButtonSize;
  href?: string;
  disabled?: boolean;
  children: React.ReactNode
}

const Button: React.FC<BaseButtonProps> = (props) => {
  const {
    // className,
    btnType= ButtonType.Default,
    size = ButtonSize.Middle,
    href,
    disabled,
    children
  } = props
  const classes = classNames('btn', { 
    [`btn-${size}`]: size, 
    [`btn-${btnType}`]         :btnType,
    'disabled': btnType === ButtonType.Link && disabled 
  });

  if (btnType === ButtonType.Link && href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    )
  } else {
    return (
      <button className={classes} disabled={disabled}>
        {children}
      </button>
    )
  }

}
Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
}
export default Button
