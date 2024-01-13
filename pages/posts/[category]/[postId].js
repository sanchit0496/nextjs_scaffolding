import React from 'react';

const postsData = {
  technology: [
    { id: 1, title: 'Exploring a New Programming Paradigm' },
    { id: 2, title: 'Reviewing the Latest Innovative Gadgets' },
  ],
  science: [
    { id: 3, title: 'Recent Breakthroughs in Space Exploration' },
    { id: 4, title: 'Promising Solutions to Address Climate Change' },
  ],
};

export async function getStaticPaths() {
  const paths = [];
  for (const category in postsData) {
    for (const post of postsData[category]) {
      paths.push({
        params: { category, postId: post.id.toString() },
      });
    }
  }
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postsForCategory = postsData[params.category];
  const post = postsForCategory.find((post) => post.id === Number(params.postId));
  return { props: { category: params.category, post } };
}

function Post({ category, post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>Category: {category}</p>
      <p>{post.content}</p> {/* Add your content here */}
    </div>
  );
}

export default Post;
