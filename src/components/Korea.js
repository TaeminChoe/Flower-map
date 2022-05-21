import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledRegion } from "../css/StyledRegion";
import { useSetRecoilState } from "recoil";
//recoil
import { regionState } from "../atom";
//utils
import { REGION_LIST } from "../utils/regionData";

function Korea({ name }) {
  const setRegion = useSetRecoilState(regionState);
  const navi = useNavigate();
  const [hover, setHover] = useState(0);

  /*hover event :: 지역이름 호버시 해당 지역만 색 변화가 있게 */
  const hoverEvent = (e, id, boolean) => {
    setHover(boolean ? id : 0);
  };

  /** 맵 선택시 className으로 구분 */
  const mapClick = (e) => {
    const region = REGION_LIST.find(
      (region) => region.name === e.target.className.split(" ")[0]
    );
    navi(`/detail/${region.id}`);
    setRegion(region);
  };

  /** 지역이름 선택시 id로 구분 */
  const stringClick = (e) => {
    const region = REGION_LIST.find((region) => region.name === e.target.id);
    navi(`/detail/${region.id}`);
    setRegion(region);
  };

  return (
    <StyledRegion>
      {REGION_LIST &&
        REGION_LIST.map((region) => {
          const flowerDate = region.flowers?.find(
            (date) => Object.keys(date) == name
          );
          //name이랑 같을때는 찾음 -> 객체형태 파싱해야함
          return (
            <React.Fragment key={region.id + "_map"}>
              <div
                className={`${region.name} ${
                  hover === region.id ? "hover" : ""
                }`}
                onClick={mapClick}
              ></div>
              <p
                id={region.name}
                className={region.name + "-string region-string"}
                onClick={stringClick}
                onMouseEnter={(e) => hoverEvent(e, region.id, true)}
                onMouseLeave={(e) => hoverEvent(e, region.id, false)}
              >
                {region.korName}
                {flowerDate && flowerDate[name]}
              </p>
            </React.Fragment>
          );
        })}
    </StyledRegion>
  );
}

export default Korea;
