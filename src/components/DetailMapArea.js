import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
//css
import { StyledHeader } from "../css/StyledHeader";
import { StyledDetailArea } from "../css/StyledDetailArea";
import { StyledDetailContent } from "../css/StyledDetailContent";
//util
import { REGION_LIST } from "../utils/regionData";
import { Map } from "react-kakao-maps-sdk";

function DetailMapArea() {
  const location = useLocation();
  const [region, setRegion] = useState();

  useEffect(() => {
    const id = location.pathname.split("/")[2];
    setRegion(REGION_LIST.find((region) => region.id === Number(id)));
  }, []);

  if (region) {
    // console.log(region);
  }

  return (
    <StyledDetailArea>
      <StyledHeader>MAP</StyledHeader>
      <StyledDetailContent>
        {region ? (
          <Map
            center={{ lat: region.lat, lng: region.lng }}
            level={region.level}
            style={{ width: "100%", height: "100%" }}
            // onCreate={setMap}
          >
            {/* <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
                <div style={{ color: "#000" }}>Hello World!</div>
              </MapMarker> */}
          </Map>
        ) : null}
      </StyledDetailContent>
    </StyledDetailArea>
  );
}

export default DetailMapArea;
