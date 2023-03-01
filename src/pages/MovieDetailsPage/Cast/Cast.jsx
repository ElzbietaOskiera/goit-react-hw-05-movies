import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'Api/Api';
import { Loader } from 'components/Loader/Loader';

import { ListStyled } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setIsLoading(true);
        const response = await getMovieCast(id);
        setCast(response.cast);
      } catch (error) {
        alert(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCast();
  }, [id]);

  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && cast.length > 0 && (
        <div>
          <ListStyled>
            {cast.map(({ id, profile_path, name, character }) => (
              <li key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w92${profile_path}`
                      : 'https://www.iconpacks.net/icons/1/free-user-icon-244-thumb.png'
                  }
                  alt={name}
                  width="150"
                  loading="lazy"
                />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            ))}
          </ListStyled>
        </div>
      )}
    </div>
  );
};

export default Cast;
