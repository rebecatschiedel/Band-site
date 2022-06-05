import "./styles/App.scss";
import Nav from "./components/Nav/Nav";
import { Route, Routes, Navigate } from "react-router-dom";
import Bio from "./pages/Bio/Bio";
import Shows from "./pages/Shows/Shows";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/bio" replace />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/shows" element={<Shows />} />
      </Routes>
    </div>
  );
}

export default App;
