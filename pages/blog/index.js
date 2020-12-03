import { getEntries } from "@lib/contentful";

import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import { Layout } from "@components/core";

export default function BlogIndexPage({ posts }) {
  return (
    <Layout>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.sys.id}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

BlogIndexPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
};

export async function getStaticProps() {
  const posts = await getEntries("blogPost", "title slug");

  return {
    props: {
      posts,
    },
  };
}
