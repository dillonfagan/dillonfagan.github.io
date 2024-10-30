const Card = ({ children }) => {
  return <div className="bg-base-200 card flex flex-col overflow-hidden select-none">{children}</div>;
};

Card.Outlined = ({ children }) => {
  return (
    <div className="bg-transparent card flex flex-col border border-base-300 overflow-hidden select-none">
      {children}
    </div>
  );
};

Card.Body = ({ children }) => {
  return <div className="card-body">{children}</div>;
};

export default Card;