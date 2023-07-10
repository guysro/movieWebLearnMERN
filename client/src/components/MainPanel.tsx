import MovieBlock from "./MovieBlock";

interface Props {
  movies: movieProps[];
  currentCat: string;
}

interface movieProps {
  name: string;
  picUrl: string;
  rating: number;
  category: string;
}

function MainPanel({ movies, currentCat }: Props) {
  return (
    <div className="d-flex gap-4 m-4 flex-wrap">
      {currentCat === "all"
        ? movies.map((movie, index) => (
            <MovieBlock
              category={movie.category}
              name={movie.name}
              picUrl={movie.picUrl}
              rating={movie.rating}
              key={index}
            />
          ))
        : movies.map((movie, index) =>
            movie.category === currentCat ? (
              <MovieBlock
                category={movie.category}
                name={movie.name}
                picUrl={movie.picUrl}
                rating={movie.rating}
                key={index}
              />
            ) : null
          )}
    </div>
  );
}

export default MainPanel;
