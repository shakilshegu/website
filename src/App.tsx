import { Routes, Route } from "react-router-dom";
import './App.css'
import Layout from "./Layout/Layout";
import LandingPage from "./pages/LandingPage";
import CitiesPage from "./pages/CitiesPage";
import NotFoundPage from "./components/Notfound";
import { useEffect } from "react";

function App() {
  useEffect(() => {
  document.documentElement.classList.add('light'); 
}, []);

  return (
   <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/places" element={<CitiesPage />} />
      </Route>

      {/* Not Found route outside Layout (optional) */}
      <Route path="*" element={<NotFoundPage/>} />
    </Routes>
  );
}

export default App;