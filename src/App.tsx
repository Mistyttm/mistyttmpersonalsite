import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/App.css'
import Home from "./pages/home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
