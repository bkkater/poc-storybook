import React from "react";
import PropTypes from "prop-types";

// Constants
import { TEXT_TYPES } from "../../constants/text";

const TextField = ({
  id,
  className,
  containerClassName,
  label,
  disabled,
  type,
  placeholder,
  descriptionHelper,
  maxLength,
  required,
  onFocus,
  onKeyDown,
}) => {
  const classList = ["form-control"];
  const containerClassList = ["form-group"];

  if (className) {
    classList.push(className);
  }

  if (containerClassName) {
    containerClassList.push(containerClassName);
  }

  return (
    <div className={containerClassList.join(" ")} style={{ marginBottom: 15 }}>
      {label && <label for={id}>{label}</label>}

      <input
        type={type}
        className={classList.join(" ")}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        maxLength={maxLength}
        style={{ marginTop: 5, marginBottom: 5 }}
      />

      {descriptionHelper && (
        <small id={`${id}-help`} class="form-text text-muted">
          {descriptionHelper}
        </small>
      )}
    </div>
  );
};

TextField.types = TEXT_TYPES;

export default TextField;

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  descriptionHelper: PropTypes.string,
  type: PropTypes.oneOf([
    TextField.types.TEXT,
    TextField.types.PASSWORD,
    TextField.types.DATE,
  ]),
  maxLength: PropTypes.number,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
};

TextField.defaultProps = {
  id: "",
  className: "",
  containerClassName: "",
  label: "",
  placeholder: "",
  type: TextField.types.TEXT,
  descriptionHelper: "",
  disabled: false,
  maxLength: null,
  required: false,
  onFocus: null,
  onKeyDown: null,
};
