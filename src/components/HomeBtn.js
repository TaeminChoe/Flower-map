import { useNavigate } from "react-router-dom";
import { StyledBtn } from "../css/StyledBtn";
import { AiFillHome } from "../utils/icons";

function HomeBtn() {
  const navi = useNavigate();

  return (
    <StyledBtn onClick={() => navi("/")}>
      <AiFillHome />
    </StyledBtn>
  );
}

export default HomeBtn;
