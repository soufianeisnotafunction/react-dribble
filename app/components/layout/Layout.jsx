import React from "react";
import "./layout.scss";

class Layout extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <div className="container row center">
          <span id="working">What are you working on?</span>
          <span id="designer">Dribbble is show and tell for designers.</span>
          <a href={
            "https://dribbble.com/about"
          } className="btn text-center" id="learn">Learn more</a>
          <a href={
            "https://dribbble.com/signup"
          } className="btn text-center" id="signup">Sign up</a>
        </div>
      </div>
    );
  }
}

export default Layout
