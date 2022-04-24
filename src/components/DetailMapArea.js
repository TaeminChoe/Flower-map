import React, { useEffect } from "react";
import { StyledWrap } from "../css/styledWrap";
import { StyledBlur } from "../css/styledBlur";
import { StyledMain } from "../css/styledMain";
import { StyledHeader } from "../css/styledHeader";
import { StyledDetailArea } from "../css/styledDetailArea";
import { StyledDetailContent } from "../css/styledDetailContent";

// components

function DetailMapArea() {
  useEffect(() => {
    let container = document.getElementById("map");

    let options = {
      center: new window.kakao.maps.LatLng(35.85133, 127.734086),
      level: 13,
    };

    let map = new window.kakao.maps.Map(container, options);

    console.log("loading kakaomap");
  }, []);

  return (
    <StyledWrap>
      <StyledBlur />
      <StyledMain>
        <StyledDetailArea>
          <StyledHeader>MAP</StyledHeader>
          <StyledDetailContent>
            <div id="map" style={{ width: "100%", height: "100%" }} />
          </StyledDetailContent>
        </StyledDetailArea>
      </StyledMain>
    </StyledWrap>
  );
}

export default DetailMapArea;
