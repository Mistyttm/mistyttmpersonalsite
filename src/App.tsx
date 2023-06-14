import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/App.css'
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Error from "./pages/404";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
