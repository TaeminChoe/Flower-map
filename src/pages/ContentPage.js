import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
// components
import Header from "../components/Header";
import MapArea from "../components/MapArea";
import Loading from "./Loading";
import DetailPage from "./DetailPage";

//css
import { StyledWrap } from "../css/StyledWrap";
import { StyledMain } from "../css/StyledMain";
import { StyledBlur } from "../css/StyledBlur";

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
  const [loading, setLoading] = useState(false);

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
