import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useChangeTheme } from "../../provider/ThemeProvider";
import Footer from "../Footer/Footer";
import LoadingPage from "../../pages/LoadingPage";

const Home = lazy(() => import("../../pages/Home"));
const Recipe = lazy(() => import("../../pages/Recipe"));
const Saved = lazy(() => import("../../pages/Saved"));
const Fof = lazy(() => import("../../pages/Fof"));
const Signup = lazy(() => import("../../pages/Signup"));
const Signin = lazy(() => import("../../pages/Signin"));

function App() {
  const { currentTheme } = useChangeTheme();

  return (
    <div className={`App ${currentTheme ? "dark" : "Light"}`}>
      <Router>
        <Navbar />
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/recipe/:id" element={<Recipe />} />
            <Route exact path="/saved" element={<Saved />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/signin" element={<Signin />} />
            <Route path="*" element={<Fof />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
