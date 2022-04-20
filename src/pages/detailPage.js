import React, { useRef } from "react";
import styled, { css } from "styled-components";
import { useMediaQuery } from "react-responsive";
import SlideWeather from "../components/SlideWeather";

import { StyledWrap } from "../css/StyledWrap";
import { StyledBlur } from "../css/StyledBlur";
import { StyledMain } from "../css/StyledMain";
import { StyledHeader } from "../css/StyledHeader";

const StyledDetailArea = styled.section`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  padding: 1rem 0;
  border-radius: 10px;
`;

const StyledDetailContent = styled.article`
  width: 85%;
  height: 70vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  .weather-icon {
    font-size: 16rem;
  }
`;
function DetailPage() {
  const isPc = useMediaQuery({
    query: "(min-width:1024px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width: 1023px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const query = useRef();

  if (isPc) {
    query.current = "pc";
  } else if (isTablet) {
    query.current = "tablet";
  } else if (isMobile) {
    query.current = "mobile";
  }

  return (
    <>
      <StyledWrap>
        <StyledBlur />
        <StyledMain>
          <StyledDetailArea>
            <StyledHeader>MAP</StyledHeader>
            <StyledDetailContent></StyledDetailContent>
          </StyledDetailArea>
        </StyledMain>
      </StyledWrap>
      <StyledWrap>
        <StyledBlur />
        <StyledMain>
          <StyledDetailArea>
            <StyledHeader>WEATHER</StyledHeader>
            <StyledDetailContent>
              <SlideWeather></SlideWeather>
            </StyledDetailContent>
          </StyledDetailArea>
        </StyledMain>
      </StyledWrap>
    </>
  );
}

export default DetailPage;
