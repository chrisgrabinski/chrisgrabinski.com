import React from "react";
import PropTypes from "prop-types";

import { Page, Main } from "./Layout.styles";

export default function Layout({ children }) {
  return (
    <>
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
