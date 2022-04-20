import DetailMapArea from "../components/DetailMapArea";
import DetailWeatherArea from "../components/DetailWeatherArea";

function DetailPage({ query }) {
  return (
    <>
      <DetailMapArea />
      <DetailWeatherArea query={query} />
    </>
  );
}

export default DetailPage;
