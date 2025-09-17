const Box = (props) => {
  const { label, bgColor, textColor, career, large } = props;
  return (
    <div
      style={{
        background: bgColor,
        color: textColor,
        fontSize: large ? "36px" : "24px",
      }}
    >
      <h1>{label}</h1>
      <h2>{career}</h2>
    </div>
  );
};

export default Box;
