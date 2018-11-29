import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Button from "./Button";
import Content from "./Content";

class App extends React.Component {
 
      
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Button />
        <Content />
      </React.Fragment>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
