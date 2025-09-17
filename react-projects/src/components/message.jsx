const Message = (props) => {
  const { text, bgColor } = props;
  return (
    <div
      style={{
        background: bgColor,
      }}
    >
      {text}
    </div>
  );
};

export default Message;
