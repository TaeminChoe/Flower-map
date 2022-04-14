import React, { useEffect, useRef, useState } from "react";
import MediaQuery, { useMediaQuery } from "react-responsive";
// components
import Header from "../components/header";
import MapArea from "../components/mapArea";
import Loading from "./Loading";
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
  const [loading, setLoading] = useState(true);

  if (isPc) {
    query.current = "pc";
  } else if (isTablet) {
    query.current = "tablet";
  } else if (isMobile) {
    query.current = "mobile";
  }

  /** 로딩 화면 지연 */
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <Loading />;
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
