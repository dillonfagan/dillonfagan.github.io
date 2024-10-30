const Card = ({ children }) => {
  return <div className="bg-base-200 card select-none">{children}</div>;
};

Card.Outlined = ({ children }) => {
  return (
    <div className="bg-transparent card border border-base-300 select-none">
      {children}
    </div>
  );
};

Card.Body = ({ children }) => {
  return <div className="card-body">{children}</div>;
};

export default Card;