import React from "react";
import { StyledMapArea } from "../css/StyledMapArea";
import SlideFlower from "./SlideFlower";

function MapArea({ query }) {
  return (
    <StyledMapArea query={query}>
      <SlideFlower query={query} />
    </StyledMapArea>
  );
}

export default MapArea;
