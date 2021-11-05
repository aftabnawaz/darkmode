import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./common/containers/App";
import "./styles/_main.scss";
import MainRoutes from './routes/index' 

ReactDOM.render(
  <AppContainer>
    <MainRoutes/>    
  </AppContainer>,
  document.getElementById("root")
);