const Button = ({ children, className = "", ...props }) => {
  if (props.href) {
    return (
      <a className={`button ${className}`} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button className={`button ${className}`} type="button" {...props}>
      {children}
    </button>
  );
};

export { Button };
