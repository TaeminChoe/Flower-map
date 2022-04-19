import React from "react";
import { StyledMapArea } from "../css/StyledMapArea";
import SlideSlick from "./SlideSlick";

function MapArea({ query }) {
  return (
    <StyledMapArea query={query}>
      <SlideSlick query={query} />
    </StyledMapArea>
  );
}

export default MapArea;
