import React, { FC } from "react";
import { styled } from "../../stitches.config";

interface Props {}

const Container = styled("div", {
  mx: "auto",
  px: "1rem",
  width: "100%",
  "@sm": {
    padding: 0,
    maxWidth: "540px",
  },
  "@md": { maxWidth: "720px" },
  "@lg": { maxWidth: "960px" },
  "@xl": { maxWidth: "1140px" },
  "@xxl": { maxWidth: "1320px" },
  variants: {
    fluid: {
      true: {
        width: "100%",
        maxWidth: "100%",
      },
    },
  },
});

export default Container;
