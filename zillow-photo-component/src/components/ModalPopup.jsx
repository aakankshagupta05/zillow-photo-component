import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ModalPopup extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      imageSelected: {}};
  }

  // Handle forward arrow click
  showNextImage(currentImage) {
    const currentImageIndex = this.getIndexOfCurrentImage(currentImage);
    const { imagesArr } = this.props;

    if(currentImageIndex !== -1 && (currentImageIndex + 1 < imagesArr.length)) {
      this.setState (
        {
          imageSelected : imagesArr[currentImageIndex + 1]
        }
      );
    }
    else {
      alert('error occured while opening the image');
    }
  }

  // Handle back arrow click
  showPreviousImage(currentImage) {
    const currentImageIndex = this.getIndexOfCurrentImage(currentImage);
    const { imagesArr } = this.props;

    if(currentImageIndex !== -1 && (currentImageIndex - 1 >= 0)) {
      this.setState (
        {
          imageSelected : imagesArr[currentImageIndex -1]
        }
      );
    }
    else {
      alert('error occured while opening the image');
    }
  }

  // Get index of current displayed image from the images arrray
  getIndexOfCurrentImage(image) {
    let start = 0;
    const { imagesArr } = this.props;
    while (start < imagesArr.length) {
      if (image === imagesArr[start].url ) {
        return start;
      } else {
          start++;
      }
    }
    return -1;
  }

  render() {

    if(!this.props.show) {
      return null;
    }

    return (
      <div className="backdropStyle">
        <div className="modalStyle">
          <button
            style = {{ 'float': 'right'}}
            onClick={this.props.onClose.bind(this, false)}>
            X
          </button>
          <div className="navigationHolder">
            <img src={"arrow_back.svg"}
            onClick={this.showPreviousImage.bind(this,
                this.state.imageSelected.url || this.props.imageSelected.url)}/>
            <div
              className="image_large_placeholder"
              onClick={this.showNextImage.bind(this, this.state.imageSelected)}>
                <img src={this.state.imageSelected.url || this.props.imageSelected.url} className="image"/>
                <span className="image_large_caption">{this.state.imageSelected.caption || this.props.imageSelected.caption}</span>
            </div>
            <img src={"arrow_forward.svg"}
              onClick={this.showNextImage.bind(this,
                  this.state.imageSelected.url || this.props.imageSelected.url)}/>
          </div>
        </div>
      </div>
    );
  }
}

ModalPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  imagesArr: PropTypes.object,
  imageSelected: PropTypes.object
};

export default ModalPopup;
