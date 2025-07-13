// import Button from "./components/Button";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import SurveyNew from "./components/SurveyNew";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/surveys" element={<Dashboard />} />
          <Route path="/surveys/new" element={<SurveyNew />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
