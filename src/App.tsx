import { Routes, Route } from "react-router-dom";
import "./App.scss";
import LoginPage from "./pages/loginPage/LoginPage";
import HomePage from "./pages/loginPage/HomePage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}
export default App;
