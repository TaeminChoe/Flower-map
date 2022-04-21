import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledRegion } from "../css/StyledRegion";

const Korea = ({ query, name }) => {
  const REGION_LIST = [
    "busan",
    "chungbuk",
    "chungnam",
    "daegu",
    "daejeon",
    "gangwon",
    "gwangju",
    "gyeongbuk",
    "gyeonggi",
    "gyeongnam",
    "incheon",
    "jeju",
    "jeonbuk",
    "jeonnam",
    "sejong",
    "seoul",
    "ulsan",
  ];
  const navi = useNavigate();

  const handleOnClick = (e) => {
    console.log(name, e.target.className);
    navi("/detail", {
      state: null,
    });
  };

  return (
    <StyledRegion query={query}>
      {REGION_LIST.map((region, idx) => {
        return (
          <div key={`${idx}`} className={region} onClick={handleOnClick} />
        );
      })}
    </StyledRegion>
  );
};

export default Korea;
