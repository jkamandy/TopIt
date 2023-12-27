import React from 'react';

const ImageCarouselItem = ({ imageUrl, caption = ''}) => (
  <div>
    <img
      src={imageUrl}
      alt={'NOT WORKING'}
      style={{ width: '100%', height: 'auto' }}
    />
    {caption && <p>{caption}</p>}
  </div>
);

export default ImageCarouselItem;
