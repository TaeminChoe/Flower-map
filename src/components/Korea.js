import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledRegion } from "../css/StyledRegion";
import { useSetRecoilState } from "recoil";
//recoil
import { regionState } from "../atom";
//utils
import { REGION_LIST } from "../utils/regionData";

function Korea({ name }) {
  // console.log(name);
  const setRegion = useSetRecoilState(regionState);
  const navi = useNavigate();

  /*hover event :: 지역이름 호버시 해당 지역만 색 변화가 있게 */
  const hoverEvent = (e, boolean) => {
    boolean
      ? (e.target.previousSibling.style.backgroundColor = "white")
      : (e.target.previousSibling.style.backgroundColor = "#eee");
  };

  /** 맵 선택시 className으로 구분 */
  const mapClick = (e) => {
    const regionId = REGION_LIST.find(
      (region) => region.name === e.target.className
    ).id;
    // console.log("id", regionId);
    navi(`/detail/${regionId}`);
    setRegion(REGION_LIST.find((region) => region.id === Number(regionId)));
    // console.log(REGION_LIST.find((region) => region.id === Number(regionId)));
  };

  /** 지역이름 선택시 id로 구분 */
  const stringClick = (e) => {
    const regionId = REGION_LIST.find(
      (region) => region.name === e.target.id
    ).id;
    navi(`/detail/${regionId}`);
    setRegion(REGION_LIST.find((region) => region.id === Number(regionId)));
  };

  return (
    <StyledRegion>
      {REGION_LIST &&
        REGION_LIST.map((region) => {
          // console.log(region.flowers, name);
          // name과 region.flowers의 값(벚꽃, 개나리, 진달래)이 같은 것에 개화날짜 뿌려주어야 함
          return (
            <React.Fragment key={region.id + "_map"}>
              <div className={region.name} onClick={mapClick}></div>
              <p
                id={region.name}
                className={region.name + "-string region-string"}
                onClick={stringClick}
                onMouseEnter={(e) => hoverEvent(e, true)}
                onMouseLeave={(e) => hoverEvent(e, false)}
              >
                {region.korName + " 3.25"}
              </p>
            </React.Fragment>
          );
        })}
    </StyledRegion>
  );
}

export default Korea;
