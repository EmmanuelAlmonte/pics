import React from 'react';

const ImageList = (props) => {
  let imageArray = props.images
    const images = imageArray.map(({alt_description, id, urls}) => {
      return <img key={id} src={urls.regular} alt={alt_description}/>
    })
  return <div>{images}</div>
}

export default ImageList;