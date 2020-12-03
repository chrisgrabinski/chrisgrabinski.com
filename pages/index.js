import React from "react";
import { NextSeo } from "next-seo";

import { Layout } from "@components/core";

import { Hero } from "@components/pages/home";

export default function IndexPage() {
  return (
    <>
      <NextSeo title="Chris Grabiński ・ Frontend Engineer" />
      <Layout>
        <Hero
          title={
            <>
              Chris
              <br /> Grabiński
            </>
          }
          description="Working with product&nbsp;teams to deliver beautiful, user‑friendly,
          and goal‑driven web&nbsp;experiences."
        />
      </Layout>
    </>
  );
}
