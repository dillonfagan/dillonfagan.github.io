const Text = ({ children }) => (<span>{children}</span>);

Text.Hero = ({ children }) => {
  return (
    <span className="font-semibold text-4xl text-base-content">{children}</span>
  );
};

Text.Accent = ({ children }) => {
  return (
    <span className="text-primary">{children}</span>
  );
};

export default Text;