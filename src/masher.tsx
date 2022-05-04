import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import {
  ApiClient,
  Masher,
  DefaultMasherProps,
} from "@moviemasher/client-react";
import "@moviemasher/client-react/dist/moviemasher.css";

const applicationOptions = { previewSize: { width: 480, height: 270 } };
const options = DefaultMasherProps(applicationOptions);
const masher = <Masher {...options} />;
// const editor = <ApiClient>{masher}</ApiClient>;
// const strictMode = <StrictMode>{editor}</StrictMode>;
ReactDOM.render(masher, document.getElementById("app"));
