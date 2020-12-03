import React from "react";
import PropTypes from "prop-types";

import { Head } from "@components/core";

import { Page, Main } from "./Layout.styles";

export default function Layout({ children }) {
  return (
    <>
      <Head />
      <Page>
        <Main>{children}</Main>
      </Page>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};
