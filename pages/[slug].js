// pages/[slug].js
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SlugPage = ({ post }) => {
  // Get the router instance
  const router = useRouter();

  // If the page has not been generated, this will be displayed
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // Render post content
  return (
    <article className="prose lg:prose-xl mx-auto mt-5">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link href="/">
        <span className="text-blue-600 hover:underline">Back to home</span>
      </Link>
    </article>
  );
};

// This function gets called at build time on server-side.
export async function getStaticPaths() {
  // Array of known paths for demonstration purposes
  const paths = [
    { params: { slug: 'first-post' } },
    { params: { slug: 'second-post' } },
    // More paths...
  ];

  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // Here's an example of a hardcoded object
  const posts = {
    'first-post': { title: 'First Post', content: 'This is the first post, generated using slug page.' },
    'second-post': { title: 'Second Post', content: 'This is the second post, generated using slug page.' },
    // More posts...
  };

  // Get the post data based on slug
  const post = posts[params.slug];

  return {
    props: {
      post,
    },
  };
}

export default SlugPage;
