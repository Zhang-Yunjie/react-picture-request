import React from 'react';
import './ImageList.css';

class ImageList extends React.Component {
    render() {
        const images = this.props.images.map(image => 
        <img alt={image.description} key={image.id} src={image.urls.regular} />);

        return <div className="image-list"> {images} </div>;
    }
}

export default ImageList;