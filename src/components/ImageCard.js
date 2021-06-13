import React from 'react';

class ImageClass extends React.Component {
    render() {
        const {description, urls} = this.props.image;
        return (
            <div>
                <img
                    alt={description}
                    src={urls.regular}
                    />
            </div>
        );
    }
}

export default ImageClass;