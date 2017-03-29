import React, {Component, PropTypes} from 'react';
import '../css/FloatingImage.css'

class FloatImage extends Component{
  constructor(){
    super()
    this.state = {
      imageStyles: {
        right: 0
      }
    }
  }
  render(){
    return(
      <div className="floating-image-container">
        <img src={this.props.src} className="floating-image-container" style={this.state.imageStyles}></img>
      </div>
    );
  }
}

FloatImage.defaultProps = {
  direction: "right"
}

FloatImage.propTypes = {
  src: PropTypes.string.isRequired
}

export default FloatImage
