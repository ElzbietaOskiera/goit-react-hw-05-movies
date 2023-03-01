import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'Api/Api';

import { ItemStyled, TextStyled } from './Reviews.styled';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const [review, setReview] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchReview = async () => {
      try {
        setIsLoading(true);
        const response = await getMovieReviews(id);
        setReview(response.results);
      } catch (error) {
        alert(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReview();
  }, [id]);

  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && review.length > 0 && (
        <div>
          <ul>
            {review.map(({ id, author, content }) => (
              <ItemStyled key={id}>
                <TextStyled>Author {author}</TextStyled>
                <p>{content}</p>
              </ItemStyled>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Reviews;
