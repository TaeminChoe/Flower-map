import React from "react";
import { StyledWrap } from "../css/StyledWrap";
import { StyledBlur } from "../css/StyledBlur";
import { StyledMain } from "../css/StyledMain";
import { StyledHeader } from "../css/StyledHeader";
import { StyledDetailArea } from "../css/StyledDetailArea";
import { StyledDetailContent } from "../css/StyledDetailContent";

function DetailMapArea() {
  return (
    <StyledWrap>
      <StyledBlur />
      <StyledMain>
        <StyledDetailArea>
          <StyledHeader>MAP</StyledHeader>
          <StyledDetailContent></StyledDetailContent>
        </StyledDetailArea>
      </StyledMain>
    </StyledWrap>
  );
}

export default DetailMapArea;
