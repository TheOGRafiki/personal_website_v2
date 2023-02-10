import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./Components/NavigationBar";
import AboutMe from "./Components/AboutMe";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          {/* <Route path="/education" element={<RAGW />} />
          <Route path="/recommendations" element={<Recommendations />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
