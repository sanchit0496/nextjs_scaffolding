import React from 'react';
import Image from 'next/image';

const ImageDisplay = ({ imageUrls }) => {
  return (
    <div>
      {imageUrls.map((url, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <Image src={url} alt={`Image ${index}`} width={500} height={300} />
        </div>
      ))}
    </div>
  );
};

export default ImageDisplay;
