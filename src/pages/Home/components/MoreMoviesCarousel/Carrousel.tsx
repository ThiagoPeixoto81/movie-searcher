import "./Carrousel.css";
import { Link } from "react-router-dom";
import { MovieProps } from "../../../../@types/MovieProps";
import ScrollContainer from "react-indiana-drag-scroll";
import Slide from "../Slides/Slide";

export default function Carrousel({
  arrayCarrossel,
}: {
  arrayCarrossel: MovieProps[];
}) {
  return (
    <>
      <ScrollContainer
        horizontal={true}
        style={{
          width: "100%",
          height: "auto",
          display: "flex",
          gap: "30px",
        }}
        className="movieScroll"
      >
        {arrayCarrossel.map((movie: MovieProps, index) => {
          if (index > 0) {
            return (
              <Link
                to={"/movieinfo/" + movie.Title.replace(".", "")}
                className="text-decoration-none"
                key={movie.imdbID}
              >
                {movie.Poster && (
                  <Slide poster={movie.Poster} title={movie.Title}></Slide>
                )}
              </Link>
            );
          }
        })}
      </ScrollContainer>
    </>
  );
}
