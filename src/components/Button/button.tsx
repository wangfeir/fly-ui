import React from "react";
import classNames from 'classnames'
export enum ButtonType {
  Default = "default",
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
// React.ButtonHTMLAttributes 是typescript
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type anchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps&anchorButtonProps>
const Button: React.FC<ButtonProps> = (props) => {
  const {
    // className,
    btnType= ButtonType.Default,
    size = ButtonSize.Middle,
    className,
    href,
    disabled,
    children,
    ...restProps
  } = props

  const classes = classNames('btn',className, { 
    [`btn-${size}`]: size, 
    [`btn-${btnType}`]         :btnType,
    'disabled': btnType === ButtonType.Link && disabled 
  });

  if (btnType === ButtonType.Link && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    )
  } else {
    return (
      <button className={classes} disabled={disabled}  {...restProps}>
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
