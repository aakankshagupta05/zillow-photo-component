import React, { Component } from 'react';
import ModalPopup from './ModalPopup';

const images = [
  {url:"https://picsum.photos/401/500", caption: "image #1"},
  {url:"https://picsum.photos/402/500", caption: "image #2"},
  {url:"https://picsum.photos/403/500", caption: "image #3"},
  {url:"https://picsum.photos/440/500", caption: "image #4"},
  {url:"https://picsum.photos/405/500", caption: "image #5"},
  {url:"https://picsum.photos/420/500", caption: "image #6"},
  {url:"https://picsum.photos/407/500", caption: "image #7"},
  {url:"https://picsum.photos/408/500", caption: "image #8"},
  {url:"https://picsum.photos/430/500", caption: "image #9"},
  {url:"https://picsum.photos/409/500", caption: "image #10"},
  {url:"https://picsum.photos/411/500", caption: "image #11"},
  {url:"https://picsum.photos/412/500", caption: "image #12"},
  {url:"https://picsum.photos/413/500", caption: "image #13"},
  {url:"https://picsum.photos/414/500", caption: "image #14"},
  {url:"https://picsum.photos/415/500", caption: "image #15"},
  {url:"https://picsum.photos/416/500", caption: "image #16"}
];

class PhotoGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      imageSelected: {}};
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleEsc, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleEsc, false);
  }

  // Open the modal dialog with selected image
  showImage(imageSelected) {
    this.toggleModal(true);
    this.setState ( { imageSelected })
  }

  // handle esc key to close the modal dialog
  handleEsc = (event) => {
    if(event.keyCode === 27) {
      this.toggleModal(false);
    }
  }

  // toggle display of modal dialog
  toggleModal = (isOpen) => {
    this.setState({
      isOpen
    });
    if(!isOpen) {
      this.setState ( { imageSelected: {} })
    }
  }

  render () {
    return (
      <div className="image_container">
        {images.map(image =>
          <div
            className="image_placeholder"
            onClick={this.showImage.bind(this, image)}>
              <img src={image.url} className="image"/>
              <span className="image_caption">{image.caption}</span>
          </div>
        )}
        <ModalPopup
          show={this.state.isOpen}
          onClose={this.toggleModal}
          imagesArr={images}
          imageSelected={this.state.imageSelected}>
          Here's some content for the modal
        </ModalPopup>
      </div>
    )
  }
}

export default PhotoGallery;
