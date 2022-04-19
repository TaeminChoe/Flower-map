import React from "react";
import ContentPage from "./pages/ContentPage";
import DetailPage from "./pages/DetailPage";
import styled from "styled-components";
import GyeongGi from "./components/Gyeonggi";
import Gangwon from "./components/Gangwon";

const Korea = styled.div`
  background-color: #333;
  width: 100%;
  height: 100vh;
  position: relative;
`;

function App() {
  // return <ContentPage />;
  // return <DetailPage />;
  return (
    <Korea>
      <GyeongGi></GyeongGi>
      <Gangwon></Gangwon>
    </Korea>
  );
}

export default App;
