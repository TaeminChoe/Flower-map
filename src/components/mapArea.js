import React from "react";
import { StyledMapArea } from "../css/styledMapArea";

// import map from "../images/map.png";

function MapArea({ query }) {
  return (
    <StyledMapArea query={query}>
      {/* <StyledImage src={map} /> */}
    </StyledMapArea>
  );
}

export default MapArea;
