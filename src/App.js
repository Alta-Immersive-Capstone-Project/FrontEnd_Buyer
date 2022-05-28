import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import Register from "./pages/Register.jsx";
import Login from "./pages/login.jsx";
import Reset from "./pages/Reset.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";

function App() {
  return (
    <div className="App">
      {/* <Register />
      <Login />
      <Reset /> */}
      <ResetPassword />
    </div>
  );
}

export default App;
