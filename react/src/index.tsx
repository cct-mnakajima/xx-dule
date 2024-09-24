import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { IconContext } from "react-icons";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <IconContext.Provider value={{ color: "#ccc", size: "44px" }}>
    <App />
  </IconContext.Provider>
);
