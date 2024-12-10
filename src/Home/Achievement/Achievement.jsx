
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper';
// import { Pagination } from 'swiper'; 
import 'swiper/css/free-mode';
import 'swiper/css';
import 'swiper/css/pagination';
// import { SwiperCore, Autoplay } from 'swiper/core'; 
import { Pagination,FreeMode} from 'swiper/modules';
import slide1 from '../../assets/html.png'
import slide2 from '../../assets/css.png'
import slide3 from '../../assets/javascript.png'
const Achievement = () => {
    // Autoplay.use();
    // SwiperCore.use([Autoplay]);
    return (
        <section id="achievement">
            <div className="hero mx-auto  text-center my-12">
                <h3 className="text-3xl uppercase mx-auto w-1/3 border-y-4 py-4 z-[0]">My Achievements</h3>
            </div>

            <Swiper
                slidesPerView={'auto'}
                freeMode={true}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode,Pagination]}
                className="mySwiper"
                autoplay={{ delay: 1000 }}
            >
              
                <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img  data-swiper-autoplay="2000" src={slide1} style={{ maxWidth: '300px', maxHeight: '300px' }} />
                </SwiperSlide>
                <SwiperSlide data-swiper-autoplay="2000" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={slide2} style={{ maxWidth: '300px', maxHeight: '300px' }} />
                </SwiperSlide>
                <SwiperSlide data-swiper-autoplay="2000" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={slide3} style={{ maxWidth: '300px', maxHeight: '300px' }} />
                </SwiperSlide>

            </Swiper>


        </section >
    );
};

export default Achievement;



