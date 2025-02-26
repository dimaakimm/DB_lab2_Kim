import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./atomic/pages/MainPage/MainPage.tsx";
import WelcomePage from "./atomic/pages/WelcomePage/WelcomePage.tsx";
import RequireAuth from "./utils/RequireAuth.tsx";
import Header from "./atomic/organisms/Header/Header.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RequireAuth />}>
          <Route element={<Header />}>
            <Route path="/" element={<MainPage />} />
          </Route>
        </Route>
        <Route path="/login" element={<WelcomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
