import React, { useEffect, useState, useRef } from "react";
import ReactDom from "react-dom";

import "./styles.css";

import Input from "./hooks/useInput/Input";
import Tab from "./hooks/useTab/Tab";
import Effect from "./hooks/useEffect/Effect";
import Title from "./hooks/useTitle/Title";
import Click from "./hooks/useClick/Click";
import Confirm from "./hooks/useConfirm/useConfirm";
import PreventLeave from "./hooks/usePreventLeave/usePreventLeave";
import BeforeLeave from "./hooks/useBeforeLeave/useBeforeLeave";
import FadeIn from "./hooks/useFadeIn/useFadeIn";
import Network from "./hooks/useNetwork/useNetwork";
import Scroll from "./hooks/useScroll/useScroll";
import Fullscreen from "./hooks/useFullscreen/useFullscreen";
import Notification from "./hooks/useNotification/useNotification";
import Axios from "./hooks/useAxios/useAxios";

function App() {
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1>Hi</h1>
      <Input />
      <Tab />
      <Effect />
      <Title />
      <Click />
      <Confirm />
      <PreventLeave />
      <BeforeLeave />
      <FadeIn />
      <Network />
      <Scroll />
      <Fullscreen />
      <Notification />
      <Axios />
    </div>
  );
}

export default App;
