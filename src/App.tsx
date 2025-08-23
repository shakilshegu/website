import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import LandingPage from "./pages/LandingPage";
import CitiesPage from "./pages/CitiesPage";
import NotFoundPage from "./components/Notfound";
import { useEffect } from "react";

function App() {
  // Force light mode on app load
  useEffect(() => {
    // Force remove dark mode immediately
    document.documentElement.classList.remove("dark");
    document.body.classList.remove("dark");

    // Set explicit light mode
    document.documentElement.setAttribute("data-theme", "light");
    document.documentElement.style.colorScheme = "light";

    // Watch for any changes and prevent dark mode
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          const target = mutation.target;
          // Fix for TypeScript - check if target is an Element
          if (target instanceof Element && target.classList.contains("dark")) {
            target.classList.remove("dark");
          }
        }
      });
    });

    // Observe both html and body elements
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Cleanup
    return () => observer.disconnect();
  }, []);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/places" element={<CitiesPage />} />
      </Route>

      {/* Not Found route outside Layout (optional) */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
