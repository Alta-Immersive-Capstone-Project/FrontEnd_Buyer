import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import Register from "./Register.jsx";
import Login from "./login.jsx";
import Reset from "./Reset.jsx";
import ResetPassword from "./ResetPassword.jsx";

function App() {
  return (
    <div className="App">
      {/* <Register /> */}
      {/* <Login /> */}
      <ResetPassword />
    </div>
  );
}

export default App;
