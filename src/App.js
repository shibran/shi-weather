import { Link } from "react-router-dom";


// import logo from './logo.svg';
import './App.css';
import Home from './components/home';

function App() {
  return (
    <div>
      <h1>App page</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/home">Home</Link> |{" "}
        <Link to="/user">User</Link>
      </nav>
    </div>
  );
}

export default App;
