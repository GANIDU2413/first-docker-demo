import { Route, Routes } from "react-router-dom";
import App from "./App";
import PageTwo from "./PageTwo";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/page" element={<PageTwo />} />
    </Routes>
  );
};

export default Router;
