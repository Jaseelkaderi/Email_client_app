import { useSelector } from "react-redux";
import { setDisplayMessage } from "../store/slice";
import MessageBlock from "./messageBlock";

const Messages = () => {
  const list = useSelector((state) => state.message.mesageList);
  const messageList = ["amazon", "flipkart", "microdoft", "amazon", "amzon"];
  const oncliCkHandler = (message) => {
    setDisplayMessage(message);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        border: "2px solid #000",
        textAlign: "left",
      }}
    >
      <div>
        <div
          style={{
            margin: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "2px solid #000",
            height: 20,
            borderRadius: 10,
          }}
        ></div>
      </div>
      <div style={{ margin: 10 }}>Messages</div>
      <ul style={{ margin: 0, padding: 0 }}>
        {list.map((index, item) => (
          <div
            onClick={() => oncliCkHandler(messageList[item])}
            style={{
              height: 50,
              width: 400,
              border: "2px solid #000",
              background: `${item === 0 ? "#DCDCDC" : ""}`,
              paddingLeft: 10,
            }}
          >
            {messageList[item]}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
