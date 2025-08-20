import { Routes, Route } from "react-router-dom";
import './App.css'
import Layout from "./Layout/Layout";
import LandingPage from "./pages/LandingPage";
import CitiesPage from "./pages/CitiesPage";

function App() {
  return (
   <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/places" element={<CitiesPage />} />
      </Route>

      {/* Not Found route outside Layout (optional) */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
}

export default App;