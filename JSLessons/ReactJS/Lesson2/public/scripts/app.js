"use strict";

// var infoData = "ferid"
// const a = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, soluta!"; 
// var template = 
//     <h1 style={{
//         color:"red"
//     }}>
//         {infoData}</h1>
// ReactDOM.render(template,document.getElementById("root"));
var root = document.getElementById('root');
var number = 0;
var btnAddClassName = "btnRed";
var btnClearClassName = "btnGreen";

var addOne = function addOne() {
  number++;
  renderApp();
};

var clearOne = function clearOne() {
  number--;
  renderApp();
};

var renderApp = function renderApp() {
  var template = /*#__PURE__*/React.createElement("div", {
    style: {
      "width": "100%",
      "height": "100vh",
      "display": "flex",
      "flex-direction": "column"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      "color": "red",
      "font-size": "40px"
    }
  }, "Number: ", number), /*#__PURE__*/React.createElement("button", {
    className: btnAddClassName,
    onClick: addOne
  }, "+1"), /*#__PURE__*/React.createElement("button", {
    className: btnClearClassName,
    onClick: clearOne
  }, "-1"));
  ReactDOM.render(template, root);
};

renderApp();
