import { useContext } from "react";
import Login from "./components/Login";
import Dashboard from "./components/dashboard";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return <div>{isLoggedIn ? <Dashboard /> : <Login />}</div>;
}

export default App;