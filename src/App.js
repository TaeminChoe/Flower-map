import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContentPage from "./pages/ContentPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContentPage />} />
        <Route path="/detail/*" exact element={<DetailPage />} />
        <Route path="/*" element={<div>Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
  d;
}

export default App;
