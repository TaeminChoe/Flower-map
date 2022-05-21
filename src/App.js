import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { RecoilRoot } from "recoil";
import styled from "styled-components";
//pages
import ContentPage from "./pages/ContentPage";
import DetailPage from "./pages/DetailPage";
import PageNotFound from "./components/PageNotFound";

const TransitionWrapper = styled.div`
  &.fadeIn {
    animation: 0.5s fadeIn forwards;
  }

  &.fadeOut {
    animation: 0.5s fadeOut forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate(-20px, 0);
    }
    to {
      opacity: 1;
      transform: translate(0px, 0px);
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: translate(0px, 0px);
    }
    to {
      transform: translate(-20px, 0);
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter basename="/Flower-map">
        <Content />
      </BrowserRouter>
    </RecoilRoot>
  );
}

const Content = () => {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransitionStage("fadeOut");
  }, [location, displayLocation]);

  return (
    <TransitionWrapper
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransitionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<ContentPage />} />
        <Route path="/detail/*" exact element={<DetailPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </TransitionWrapper>
  );
};

export default App;
