import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';

import { getMovieDetails } from 'Api/Api';
import { Loader } from 'components/Loader/Loader';

import {
  ContainerStyled,
  LinkStyled,
  CardStyled,
  BoxStyled,
  TextStyled,
  ListStyled,
  NavLinkStyled,
} from './MovieDetailsPage.styled';

const getGenresMovie = array => {
  return array.map(genre => genre.name).join(', ');
};

const getYearDate = fullDate => {
  const date = new Date();
  return date.getFullYear(fullDate);
};

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        const response = await getMovieDetails(id);
        setMovie(response);
      } catch (error) {
        alert(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <ContainerStyled>
      <LinkStyled to={backLinkHref}>Go Back</LinkStyled>
      {isLoading && <Loader />}
      {!isLoading && (
        <CardStyled>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : 'https://static.wikia.nocookie.net/just-because/images/0/0c/NoImage_Available.png/revision/latest?cb=20170601005615'
            }
            alt={movie.title}
            width="300"
            loading="lazy"
          />
          <BoxStyled>
            <h3>
              {movie.title} ({getYearDate(movie.release_date)})
            </h3>
            <p>User score: {Math.round(movie.vote_average * 10)}%</p>
            <p>
              <TextStyled>Overview</TextStyled> {movie.overview}
            </p>
            <p>
              <TextStyled>Genres</TextStyled> {getGenresMovie(movie.genres)}
            </p>
          </BoxStyled>
        </CardStyled>
      )}
      <BoxStyled>
        <TextStyled>Additional information</TextStyled>
        <ListStyled>
          <li>
            &#8594;
            <NavLinkStyled
              to={`/movies/${id}/cast`}
              state={{ from: backLinkHref }}
            >
              View cast information here
            </NavLinkStyled>
          </li>
          <li>
            &#8594;
            <NavLinkStyled
              to={`/movies/${id}/reviews`}
              state={{ from: backLinkHref }}
            >
              See reviews here
            </NavLinkStyled>
          </li>
        </ListStyled>
      </BoxStyled>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </ContainerStyled>
  );
};

export default MovieDetailsPage;
