import { useEffect, useState } from "react";
// components
import Header from "../components/Header";
import MapArea from "../components/MapArea";
import Loading from "./Loading";

//css
import { StyledWrap } from "../css/StyledWrap";
import { StyledMain } from "../css/StyledMain";
import { StyledBlur } from "../css/StyledBlur";

function ContentPage() {
  const [loading, setLoading] = useState(true);

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
        <StyledBlur />
        <StyledMain>
          <Header />
          <MapArea />
        </StyledMain>
      </StyledWrap>
    </>
  );
}

export default ContentPage;
