import { useRecoilValue } from "recoil";
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
//css
import { StyledHeader } from "../css/StyledHeader";
import { StyledDetailArea } from "../css/StyledDetailArea";
import { StyledDetailContent } from "../css/StyledDetailContent";
//recoil
import { regionState } from "../atom";
//util

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
          >
            {region.places.map((place) => {
              return (
                <>
                  <MapMarker
                    key={place.id}
                    position={{ lat: place.lat, lng: place.lng }}
                    image={{
                      src: `${process.env.PUBLIC_URL}/flower.png`,
                      size: {
                        width: 64,
                        height: 69,
                      },
                    }}
                  />
                  <CustomOverlayMap
                    position={{ lat: place.lat, lng: place.lng }}
                    style={{
                      width: "100%",
                      height: "55px",
                      background: "rgba(255, 255, 255, 0.8)",
                      borderRadius: "10px",
                      fontFamily: "Haettenschweiler",
                      fontSize: "1.2rem",
                      fontWeight: "600",
                      marginTop: "25%",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        color: "#625c57",
                        padding: "20px",
                      }}
                    >
                      {place.name}
                    </div>
                  </CustomOverlayMap>
                </>
              );
            })}
          </Map>
        ) : null}
      </StyledDetailContent>
    </StyledDetailArea>
  );
}

export default DetailMapArea;
