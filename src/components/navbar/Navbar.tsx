import { Link } from "react-router-dom";
import LogoMs from "./logoMS.svg";
import InputSearch from "../InputSearch/InputSearch";
import "./navbar.css";

interface INavbar {
  search?: string;
  setsearch?: (value: string) => void;
  searchMovie?: (value: string) => void;
  alreadyOpen?: boolean;
}

export default function Navbar({
  search,
  setsearch,
  searchMovie,
  alreadyOpen = false,
}: INavbar) {
  return (
    <nav className="navbar py-sm-4 mt-4">
      <div className="container-fluid d-flex justify-content-spacebetween align-items-center">
        <Link to="/">
          <img
            className="navbar-brand"
            src={LogoMs}
            alt="Logo Movie Searcher"
          />
        </Link>
        <InputSearch
          searchMovie={searchMovie!}
          setsearch={setsearch!}
          search={search}
          AlreadyOpen={alreadyOpen}
        />
      </div>
    </nav>
  );
}
