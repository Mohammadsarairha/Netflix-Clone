
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import FavMovies from './components/FavMovies/FavMovies';
import Navbar from "./components/Navbar/Navbar";

export default function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path ="/FavMovies" element={<FavMovies/>}></Route>
            </Routes>
        </div>
    )
}