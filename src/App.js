import Maps from "./pages/Maps";
import About from "./pages/About";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar>
          <Routes>
            <Route index element={<Maps />} />
            <Route path="about" element={<About />} />
          </Routes>
        </Navbar>
      </BrowserRouter>
      {/* <Navbar>
        <Maps />
      </Navbar> */}
    </div>
  );
}

export default App;
