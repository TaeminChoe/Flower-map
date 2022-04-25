import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { StyledWrap } from "../css/styledWrap";
import { StyledBlur } from "../css/styledBlur";
import { StyledMain } from "../css/styledMain";
import { StyledHeader } from "../css/styledHeader";
import { StyledDetailArea } from "../css/styledDetailArea";
import { StyledDetailContent } from "../css/styledDetailContent";

import { REGION_LIST } from "../utils/regionData";
import { Map, MapMarker } from "react-kakao-maps-sdk";

// components

function DetailMapArea() {
  const location = useLocation();
  const [region, setRegion] = useState({});
  const [map, setMap] = useState();

  useEffect(() => {
    const id = location.pathname.split("/")[2];
    setRegion(REGION_LIST.find((region) => region.id === Number(id)));
  }, []);

  useEffect(() => {
    if (!map) return;
    const ps = new window.kakao.maps.services.Places();

    ps.keywordSearch("이태원 맛집", (data, status, _pagination) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const bounds = new window.kakao.maps.LatLngBounds();
        console.log(window.kakao.maps.getBounds());
        console.log(bounds);
      }
    });
  }, [map]);

  return (
    <StyledWrap>
      <StyledBlur />
      <StyledMain>
        <StyledDetailArea>
          <StyledHeader>MAP</StyledHeader>
          <StyledDetailContent>
            {/* <div id="map" style={{ width: "100%", height: "100%" }} /> */}
            <Map
              center={{ lat: 33.5563, lng: 126.79581 }}
              style={{ width: "100%", height: "100%" }}
              onCreate={setMap}
            >
              {/* <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
                <div style={{ color: "#000" }}>Hello World!</div>
              </MapMarker> */}
            </Map>
          </StyledDetailContent>
        </StyledDetailArea>
      </StyledMain>
    </StyledWrap>
  );
}

export default DetailMapArea;
