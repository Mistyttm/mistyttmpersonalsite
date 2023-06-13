import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/App.css'
import Home from "./pages/home";
import About from "./pages/about";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Home />} />
                <Route path="/projects" element={<Home />} />
                <Route path="/contact" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
