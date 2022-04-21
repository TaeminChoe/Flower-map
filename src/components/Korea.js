import React from "react";
import styled, { css } from "styled-components";
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
  const handleOnClick = (e) => {
    console.log(name, e.target.className);
  };

  return (
    <StyledRegion query={query}>
      {REGION_LIST.map((region) => {
        return <div className={region} onClick={handleOnClick} />;
      })}
    </StyledRegion>
  );
};

export default Korea;
