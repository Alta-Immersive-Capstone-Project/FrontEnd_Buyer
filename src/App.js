import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Register from "./pages/Register.jsx";
import Login from "./pages/login.jsx";
import Reset from "./pages/Reset.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
