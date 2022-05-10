import styled from "styled-components";
import loFlower from "../images/loFlower.jpg";

const Container = styled.div`
  background-image: url(${loFlower});
  width: 100%;
  height: 100vh;
  background-size: 100% 100%;
  background-size: cover;
  animation-name: appear;
  animation-duration: 2s;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Libre Bodoni", serif;
  flex-flow: column;
  div {
    color: white;
    font-size: 5rem;
    margin: 1rem;
  }
  p {
    font-size: 1.5rem;
    color: white;
    margin: 1rem;
  }
  @keyframes appear {
    0% {
      opacity: 0;
    }
    70% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const Loading = () => {
  return (
    <Container>
      <div>FLOWER MAP</div>
      <p>Now Loading . . .</p>
    </Container>
  );
};

export default Loading;
