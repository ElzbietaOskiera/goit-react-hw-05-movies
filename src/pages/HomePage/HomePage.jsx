import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { getTrendMovies } from 'Api/Api';

import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';


import { ContainerStyled, TitleStyled } from './HomePage.styled';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const response = await getTrendMovies();
        setMovies(response.results);
      } catch (error) {
        alert(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const location = useLocation();

  return (
    <ContainerStyled>
      <TitleStyled>Trending today</TitleStyled>
      {isLoading && <Loader />}
      {movies.length > 0 && (
        <MoviesList movies={movies} state={{ from: location }} />
      )}
    </ContainerStyled>
  );
};

export default HomePage;
