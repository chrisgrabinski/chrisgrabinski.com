import React from "react";
import { NextSeo } from "next-seo";

import { Layout } from "@components/core";

export default function IndexPage() {
  return (
    <>
      <NextSeo title="Chris Grabiński ・ Frontend Engineer" />
      <Layout>Homepage</Layout>
    </>
  );
}
