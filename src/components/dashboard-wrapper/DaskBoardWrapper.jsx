import React from "react";
import "./DaskBoardWrapper.scss";

const DaskBoardWrapper = (props) => {
  return <div className="daskboard-wrapper">{props.children}</div>;
};

export default DaskBoardWrapper;

export const DaskBoardWrapperMain = (props) => {
  return <div className="daskboard-wrapper__main">{props.children}</div>;
};

export const DaskBoardWrapperRight = (props) => {
  return <div className="daskboard-wrapper__right">{props.children}</div>;
};
