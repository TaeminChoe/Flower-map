import React from "react";
import { StyledMapArea } from "../css/styledMapArea";
import SlideSlick from "../components/slideSlick";

function MapArea({ query }) {
  return (
    <StyledMapArea query={query}>
      <SlideSlick query={query} />
    </StyledMapArea>
  );
}

export default MapArea;
