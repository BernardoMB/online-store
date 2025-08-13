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
import { Box } from '@chakra-ui/react';
import './Reviews.css';
import { useColorModeValue } from '../ui/color-mode';

export default function Reviews() {
  const [reviews, setReviews] = useState<ReviewType[]>([]);

  useEffect(() => {
    const allReviews = ReviewsService.getAllReviews();
    setReviews(allReviews);
  }, []);

  const customPaginationBulletClass = useColorModeValue('custom-swiper-pagination-bullet-light', 'custom-swiper-pagination-bullet-dark');
  const customPaginationBulletActiveClass = useColorModeValue('custom-swiper-pagination-bullet-light-active', 'custom-swiper-pagination-bullet-dark-active');

  return (
      <Swiper className='custom-swiper'
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 5000 * 1000, disableOnInteraction: true, pauseOnMouseEnter: true }}
        pagination={{ clickable: true, bulletClass: customPaginationBulletClass, bulletActiveClass: customPaginationBulletActiveClass }}
        loop
        spaceBetween={30}
        slidesPerView={1}
        
      >
        {reviews.map((review: ReviewType) => (
          <SwiperSlide>
            <Box pb="2rem">
              <Review review={review}></Review>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
  );
}
