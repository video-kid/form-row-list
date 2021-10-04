import React from "react";

/**
 * Label
 *
 * @param {HTMLElement} children Label content
 * @param {boolean|string} htmlFor Id of label, or false when it should be span that look like label, default false
 * @returns {HTMLElement} Return label or span that looks like label
 */
const Label = ({ htmlFor = false, children, ...props }) =>
  htmlFor ? (
    <label htmlFor={htmlFor} {...props}>
      {children}
    </label>
  ) : (
    <span {...props}>{children}</span>
  );

export { Label };
