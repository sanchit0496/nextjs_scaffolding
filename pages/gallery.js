import React from 'react';
import Head from 'next/head';
import ImageDisplay from '../components/ImageDisplay/ImageDisplay';

const gallery = () => {
  // Example: Array of 100 image URLs
  const imageUrls = new Array(100).fill(null).map((_, i) => `https://via.placeholder.com/500x300?text=Image+${i + 1}`);
  return (
    <div>
      <Head>
      <title>Page Title</title>
      <meta name="description" content="Description of your page" />
      <meta name="keywords" content="keyword1, keyword2" />
      <link rel="icon" href="/favicon.ico" />
      {/* Additional tags as needed */}
    </Head>
      <h1>Image Gallery with Lazy Loading</h1>
      <ImageDisplay imageUrls={imageUrls} />
    </div>
  );
};

export default gallery;
