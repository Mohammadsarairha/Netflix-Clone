
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import MovieList from './components/MovieList/MovieList';

export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path ="/MovieList" element={<MovieList/>}></Route>
            </Routes>
        </div>
    )
}