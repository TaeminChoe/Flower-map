import { useEffect, useState } from "react";
// components
import Header from "../components/Header";
import MapArea from "../components/MapArea";
import Loading from "./Loading";

//css
import { StyledWrapMain } from "../css/StyledWrapMain";
import { StyledMain } from "../css/StyledMain";

function ContentPage() {
  const [loading, setLoading] = useState(false);

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
      <StyledWrapMain>
        <StyledMain>
          <Header />
          <MapArea />
        </StyledMain>
      </StyledWrapMain>
    </>
  );
}

export default ContentPage;
