import { useEffect } from "react";
// components
import Header from "../components/Header";
import MapArea from "../components/MapArea";
import Loading from "./Loading";
import { loadingState } from "../atom";
import { useRecoilState } from "recoil";

//css
import { StyledWrapMain } from "../css/StyledWrapMain";
import { StyledMain } from "../css/StyledMain";

function ContentPage() {
  const [loading, setLoading] = useRecoilState(loadingState);

  /** 로딩 화면 지연 */
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <StyledWrapMain>
      <StyledMain>
        <Header />
        <MapArea />
      </StyledMain>
    </StyledWrapMain>
  );
}

export default ContentPage;
