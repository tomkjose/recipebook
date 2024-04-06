import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Recipe, Saved, Fof, Signup, Signin } from "../../pages/index";
import Navbar from "../Navbar/Navbar";
import { useChangeTheme } from "../../provider/ThemeProvider";
import Footer from "../Footer/Footer";

function App() {
  const { currentTheme } = useChangeTheme();
  return (
    <div className={`App ${currentTheme ? "dark" : "Light"}`}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/recipe/:id" element={<Recipe />}></Route>
          <Route exact path="/saved" element={<Saved />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/signin" element={<Signin />}></Route>
          <Route path="*" element={<Fof />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
