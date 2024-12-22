import React from 'react';
import { FaCartPlus } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import './Slider_2.css';
import Rating from '../../assets/images/rating.png'
import Product1 from '../../assets/images/product 1.png'
import Product2 from '../../assets/images/product 2.png'
import Product3 from '../../assets/images/product 3.png'
import Product4 from '../../assets/images/product 4.png'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

const Slider_2 = () => {
    return (
        <div>
            <h1 className='mt-5'>New Arrivals Products</h1>
            <div className="container mt-5" id='slider'>
                <div className="row">
                    <Swiper
                    loop={true}
                    slidesPerView={4}
                    spaceBetween={30}
                    freeMode={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    // pagination={{
                    // clickable: true,
                    // }}
                    breakpoints={{
                        320: {
                          slidesPerView: 1,
                          
                        },
                        420: {
                          slidesPerView: 2,
                          
                        },
                        768: {
                          slidesPerView: 3,
                         
                        },
                        1024: {
                          slidesPerView: 4,
                          
                        },
                      }}
                    modules={[FreeMode, Pagination, Autoplay]}
                    className="mySwiper mb-5"
                    >
                        <SwiperSlide>
                            <div className="card">
                                <img src={Product1} alt="Image" className='product-image'/>
                                <div className="card-body">
                                    <p>$150.65</p>
                                    <h4>Lotion Shower gel</h4>
                                    <img src={Rating} alt="" />
                                </div>
                                <div className="offer">
                                    <p>-45%</p>
                                </div>
                                <div className="slider-icons">
                                    <div className="slider-icon">
                                        <span><FaCartPlus className='icon'/></span>
                                    </div>
                                    <div className="slider-icon">
                                        <span><FaHeart /></span>
                                    </div>
                                    <div className="slider-icon">
                                        <span><FaEye /></span>
                                    </div>
                                    <div className="slider-icon">
                                        <span><MdOutlineSignalCellularAlt /></span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <img src={Product2} alt="Image" className='product-image'/>
                                <div className="card-body">
                                    <p>$250.65</p>
                                    <h4>Argan Cream Body Butter</h4>
                                    <img src={Rating} alt="" />
                                </div>
                                <div className="offer">
                                    <p>Sale</p>
                                </div>
                                <div className="slider-icons">
                                    <div className="slider-icon">
                                        <span><FaCartPlus className='icon'/></span>
                                    </div>
                                    <div className="slider-icon">
                                        <span><FaHeart /></span>
                                    </div>
                                    <div className="slider-icon">
                                        <span><FaEye /></span>
                                    </div>
                                    <div className="slider-icon">
                                        <span><MdOutlineSignalCellularAlt /></span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <img src={Product3} alt="Image" className='product-image'/>
                                <div className="card-body">
                                    <p>$175.65</p>
                                    <h4>Organic Hunny</h4>
                                    <img src={Rating} alt="" />
                                </div>
                                <div className="offer">
                                    <p>Hot</p>
                                </div>
                                <div className="slider-icons">
                                    <div className="slider-icon">
                                        <span><FaCartPlus className='icon'/></span>
                                    </div>
                                    <div className="slider-icon">
                                        <span><FaHeart /></span>
                                    </div>
                                    <div className="slider-icon">
                                        <span><FaEye /></span>
                                    </div>
                                    <div className="slider-icon">
                                        <span><MdOutlineSignalCellularAlt /></span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <img src={Product4} alt="Image" className='product-image'/>
                                <div className="card-body">
                                    <p>$75.65</p>
                                    <h4>Manicure Gel nails, makeup</h4>
                                    <img src={Rating} alt="" />
                                </div>
                                <div className="offer">
                                    <p>New</p>
                                </div>
                                <div className="slider-icons">
                                    <div className="slider-icon">
                                        <span><FaCartPlus className='icon'/></span>
                                    </div>
                                    <div className="slider-icon">
                                        <span><FaHeart /></span>
                                    </div>
                                    <div className="slider-icon">
                                        <span><FaEye /></span>
                                    </div>
                                    <div className="slider-icon">
                                        <span><MdOutlineSignalCellularAlt /></span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <img src={Product1} alt="Image" className='product-image'/>
                                <div className="card-body">
                                    <p>$150.65</p>
                                    <h4>Lotion Shower gel</h4>
                                    <img src={Rating} alt="" />
                                </div>
                                <div className="offer">
                                    <p>-45%</p>
                                </div>
                                <div className="slider-icons">
                                    <div className="slider-icon">
                                        <span><FaCartPlus className='icon'/></span>
                                    </div>
                                    <div className="slider-icon">
                                        <span><FaHeart /></span>
                                    </div>
                                    <div className="slider-icon">
                                        <span><FaEye /></span>
                                    </div>
                                    <div className="slider-icon">
                                        <span><MdOutlineSignalCellularAlt /></span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <img src={Product2} alt="Image" className='product-image'/>
                                <div className="card-body">
                                    <p>$250.65</p>
                                    <h4>Argan Cream Body Butter</h4>
                                    <img src={Rating} alt="" />
                                </div>
                                <div className="offer">
                                    <p>Sale</p>
                                </div>
                                <div className="slider-icons">
                                    <div className="slider-icon">
                                        <span><FaCartPlus className='icon'/></span>
                                    </div>
                                    <div className="slider-icon">
                                        <span><FaHeart /></span>
                                    </div>
                                    <div className="slider-icon">
                                        <span><FaEye /></span>
                                    </div>
                                    <div className="slider-icon">
                                        <span><MdOutlineSignalCellularAlt /></span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <img src={Product3} alt="Image" className='product-image'/>
                                <div className="card-body">
                                    <p>$175.65</p>
                                    <h4>Organic Hunny</h4>
                                    <img src={Rating} alt="" />
                                </div>
                                <div className="offer">
                                    <p>Hot</p>
                                </div>
                                <div className="slider-icons">
                                    <div className="slider-icon">
                                        <span><FaCartPlus className='icon'/></span>
                                    </div>
                                    <div className="slider-icon">
                                        <span><FaHeart /></span>
                                    </div>
                                    <div className="slider-icon">
                                        <span><FaEye /></span>
                                    </div>
                                    <div className="slider-icon">
                                        <span><MdOutlineSignalCellularAlt /></span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <img src={Product4} alt="Image" className='product-image'/>
                                <div className="card-body">
                                    <p>$75.65</p>
                                    <h4>Manicure Gel nails, makeup</h4>
                                    <img src={Rating} alt="" />
                                </div>
                                <div className="offer">
                                    <p>New</p>
                                </div>
                                <div className="slider-icons">
                                    <div className="slider-icon">
                                        <span><FaCartPlus className='icon'/></span>
                                    </div>
                                    <div className="slider-icon">
                                        <span><FaHeart /></span>
                                    </div>
                                    <div className="slider-icon">
                                        <span><FaEye /></span>
                                    </div>
                                    <div className="slider-icon">
                                        <span><MdOutlineSignalCellularAlt /></span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Slider_2;