import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MovieInformation from "../pages/MovieInformation";
import Search from "../pages/Search";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search/:search" element={<Search />} />
      <Route path="/movieinfo/:movie" element={<MovieInformation />} />
    </Routes>
  );
}
