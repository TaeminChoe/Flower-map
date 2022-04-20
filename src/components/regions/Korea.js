import React from "react";
import styled from "styled-components";

import Seoul from "./Seoul";
import Gangwon from "./Gangwon";
import GyeongGi from "./Gyeonggi";
import Chungbuk from "./Chungbuk";
import Chungnam from "./Chungnam";
import Jeonbuk from "./Jeonbuk";
import Jeonnam from "./Jeonnam";
import Jeju from "./Jeju";
import Gyeongnam from "./Gyeongnam";
import Gyeongbuk from "./Gyeongbuk";
import Ulsan from "./Ulsan";
import Daegu from "./Daegu";
import Daejeon from "./Daejeon";
import Sejong from "./Sejong";
import Busan from "./Busan";
import Daejun from "./Daejeon";

const RegionWrapper = styled.div`
  background-color: #333;
  width: 100%;
  height: 150vh;
  position: relative;
`;

const Korea = () => {
  return (
    <RegionWrapper>
      <GyeongGi />
      <Seoul />
      <Gangwon />
      <Chungbuk />
      <Chungnam />
      <Sejong />
      <Daejeon />
      <Gyeongbuk />
      <Daegu />
      <Jeonbuk />
      <Gyeongnam />
      <Jeonnam />
      <Jeju />
    </RegionWrapper>
  );
};

export default Korea;
