import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import type { Review as ReviewType } from '@/model/ReviewModel';
import { ReviewsService } from '@/services/ReviewsService';
import { Review } from '../Review/Review';
import HomePageSection from '../HomePageSection/HomePageSection';

export default function Reviews() {
  const [reviews, setReviews] = useState<ReviewType[]>([]);

  useEffect(() => {
    const allReviews = ReviewsService.getAllReviews();
    setReviews(allReviews);
  }, []);

  return (
    <HomePageSection>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: true, pauseOnMouseEnter: true }}
        pagination={{ clickable: true }}
        loop
        spaceBetween={30}
        slidesPerView={1}
      >
        {reviews.map((review: ReviewType) => (
          <SwiperSlide>
            <Review review={review}></Review>
          </SwiperSlide>
        ))}
      </Swiper>
    </HomePageSection>
  );
}
