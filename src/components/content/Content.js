import React, {Component, PropTypes} from 'react';
// import "../../css/content.css";

const Content = ({children}) => (
  <div>
    {children}
  </div>
);

Content.propTypes = {
  content: PropTypes.shape({
    children: PropTypes.children
  }).isRequired
}
export default Content;
