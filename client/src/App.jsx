import { globalStyles } from "./components/StyleComp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import DiffPage from "./pages/DiffPage";

const App = () => {
  return (
    <div
      className={`container mx-auto m-[2rem] ${globalStyles.body} bg-[#FBFDFF]`}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route
            path="/repositories/:owner/:repository/commit/:oid"
            element={<DiffPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
