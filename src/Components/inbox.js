import "./common.css";
import { useState } from "react";
const Inbox = () => {
  const [id, setId] = useState("inbox");
  const handleClick = (id) => {};
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        justifyContent: "center",
        alignContent: "center",
        border: "2px solid #000",
      }}
    >
      <div
        style={{
          height: 50,
          width: 100,
          background: "#DCDCDC",
          border: "2px solid #000",
        }}
        onClick={()=>{console.log("click triggered")}}
      >
        inbox
      </div>
      <div
        style={{
          height: 50,
          width: 100,
          border: "2px solid #000",
        }}
      >
        send
      </div>
      <div
        id="Fav"
        style={{
          height: 50,
          width: 100,
          border: "2px solid #000",
        }}
        onClick={handleClick}
      >
        Fav
      </div>
    </div>
  );
};
export default Inbox;
