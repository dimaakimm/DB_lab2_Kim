import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./atomic/pages/MainPage/MainPage.tsx";
import WelcomePage from "./atomic/pages/WelcomePage/WelcomePage.tsx";
import { useEffect } from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/table" element={<MainPage />} />
        <Route path="/" element={<WelcomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
