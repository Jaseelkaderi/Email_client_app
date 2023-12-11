const MessageBlock = (message, index) => {
  return (
    <div
      style={{
        height: 50,
        width: 400,
        border: "2px solid #000",
        background: `${index === 0 ? "#DCDCDC" : ""}`,
        paddingLeft: 10,
      }}
      onClick={()=>{console.log("click Happened")}}
    >
      {message}
    </div>
  );
};

export default MessageBlock;
