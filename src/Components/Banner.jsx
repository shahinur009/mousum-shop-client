import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
// images
import img1 from '../../public/Banner Imag/1.jpg';
import img2 from '../../public/Banner Imag/2.jpg';
import img3 from '../../public/Banner Imag/3.jpg';
import img4 from '../../public/Banner Imag/4.jpg';
import img5 from '../../public/Banner Imag/5.jpg';

const Banner = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative">
      <Swiper
        loop={true}
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          // Ensure navigation buttons are linked after Swiper is initialized
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex md:flex-row flex-col w-full h-auto text-[#553B06]">
            <div className="md:w-[30%] w-full bg-[#FFBD14] md:px-16 px-8 md:py-4 py-2 space-y-4 flex flex-col justify-center">
              <h1 className="md:text-3xl text-2xl font-bold leading-tight">
                Reawaken your passion for collections
              </h1>
              <p className="text-lg">Explore a variety of unique cards on eBay.</p>
              <button className="border-[1px] border-[#553B06] rounded-3xl px-[17px] py-[10px] text-base hover:bg-[#553B06] hover:text-[#FFBD14]">
                Shop Now
              </button>
            </div>
            <div className="md:w-[70%] w-full">
              <img className="object-cover w-full md:h-[361px] h-[210px]" src={img1} alt="slide images" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex md:flex-row flex-col w-full h-auto text-[#2A0303]">
            <div className="md:w-[30%] w-full bg-[#F02D2D] md:px-16 px-8 md:py-4 py-2 space-y-4 flex flex-col justify-center">
              <h1 className="md:text-3xl text-2xl font-bold leading-tight">
                The right sneakers to pave your way
              </h1>
              <p className="text-lg">Explore a variety of unique cards on eBay.</p>
              <button className="border-[1px] border-[#2A0303] rounded-3xl px-[17px] py-[10px] text-base hover:bg-[#2A0303] hover:text-[#F02D2D]">
                Shop Now
              </button>
            </div>
            <div className="md:w-[70%] w-full">
              <img className="object-cover w-full md:h-[361px] h-[210px]" src={img2} alt="slide images" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex md:flex-row flex-col w-full h-auto text-[#2A0303]">
            <div className="md:w-[30%] w-full bg-[#F02D2D] md:px-16 px-8 md:py-4 py-2 space-y-4 flex flex-col justify-center">
              <h1 className="md:text-3xl text-2xl font-bold leading-tight">
                The right sneakers to pave your way
              </h1>
              <p className="text-lg">Explore a variety of unique cards on eBay.</p>
              <button className="border-[1px] border-[#2A0303] rounded-3xl px-[17px] py-[10px] text-base hover:bg-[#2A0303] hover:text-[#F02D2D]">
                Shop Now
              </button>
            </div>
            <div className="md:w-[70%] w-full">
              <img className="object-cover w-full md:h-[361px] h-[210px]" src={img3} alt="slide images" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex md:flex-row flex-col w-full h-auto text-[#2A0303]">
            <div className="md:w-[30%] w-full bg-[#F02D2D] md:px-16 px-8 md:py-4 py-2 space-y-4 flex flex-col justify-center">
              <h1 className="md:text-3xl text-2xl font-bold leading-tight">
                The right sneakers to pave your way
              </h1>
              <p className="text-lg">Explore a variety of unique cards on eBay.</p>
              <button className="border-[1px] border-[#2A0303] rounded-3xl px-[17px] py-[10px] text-base hover:bg-[#2A0303] hover:text-[#F02D2D]">
                Shop Now
              </button>
            </div>
            <div className="md:w-[70%] w-full md:h-[361px] h-[210px]">
              <img className="object-cover w-full md:h-[361px] h-[210px]" src={img4} alt="slide images" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex md:flex-row flex-col w-full h-auto text-[#2A0303]">
            <div className="md:w-[30%] w-full bg-[#F02D2D] md:px-16 px-8 md:py-4 py-2 space-y-4 flex flex-col justify-center">
              <h1 className="md:text-3xl text-2xl font-bold leading-tight">
                The right sneakers to pave your way
              </h1>
              <p className="text-lg">Explore a variety of unique cards on eBay.</p>
              <button className="border-[1px] border-[#2A0303] rounded-3xl px-[17px] py-[10px] text-base hover:bg-[#2A0303] hover:text-[#F02D2D]">
                Shop Now
              </button>
            </div>
            <div className="md:w-[70%] w-full">
              <img className="object-cover w-full md:h-[361px] h-[210px]" src={img5} alt="slide images" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button ref={prevRef} className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10">
        <FaChevronCircleLeft className="text-white" size={40} />
      </button>
      <button ref={nextRef} className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10">
        <FaChevronCircleRight className="text-white" size={40} />
      </button>
    </div>
  );
};

export default Banner;

