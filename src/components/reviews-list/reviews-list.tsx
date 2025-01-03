import Review from '../review/review';
import {ReviewType} from '../../types/review.ts';

type ReviewsListProps = {
  reviews: ReviewType[];
};

function ReviewsList({ reviews }: ReviewsListProps) {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review, index) => (
          <Review
            key={index}
            userName={review.userName}
            userAvatar={review.userAvatar}
            rating={review.rating}
            comment={review.comment}
            date={review.date}
          />
        ))}
      </ul>
    </section>
  );
}

export default ReviewsList;
