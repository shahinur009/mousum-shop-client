import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import axios from "axios";

const Banner = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // banner code from server
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  console.log(banners);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        // Use the correct endpoint here
        const response = await axios.get("http://localhost:5000/get-banner");
        setBanners(response.data);
      } catch (err) {
        setError("Failed to fetch banners");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  console.log(banners);

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
          swiper.params.navigation.prevEl = prevRef?.current;
          swiper.params.navigation.nextEl = nextRef?.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="mySwiper"
      >
        {
          banners.map((banner) => (<SwiperSlide key={banner?._id}>
            <div className="flex md:flex-row flex-col w-full h-auto text-[#553B06]">
              <div className="md:w-[30%] w-full bg-[#FFBD14] md:px-16 px-8 md:py-4 py-2 space-y-4 flex flex-col justify-center">
                <h1 className="md:text-3xl text-2xl font-bold leading-tight">
                  {banner.title || "dsfjdjf"}
                </h1>
                <p className="text-lg">{banner?.description || "ddddd"}</p>
                <button className="border-[1px] border-[#553B06] rounded-3xl px-[17px] py-[10px] text-base hover:bg-[#553B06] hover:text-[#FFBD14]">
                  Shop Now
                </button>
              </div>
              <div className="md:w-[70%] w-full">
                <img className="object-cover w-full md:h-[361px] h-[210px]" src={banner.bannerImage} alt="slide images" />
              </div>
            </div>
          </SwiperSlide>))
        }
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