import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledRegion } from "../css/styledRegion";

import { REGION_LIST } from "../utils/regionData";

const Korea = ({ query, name }) => {
  const navi = useNavigate();

  const handleOnClick = (e) => {
    console.log(name, e.target.className);
    navi("/detail", {
      state: null,
    });
  };

  return (
    <StyledRegion query={query}>
      {REGION_LIST.map((region) => region.name).map((region, idx) => {
        return (
          <div key={`${idx}`} className={region} onClick={handleOnClick} />
        );
      })}
    </StyledRegion>
  );
};

export default Korea;
