import React from "react";
import PropTypes from "prop-types";

import { Wrapper, Inner } from "./Container.styles";

export default function Container({ children }) {
  return (
    <Wrapper>
      <Inner>{children}</Inner>
    </Wrapper>
  );
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};
