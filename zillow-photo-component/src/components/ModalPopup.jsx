import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ModalPopup extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      imageSelected: {},
      currentImageIndex: 0,
      touchStartPos: 0,
      touchEndPos: 0
    };
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleArrowKeys, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleArrowKeys, false);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.imageSelected.url !== this.state.imageSelected.url) {
      const { imagesArr } = this.props;
      const currentImageIndex = this.getIndexOfCurrentImage(nextProps.imageSelected);

      this.setState (
        {
          imageSelected : nextProps.imageSelected,
          currentImageIndex : currentImageIndex
        }
      );
    }
  }

  // handle arrow keys to close the modal dialog
  handleArrowKeys = (event) => {
    const currentImage =
      this.state.imageSelected.url || this.props.imageSelected.url;
    const { imagesArr } = this.props;
    const currentImageIndex = this.getIndexOfCurrentImage(currentImage);

    if(event.keyCode === 37) {
      this.showPreviousImage(currentImage);
    }
    else if(event.keyCode == 39) {
      this.showNextImage(currentImage);
    }
  }

  // handle touchstart for swipe gesture
  handleTouchStart = (event) => {
    console.log('Touch start');
    this.setState ( {touchStartPos : event.changedTouches[0].clientX } );
  }

  // handle touchend for swipe gesture
  handleTouchEnd = (event) => {
    console.log('Touch end');
    const startPos = this.state.touchStartPos;
    const endPos = event.changedTouches[0].clientX;

    if(endPos - startPos > 0) {
      this.showNextImage();
    }
    else {
      this.showPreviousImage();
    }

  }

  // handle touchmove to stop navigation between pages
  handleTouchMove = (event) => {
    event.preventDefault();
    console.log('Touch move');
  }

  // handle display of next image, via arrow key, mouse click or swipe
  showNextImage = () => { console.log('sadsadsadsadsa');
    const currentImage =
      this.state.imageSelected.url || this.props.imageSelected.url;
    const { imagesArr } = this.props;
    const currentImageIndex = this.getIndexOfCurrentImage(currentImage);

    if(currentImageIndex !== -1) {
      if(currentImageIndex + 1 === imagesArr.length) {
        this.setState (
          {
            imageSelected : imagesArr[0],
            currentImageIndex : 0
          }
        );
      }
      else {
        this.setState (
          {
            imageSelected : imagesArr[currentImageIndex + 1],
            currentImageIndex : currentImageIndex + 1
          }
        );
      }
    }
  }



  // Handle back arrow click
  showPreviousImage = () => {
    const currentImage =
      this.state.imageSelected.url || this.props.imageSelected.url;
    const currentImageIndex = this.getIndexOfCurrentImage(currentImage);
    const { imagesArr } = this.props;

    if(currentImageIndex !== -1) {
      if(currentImageIndex - 1 >= 0) {
        this.setState (
          {
            imageSelected : imagesArr[currentImageIndex -1],
            currentImageIndex : currentImageIndex -1
          }
        );
      }
      else {
        this.setState (
          {
            imageSelected : imagesArr[imagesArr.length -1],
            currentImageIndex : imagesArr.length -1
          }
        );
      }
    }
  }

  // Get index of current displayed image from the images arrray
  getIndexOfCurrentImage = (image) => {
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

    const { imagesArr } = this.props;

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
                onClick={this.showPreviousImage}/>
            <div
              className="image_large_placeholder"
              onClick={this.showNextImage}
              onTouchStart={this.handleTouchStart}
              onTouchEnd={this.handleTouchEnd}
              onTouchMove={this.handleMove}
            >
                <img src={this.state.imageSelected.url || this.props.imageSelected.url} className="image"/>
                <span className="image_large_caption">{this.state.imageSelected.caption || this.props.imageSelected.caption}</span>
            </div>
            <img src={"arrow_forward.svg"}
                onClick={this.showNextImage}/>
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
