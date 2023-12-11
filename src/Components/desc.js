import { useSelector } from "react-redux";

const Desc = () => {
  const DisplayMessage = useSelector((state) => state.message.displayMessage);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        justifyContent: "flex-start",
        alignContent: "center",
        border: "2px solid #000",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <button>Fav</button>
        <button>Delete</button>
      </div>
      <div style={{ marginTop: 20, padding: 20 }}>
        <text>{DisplayMessage}</text>
        <div style={{ marginTop: 20 }}>
          Thank you for your order. We’ll send a confirmation when your order
          ships. Your estimated delivery date is indicated below. If you would
          like to view the status of your order or make any changes to it
        </div>
      </div>
    </div>
  );
};
export default Desc;
