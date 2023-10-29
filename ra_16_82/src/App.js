import React from "react";
import "./App.css";
import { Data } from "./engine/Data.js";
import { Error } from "./engine/Error.js";
import { Loading } from "./engine/Loading.js";

function App() {
  return (
    <div className="App">
      <Data />
      <Error />
      <Loading />
    </div>
  );
}

export { App };
