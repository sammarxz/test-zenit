/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
import React from "react";

import Reset from "./reset";
import Root from "./root";
import Typography from "./typography";
import Helpers from "./helpers";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Reset />
      <Root />
      <Typography />
      <Helpers />

      {children}
    </>
  );
};

export { Layout };
