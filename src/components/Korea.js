import { useNavigate } from "react-router-dom";
import { StyledRegion } from "../css/StyledRegion";

import { REGION_LIST } from "../utils/regionData";

const Korea = ({ name }) => {
  const navi = useNavigate();

  const handleOnClick = (e) => {
    const id = REGION_LIST.find(
      (region) => region.name === e.target.className
    ).id;
    navi(`/detail/${id}`);
  };

  return (
    <StyledRegion>
      {REGION_LIST.map((region) => region.name).map((region, idx) => {
        return (
          <div key={`${idx}`} className={region} onClick={handleOnClick} />
        );
      })}
    </StyledRegion>
  );
};

export default Korea;
