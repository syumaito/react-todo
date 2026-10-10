import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";


const element = document.getElementById("root");
console.log(element);

//TypeScriptでは型チェックするので、HTMLElementかどうかじゃなく、nullじゃない事を書く
if (element!== null) {
  createRoot(element).render(
    <StrictMode>
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
    </StrictMode>,
  );
}