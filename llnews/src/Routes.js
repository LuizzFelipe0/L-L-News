import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";

export function Rotas() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Home />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    )
}