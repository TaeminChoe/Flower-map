import { useNavigate } from "react-router-dom";
import { StyledRegion } from "../css/StyledRegion";
import { useSetRecoilState } from "recoil";
//recoil
import { regionState } from "../atom";
//utils
import { REGION_LIST } from "../utils/regionData";

function Korea() {
  const setRegion = useSetRecoilState(regionState);
  const navi = useNavigate();

  const handleOnClick = (e) => {
    const id = REGION_LIST.find(
      (region) => region.name === e.target.className
    ).id;
    navi(`/detail/${id}`);
    setRegion(REGION_LIST.find((region) => region.id === Number(id)));
  };

  return (
    <StyledRegion>
      {REGION_LIST.map((region) => {
        return (
          <div
            key={region.id}
            className={region.name}
            onClick={handleOnClick}
          />
        );
      })}
    </StyledRegion>
  );
}

export default Korea;
