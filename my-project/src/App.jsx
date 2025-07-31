import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/Login/index";
import "./App.css";
import SignUpPage from "./pages/SignUp/index";
import DashboardPage from "./pages/Dashboard/index";
import NotFoundPage from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
