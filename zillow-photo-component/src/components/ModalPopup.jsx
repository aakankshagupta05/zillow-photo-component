import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ModalPopup extends Component {


  showNextImage(currentImage) {

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
          onClick={this.props.onClose}>
          X
        </button>
          <div
            className="image_large_placeholder"
            onClick={this.showNextImage.bind(this, this.props.imageSelected)}>
              <img src={this.props.imageSelected.url} className="image"/>
              <span className="image_large_caption">{this.props.imageSelected.caption}</span>
          </div>
        </div>
      </div>
    );
  }
}

ModalPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default ModalPopup;
