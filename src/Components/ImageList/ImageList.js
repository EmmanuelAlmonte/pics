import './ImageList.css'
import React from 'react';
import ImageCard from '../ImageCard/ImageCard';

const ImageList = (props) => {
  let imageArray = props.images
    const images = imageArray.map((image) => {
      return <ImageCard key={image.id} image={image} />
    })
  return <div className="image-list">{images}</div>
}

export default ImageList;