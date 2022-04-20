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
import Sejong from "./Sejong";
import Busan from "./Busan";
import Daejeon from "./Daejeon";
import Incheon from "./Incheon";

const RegionWrapper = styled.div`
  width: auto;
  height: 60vh;
  margin: 50px;
  position: relative;
`;

const Korea = () => {
  return (
    <RegionWrapper>
      <GyeongGi />
      <Seoul />
      <Incheon />
      <Gangwon />
      <Chungbuk />
      <Chungnam />
      <Daejeon />
      <Sejong />
      <Daejeon />
      <Gyeongbuk />
      <Daegu />
      <Jeonbuk />
      <Gyeongnam />
      <Ulsan />
      <Busan />
      <Jeonnam />
      <Jeju />
    </RegionWrapper>
  );
};

export default Korea;
