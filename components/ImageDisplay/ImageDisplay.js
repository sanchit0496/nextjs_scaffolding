import React from 'react';
import Image from 'next/image';

const ImageDisplay = ({ imageUrls }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {imageUrls.map((url, index) => (
        <div key={index} className="shadow-lg rounded-md overflow-hidden">
          <Image
            src={url}
            alt={`Image ${index}`}
            width={500}
            height={300}
            layout="responsive"
            objectFit="cover" // Adjust as needed to 'contain' or 'cover'
            className="transition-opacity duration-300 hover:opacity-90"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageDisplay;
