import reactLogo from "./assets/react.svg";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank"></a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Docker-Using-with-AWS-ec2</h1>
      <Link to="/page">Go to page 02</Link>
    </>
  );
}

export default App;
