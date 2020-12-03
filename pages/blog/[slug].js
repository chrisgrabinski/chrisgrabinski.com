import { getPaths, getEntry } from "@lib/contentful";

import React from "react";
import PropTypes from "prop-types";

export default function BlogPostPage({ data }) {
  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  );
}

BlogPostPage.propTypes = {
  data: PropTypes.object.isRequired,
};

const CONTENT_MODEL = "blogPost";

export async function getStaticProps({ params: { slug } }) {
  const data = await getEntry(CONTENT_MODEL, slug, undefined, "title");

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getPaths(CONTENT_MODEL);

  return {
    paths,
    fallback: false,
  };
}
