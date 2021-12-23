import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div id="footer">
      <div className="repository">
       our repository 
      </div>
      <div className="git">
        <a href="https://github.com/codestates/PickAndDrink">github.com/codestates/PickAndDrink</a>
      </div>
      <div className="lee">
        <a href='https://github.com/LeeTaeGwan'>이태관</a>
      </div>
      <div className="kim">
        <a href='https://github.com/LittleBiber'>김상형</a>
      </div>
      <div className="min">
        <a href='https://github.com/racyde'>이상민</a>
        </div>
      <div className="song">
        <a href='https://github.com/songdayoung1'>송다영</a>
        </div>
    </div>
  );
}

export default Footer;
