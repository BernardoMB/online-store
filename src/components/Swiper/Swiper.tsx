import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Box } from '@chakra-ui/react';

export default function HomeSwiper() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
      spaceBetween={30}
      slidesPerView={1}
    >
      <SwiperSlide>
        <img src="/images/banner1.jpg" alt="Banner 1" />
        <Box width={'40px'} height={'40px'} backgroundColor={'red'}></Box>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/banner2.jpg" alt="Banner 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/banner3.jpg" alt="Banner 3" />
      </SwiperSlide>
    </Swiper>
  );
}
