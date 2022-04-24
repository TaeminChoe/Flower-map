// css
import { StyledWrap } from "../css/styledWrap";
import { StyledBlur } from "../css/styledBlur";
import { StyledMain } from "../css/styledMain";
import { StyledHeader } from "../css/styledHeader";
import { StyledDetailArea } from "../css/styledDetailArea";
import { StyledDetailContent } from "../css/styledDetailContent";
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
