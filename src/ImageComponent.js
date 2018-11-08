import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ImageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
  }

  onImageLoad() {
    if (this.isMounted()) {
      this.setState({ loaded: true });
    }
  };

  componentDidMount() {
    var imgTag = ReactDOM.findDOMNode(this.refs.img);
    var imgSrc = imgTag.getAttribute('src');
    var img = new window.Image();
    img.onload = this.onImageLoad;
    img.src = imgSrc;
  };

  render() {
    var { className, ...props } = this.props;
    var rootClassName = className ? className + ' image' : 'image';
    if (this.state.loaded) {
      rootClassName += ' image-loaded';
    }
    return <img ref="img" {...props} className={rootClassName} />;
  }
};

export default ImageComponent;
  