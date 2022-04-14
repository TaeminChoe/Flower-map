import React, { useRef } from "react";
import MediaQuery, { useMediaQuery } from "react-responsive";
// components
import Header from "../components/header";
// import FlowerSlide from "../components/flowerSlide";
import MapArea from "../components/mapArea";
import SlideSlick from "../components/slideSlick";
//css
import { StyledWrap } from "../css/styledWrap";
import { StyledMain } from "../css/styledMain";
import { StyledBlur } from "../css/styledBlur";

function ContentPage() {
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
        <StyledBlur query={query.current} />
        <StyledMain query={query.current}>
          <Header query={query.current} />
          <MapArea query={query.current} />
        </StyledMain>
      </StyledWrap>
    </>
  );
}

export default ContentPage;
