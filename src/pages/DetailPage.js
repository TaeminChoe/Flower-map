import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
// components
import DetailMapArea from "../components/DetailMapArea";
import DetailWeatherArea from "../components/DetailWeatherArea";

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
      <DetailMapArea />
      <DetailWeatherArea query={query.current} />
    </>
  );
}

export default DetailPage;
