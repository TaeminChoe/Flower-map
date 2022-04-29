// css
import { StyledHeader } from "../css/StyledHeader";
import { StyledDetailArea } from "../css/StyledDetailArea";
import { StyledDetailContent } from "../css/StyledDetailContent";
// components
import SlideWeather from "../components/SlideWeather";

function DetailWeatherArea() {
  return (
    <StyledDetailArea>
      <StyledHeader>WEATHER</StyledHeader>
      <StyledDetailContent>
        <SlideWeather />
      </StyledDetailContent>
    </StyledDetailArea>
  );
}
export default DetailWeatherArea;
