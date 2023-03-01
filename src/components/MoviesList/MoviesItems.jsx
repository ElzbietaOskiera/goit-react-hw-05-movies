import PropTypes from 'prop-types';


import {
  ItemStyled,
  LinkStyled,
  TitleStyled,
  Image,
} from './MoviesItems.styled';

export const MoviesItems = ({ id, title, poster_path, state }) => {


  return (
    <ItemStyled key={id}>
      <LinkStyled to={`/movies/${id}`} state={state}>
        <Image
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'https://static.wikia.nocookie.net/just-because/images/0/0c/NoImage_Available.png/revision/latest?cb=20170601005615'
          }
          alt={title}
          loading="lazy"
        />
        <TitleStyled>{title}</TitleStyled>
      </LinkStyled>
    </ItemStyled>
  );
};

MoviesItems.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ),
  state: PropTypes.object.isRequired,
};
