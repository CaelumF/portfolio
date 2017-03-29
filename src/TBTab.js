import React, {Component, PropTypes} from "react";
import "./css/TBTab.css";
import "./comic.png"
const TBTab = ({onClick, image, text, activeTab}) => (

  <div className="TBTab"
    onClick={() => {onClick.call()}}>
    <div
      className={"TBTab-background" + (activeTab == text ? " selected-tab" : "")}
      style={{backgroundImage: `url(${image})`}}></div>
    <p>
      {text}
    </p>
  </div>
);

TBTab.propTypes = {
  tbtab: PropTypes.shape({
    onClick: PropTypes.func.isRequired,
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
}
export default TBTab;
