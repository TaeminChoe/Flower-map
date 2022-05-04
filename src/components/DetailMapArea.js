import { useRecoilValue } from "recoil";
//css
import { StyledHeader } from "../css/StyledHeader";
import { StyledDetailArea } from "../css/StyledDetailArea";
import { StyledDetailContent } from "../css/StyledDetailContent";
//recoil
import { regionState } from "../atom";
//util
import { Map } from "react-kakao-maps-sdk";

function DetailMapArea() {
  const region = useRecoilValue(regionState);

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
