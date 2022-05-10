import styled from "styled-components";
const StyledBtn = styled.div`
  width: 95%;
  height: 50px;
  padding: 0.5rem;
  background-color: rgba(255, 255, 255, 0.5);
  transition: 200ms ease-out;
  text-align: center;
  line-height: 50px;
  border-radius: 10px;
  margin-bottom: 1.8%;
  color: white;
  font-size: 3rem;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
  @media screen and (min-width: 1024px) {
    width: 100px;
    padding: 0;
    align-self: flex-end;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 1rem;
  }
  @media screen and (max-width: 767px) {
  }
`;
export { StyledBtn };
