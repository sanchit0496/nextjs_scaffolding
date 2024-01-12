import React from 'react';
import ImageDisplay from '../components/ImageDisplay/ImageDisplay';

const gallery = () => {
  // Example: Array of 100 image URLs
  const imageUrls = new Array(100).fill(null).map((_, i) => `https://via.placeholder.com/500x300?text=Image+${i + 1}`);
  console.log('imageUrls', imageUrls)
  return (
    <div>
      <h1>Image Gallery with Lazy Loading</h1>
      <ImageDisplay imageUrls={imageUrls} />
    </div>
  );
};

export default gallery;
