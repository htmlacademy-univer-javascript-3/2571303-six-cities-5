import Review from '../review/review';
import { Comment } from '../../types/comment.ts';

type ReviewsListProps = {
  comments: Comment[];
};

function ReviewsList({ comments }: ReviewsListProps) {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{comments.length}</span>
      </h2>
      <ul className="reviews__list">
        {comments.map((comment) => (
          <Review key={comment.id} comment={comment} />
        ))}
      </ul>
    </section>
  );
}

export default ReviewsList;
