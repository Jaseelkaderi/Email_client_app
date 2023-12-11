import logo from "./logo.svg";
import Inbox from "./Components/inbox";
import Messages from "./Components/messages";
import Desc from "./Components/desc";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          position: "relative",
          justifyContent: "space-between",
          width: 1000,
          margin: 100,
        }}
      >
        <Inbox />
        <Messages />
        <Desc />
      </div>
    </div>
  );
}

export default App;
