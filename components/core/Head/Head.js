import React from "react";
import NextHead from "next/head";
import { SocialProfileJsonLd } from "next-seo";

import SOCIAL_PROFILES from "@config/social-profiles";

export default function Head() {
  return (
    <NextHead>
      <SocialProfileJsonLd
        type="Person"
        name="Chris Grabiński"
        url="https://chrisgrabinski.com"
        sameAs={SOCIAL_PROFILES}
      />
    </NextHead>
  );
}
