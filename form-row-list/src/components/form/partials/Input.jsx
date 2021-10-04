import React from "react";

/**
 * Input
 *
 * @param {string=} className optional special class name
 * @param {string} type Input type, default "text"
 * @param {boolean} disabled Disabled input flag, default false
 * @param {boolean} readOnly ReadOnly input flag, default false
 * @returns {HTMLElement} Return input component
 */
const Input = React.forwardRef(
  (
    {
      className = "",
      type = "text",
      disabled = false,
      readOnly = false,
      ...props
    },
    ref
  ) => (
    <input
      readOnly={disabled || readOnly}
      ref={ref}
      className={className}
      type={type}
      {...props}
    />
  )
);

export { Input };
