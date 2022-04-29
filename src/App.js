import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import ContentPage from "./pages/ContentPage";
import DetailPage from "./pages/DetailPage";

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
    <BrowserRouter>
      <Content />
    </BrowserRouter>
  );
}

const Content = () => {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    console.log(location);
    console.log(displayLocation);
    if (location !== displayLocation) setTransitionStage("fadeOut");
  }, [location, displayLocation]);

  return (
    <TransitionWrapper
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        console.log("animation end");
        if (transitionStage === "fadeOut") {
          setTransitionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<ContentPage />} />
        <Route path="/detail/*" exact element={<DetailPage />} />
        <Route path="/*" element={<div>Page Not Found</div>} />
      </Routes>
    </TransitionWrapper>
  );
};

export default App;
