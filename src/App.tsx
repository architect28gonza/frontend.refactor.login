import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./App/pages/login.pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/refactor/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;