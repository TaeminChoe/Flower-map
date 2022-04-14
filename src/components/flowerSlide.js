import React from "react";
import { StyledSlide } from "../css/styledSlide";

function FlowerSlide({ query }) {
  return (
    <>
      <StyledSlide query={query}>
        <li></li>
        <li></li>
        <li></li>
      </StyledSlide>
    </>
  );
}

export default FlowerSlide;
