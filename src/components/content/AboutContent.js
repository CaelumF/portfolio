import React, {Component, PropTypes} from "react";
// import "./css/content";
import Content from "./Content";

const AboutContent = ({children}) => (
  <Content>
    <p>
      doot doot
    </p>
  </Content>
);
AboutContent.propTypes = {
  aboutcontent: PropTypes.shape({
    children: PropTypes.children
  }).isRequired
}
export default AboutContent;
