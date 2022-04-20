import React from "react";
import { StyledMapArea } from "../css/styledMapArea";
import SlideFlower from "./slideFlower";

function MapArea({ query }) {
  return (
    <StyledMapArea query={query}>
      <SlideFlower query={query} />
    </StyledMapArea>
  );
}

export default MapArea;
