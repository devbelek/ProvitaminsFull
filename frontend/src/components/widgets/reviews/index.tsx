import { getReviews } from "@/src/api/reviews";
import ReviewsCarousel from "./carousel";

async function Reviews() {
  const reviews = await getReviews();
  return <ReviewsCarousel list={reviews.results} />;
}

export default Reviews;
