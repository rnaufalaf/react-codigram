import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage, RegisterPage, HomePage } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home/*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
