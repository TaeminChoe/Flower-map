import DetailMapArea from "../components/DetailMapArea";
import DetailWeatherArea from "../components/DetailWeatherArea";
import { StyledWrap } from "../css/StyledWrap";
import { StyledBlur } from "../css/StyledBlur";
import { StyledMain } from "../css/StyledMain";

function DetailPage() {
  return (
    <StyledWrap>
      <StyledBlur />
      <StyledMain>
        <DetailMapArea />
        <DetailWeatherArea />
      </StyledMain>
    </StyledWrap>
  );
}

export default DetailPage;
