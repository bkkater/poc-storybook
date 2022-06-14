import React from "react";
import PropTypes from "prop-types";

// Constants
import { SIZES } from "../../constants/sizes";
import { BUTTON_KINDS } from "../../constants/button";

const Button = ({
  id,
  className,
  label,
  size,
  handleClick,
  kind,
  outline,
  leftIcon,
  rightIcon,
  disabled,
  fullSize,
}) => {
  const classList = ["btn"];

  if (size) {
    classList.push(`btn-${size}`);
  }

  if (kind && !outline) {
    classList.push(`btn-${kind}`);
  }

  if (outline) {
    classList.push(`btn-outline-${kind}`);
  }

  if (className) {
    classList.push(className);
  }

  if (fullSize) {
    classList.push("w-100");
  }

  return (
    <button
      id={id}
      className={classList.join(" ")}
      onClick={handleClick}
      style={{ marginRight: 15, fontWeight: 600 }}
      disabled={disabled}
    >
      {leftIcon}
      {label}
      {rightIcon}
    </button>
  );
};

export default Button;

Button.sizes = SIZES;
Button.kinds = BUTTON_KINDS;

Button.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf([
    Button.sizes.SMALL,
    Button.sizes.MEDIUM,
    Button.sizes.LARGE,
  ]),
  kind: PropTypes.oneOf([
    Button.kinds.PRIMARY,
    Button.kinds.SECONDARY,
    Button.kinds.SUCCESS,
    Button.kinds.DANGER,
  ]),
  handleClick: PropTypes.func,
  outline: PropTypes.bool,
  disabled: PropTypes.bool,
  fullSize: PropTypes.bool,
  rightIcon: PropTypes.node,
  leftIcon: PropTypes.node,
};

Button.defaultProps = {
  id: null,
  className: "",
  label: "Button",
  kind: Button.kinds.PRIMARY,
  size: Button.sizes.MEDIUM,
  fullSize: false,
  outline: false,
  handleClick: null,
  rightIcon: null,
  leftIcon: null,
  disabled: false,
};
