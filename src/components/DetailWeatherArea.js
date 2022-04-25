// css
import { StyledWrap } from "../css/StyledWrap";
import { StyledBlur } from "../css/StyledBlur";
import { StyledMain } from "../css/StyledMain";
import { StyledHeader } from "../css/StyledHeader";
import { StyledDetailArea } from "../css/StyledDetailArea";
import { StyledDetailContent } from "../css/StyledDetailContent";
// components
import SlideWeather from "../components/SlideWeather";

function DetailWeatherArea({ query }) {
  return (
    <StyledWrap>
      <StyledBlur />
      <StyledMain>
        <StyledDetailArea>
          <StyledHeader>WEATHER</StyledHeader>
          <StyledDetailContent>
            <SlideWeather query={query} />
          </StyledDetailContent>
        </StyledDetailArea>
      </StyledMain>
    </StyledWrap>
  );
}
export default DetailWeatherArea;
