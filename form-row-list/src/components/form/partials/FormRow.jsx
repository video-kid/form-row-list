import React from "react";

/**
 *
 * @param {HTMLElement} children Inputs, labels
 * @param {?string} error Error output, default null
 * @returns {?HTMLElement} Return inputs and labels and errors wrapped
 */
const FormRow = ({ error = null, children, className = "", ...props }) => (
  <div className="form-row" {...props}>
    {children}
    {error && <div className="form-error">{error}</div>}
  </div>
);

export { FormRow };
