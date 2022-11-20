import React from "react";
import NextHead from "next/head";
import { SocialProfileJsonLd } from "next-seo";

import SOCIAL_PROFILES from "@config/social-profiles";

export default function Head() {
  return (
    <>
      <NextHead>
        <link rel="me" href="https://mastodon.social/@chrisgrabinski" />
      </NextHead>
      <SocialProfileJsonLd
        type="Person"
        name="Chris Grabiński"
        url="https://chrisgrabinski.com"
        sameAs={SOCIAL_PROFILES}
      />
    </>
  );
}
