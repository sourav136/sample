import React, { useState } from 'react';
import Logo from '../assets/images/Logo.png';
import LogoB from '../assets/images/LogoB.png';
import PaymentMethods from '../assets/images/Payment Methods.png';
import Beauty1 from '../assets/images/beauty-1.png';
import Beauty2 from '../assets/images/beauty-2.png';
import Beauty3 from '../assets/images/beauty-3.png';
import Banner2 from '../assets/images/Banner2.png';
import SpecialOffer from '../assets/images/Special offer.png';
import Rating from '../assets/images/Rating.png';
import BestSeller1 from '../assets/images/Mask here (1).png';
import BestSeller2 from '../assets/images/Mask here (2).png';
import BestSeller3 from '../assets/images/Mask here (3).png';
import BestSeller4 from '../assets/images/Mask here (4).png';
import BestSeller5 from '../assets/images/Mask here (5).png';
import BestSeller6 from '../assets/images/Mask here (6).png';
import BestSeller7 from '../assets/images/Mask here (7).png';
import BestSeller8 from '../assets/images/Mask here (8).png';
import './Home.css';
import { IoSearchSharp } from "react-icons/io5";
import { AiOutlineUser  } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa6";
import { BsHandbag } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaTruckFast } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa6";
import { GoPackageDependencies } from "react-icons/go";
import { MdSupportAgent } from "react-icons/md";
import Search from './Search/Search';
import Slider from './Slider/Slider';
import Slider_2 from './Slider_2/Slider_2';
import LNews from './LNews/LNews';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/pagination';


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const Home = () => {
    let [value, setValue] = useState(false);
    let searchActive = () => {
        setValue(true);
    };

    let lock = () => {
        setValue(false);
    };

    return (
        <div>
            <div className="body">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <img src={Logo} alt="" className='logo' />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">Shop</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">Pages</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">Blogs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">Contact</a>
                                </li>
                            </ul>
                            <div className="icons">
                                <ul>
                                    <li><a href="#" className='search' onClick={searchActive}><IoSearchSharp /></a></li>
                                    <li><a href="#"><AiOutlineUser  /></a></li>
                                    <li><a href="#"><FaRegHeart /></a></li>
                                    <li><a href="#" className='bag'>
                                        <BsHandbag />
                                        <div className="order-number">
                                            <span>0</span>
                                        </div>
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="mini-screen-icons col-12">
                    <ul>
                        <li><a href="#" className='search-mini' onClick={searchActive}><IoSearchSharp /></a></li>
                        <li><a href="#" className='user-mini'><AiOutlineUser  /></a></li>
                        <li><a href="#" className='heart-mini'><FaRegHeart /></a></li>
                        <li>
                            <a href="#" className='bag-mini'>
                                <BsHandbag />
                                <div className="order-number">
                                    <span>0</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <Search trigger={value} lock={lock} />
                <Slider/>
                <div className="beauty-cream-part mt-5 mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 ">
                                <div className="beauty-images w-100">
                                    <img src={Beauty1} className='w-100 d-block' alt="" />

                                    <div className="beauty-hover">
                                        <div className="beauty-text">
                                            <h3>Beauty Cream</h3>
                                            <a href="#">Shop Now <FaArrowRightLong /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="beauty-images w-100 mt-3">
                                    <img src={Beauty2} className='w-100 d-block mt-3 mt-md-0' alt="" />

                                    <div className="beauty-hover">
                                        <div className="beauty-text">
                                            <h3>Beauty Cream</h3>
                                            <a href="#">Shop Now <FaArrowRightLong /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="beauty-images w-100">
                                    <img src={Beauty3} className='w-100 d-block mt-3 mt-md-0' alt="" />

                                    <div className="beauty-hover">
                                        <div className="beauty-text">
                                            <h3>Beauty Cream</h3>
                                            <a href="#">Shop Now <FaArrowRightLong /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <Slider_2/>
                <div className="banner-2 mb-5" style={{backgroundImage: `url(${Banner2})`}}>
                    <div className="container">
                            <h3 className='banner-2-head'>Get Up To 35% Off all
                            Best Spa Cosmetics
                            Cream</h3>
                            <p>Holisticly maximize interoperable action items for effective e-business. Globally impact enterprise-wide niche markets through dynamic.</p>
                            <a href="#">Shop Now <FaArrowRightLong /></a>
                    </div>
                </div>

                <div className="best-seller-product pb-5">
                    <div className="container">
                        <h2 className='best-seller-product-header my-5'>Best Seller Products</h2>
                        <div className="align-cards d-flex align-items-center justify-content-center">
                            <div className="cards-container w-auto d-flex justify-content-around flex-wrap ">
                                <div className="card mb-4">
                                    <div className="card-image-part">
                                        <img src={BestSeller1} alt="" />
                                        <div className="best-seller-offer">
                                            <p>-45%</p>
                                        </div>
                                        <div className="best-seller-icons">
                                            <div className="best-seller-icon">
                                                <span><FaCartPlus className='icon'/></span>
                                            </div>
                                            <div className="best-seller-icon">
                                                <span><FaHeart /></span>
                                            </div>
                                            <div className="best-seller-icon">
                                                <span><FaEye /></span>
                                            </div>
                                            <div className="best-seller-icon">
                                                <span><MdOutlineSignalCellularAlt /></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-text">
                                        <p className='best-sller-price'>$150.65 <span>$450.65</span></p>
                                        <h5>Lotion Shower Gel</h5>
                                        <img src={Rating} alt="" />
                                    </div>
                                </div>
                                <div className="card mb-4">
                                    <div className="card-image-part">
                                        <img src={BestSeller2} alt="" />
                                        <div className="best-seller-offer">
                                            <p>New</p>
                                        </div>
                                        <div className="best-seller-icons">
                                            <div className="best-seller-icon">
                                                <span><FaCartPlus className='icon'/></span>
                                            </div>
                                            <div className="best-seller-icon">
                                                <span><FaHeart /></span>
                                            </div>
                                            <div className="best-seller-icon">
                                                <span><FaEye /></span>
                                            </div>
                                            <div className="best-seller-icon">
                                                <span><MdOutlineSignalCellularAlt /></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-text">
                                        <p className='best-sller-price'>$250.65</p>
                                        <h5>Argan Cream Body Butter</h5>
                                        <img src={Rating} alt="" />
                                    </div>
                                </div>
                                <div className="card mb-4">
                                    <div className="card-image-part">
                                        <img src={BestSeller3} alt="" />
                                        {/* <div className="best-seller-offer">
                                            <p>New</p>
                                        </div> */}
                                        <div className="best-seller-icons">
                                            <div className="best-seller-icon">
                                                <span><FaCartPlus className='icon'/></span>
                                            </div>
                                            <div className="best-seller-icon">
                                                <span><FaHeart /></span>
                                            </div>
                                            <div className="best-seller-icon">
                                                <span><FaEye /></span>
                                            </div>
                                            <div className="best-seller-icon">
                                                <span><MdOutlineSignalCellularAlt /></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-text">
                                        <p className='best-sller-price'>$175.65</p>
                                        <h5>Compact Face Powder</h5>
                                        <img src={Rating} alt="" />
                                    </div>
                                </div>
                                <div className="card mb-4">
                                    <div className="card-image-part">
                                        <img src={BestSeller4} alt="" />
                                        <div className="best-seller-offer">
                                            <p>New</p>
                                        </div>
                                        <div className="best-seller-icons">
                                            <div className="best-seller-icon">
                                                <span><FaCartPlus className='icon'/></span>
                                            </div>
                                            <div className="best-seller-icon">
                                                <span><FaHeart /></span>
                                            </div>
                                            <div className="best-seller-icon">
                                                <span><FaEye /></span>
                                            </div>
                                            <div className="best-seller-icon">
                                                <span><MdOutlineSignalCellularAlt /></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-text">
                                        <p className='best-sller-price'>$75.65</p>
                                        <h5>Manicure Gel Nails, Makeup</h5>
                                        <img src={Rating} alt="" />
                                    </div>
                                </div>
                                <div className="card mb-4">
                                    <div className="card-image-part">
                                        <img src={BestSeller5} alt="" />
                                        <div className="best-seller-offer">
                                            <p>Sale</p>
                                        </div>
                                        <div className="best-seller-icons">
                                            <div className="best-seller-icon">
                                                <span><FaCartPlus className='icon'/></span>
                                            </div>
                                            <div className="best-seller-icon">
                                                <span><FaHeart /></span>
                                            </div>
                                            <div className="best-seller-icon">
                                                <span><FaEye /></span>
                                            </div>
                                            <div className="best-seller-icon">
                                                <span><MdOutlineSignalCellularAlt /></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-text">
                                        <p className='best-sller-price'>$350.65</p>
                                        <h5>Perfumes S, Orlane Paris</h5>
                                        <img src={Rating} alt="" />
                                    </div>
                                </div>
                                <div className="card mb-4">
                                    <div className="card-image-part">
                                        <img src={BestSeller6} alt="" />
                                        {/* <div className="best-seller-offer">
                                            <p>Sale</p>
                                        </div> */}
                                        <div className="best-seller-icons">
                                            <div className="best-seller-icon">
                                                <span><FaCartPlus className='icon'/></span>
                                            </div>
                                            <div className="best-seller-icon">
                                                <span><FaHeart /></span>
                                            </div>
                                            <div className="best-seller-icon">
                                                <span><FaEye /></span>
                                            </div>
                                            <div className="best-seller-icon">
                                                <span><MdOutlineSignalCellularAlt /></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-text">
                                        <p className='best-sller-price'>$460.65</p>
                                        <h5>Natural Skin Care Cleanser</h5>
                                        <img src={Rating} alt="" />
                                    </div>
                                </div>
                                <div className="card mb-4">
                                    <div className="card-image-part">
                                        <img src={BestSeller7} alt="" />
                                        <div className="best-seller-offer">
                                            <p>New</p>
                                        </div>
                                        <div className="best-seller-icons">
                                            <div className="best-seller-icon">
                                                <span><FaCartPlus className='icon'/></span>
                                            </div>
                                            <div className="best-seller-icon">
                                                <span><FaHeart /></span>
                                            </div>
                                            <div className="best-seller-icon">
                                                <span><FaEye /></span>
                                            </div>
                                            <div className="best-seller-icon">
                                                <span><MdOutlineSignalCellularAlt /></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-text">
                                        <p className='best-sller-price'>$320.65</p>
                                        <h5>NArgan Oil Hair Conditioner</h5>
                                        <img src={Rating} alt="" />
                                    </div>
                                </div>
                                <div className="card mb-4">
                                    <div className="card-image-part">
                                        <img src={BestSeller8} alt="" />
                                        <div className="best-seller-offer">
                                            <p>New</p>
                                        </div>
                                        <div className="best-seller-icons">
                                            <div className="best-seller-icon">
                                                <span><FaCartPlus className='icon'/></span>
                                            </div>
                                            <div className="best-seller-icon">
                                                <span><FaHeart /></span>
                                            </div>
                                            <div className="best-seller-icon">
                                                <span><FaEye /></span>
                                            </div>
                                            <div className="best-seller-icon">
                                                <span><MdOutlineSignalCellularAlt /></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-text">
                                        <p className='best-sller-price'>$185.65</p>
                                        <h5>Lip Balm Oriflame Cream</h5>
                                        <img src={Rating} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="best-seller-button-part  d-flex align-items-center justify-content-center mt-4 ">
                            <a href="#" className='best-seller-product-button'>See All Products <FaArrowRightLong/></a>
                        </div>
                    </div>
                </div>

                <div className="special-offer mb-5" style={{backgroundImage: `url(${SpecialOffer})`}}>
                    <div className="container">
                        <p>SPECIAL OFFER</p>
                        <h4>Beauty Inspired by Real
                        Shine In Life </h4>
                        <span>Completely grow maintainable niches via tactical services. Progressively synthesize market positioning paradigms for functional architectures. Professionally aggregate.</span>
                        <a href="#">Explore Now <FaArrowRightLong/></a>
                    </div>
                </div>

                <LNews/>

                <div className="home-footer pb-5 mt-5">
                    <div className="container">
                                 <Swiper
                                // slidesPerView={4}
                                // spaceBetween={30}
                                breakpoints={{
                                    320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                    },
                                    640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                    },
                                    768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                    },
                                    992: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                    },
                                    1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                    },
                                    1200: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                    },
                                }}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                  }}
                                // pagination={{
                                // clickable: true,
                                // }}
                                modules={[Pagination, Autoplay]}
                                className="mySwiper footer-swiper d-flex align-items-center"
                                >
                                    <SwiperSlide>
                                        <div className="footer-swiper-slide ">
                                            <div className="footer-swiper-slider-container d-flex align-items-center">
                                                <div className="footer-swiper-slider-icon-container">
                                                    <FaTruckFast className='footer-swiper-slider-icon' />
                                                </div>
                                                <div className="footer-swiper-slider-text">
                                                    <h5 className='footer-swiper-slide-header'>FREE SHIPING</h5>
                                                    <p className='footer-swiper-slide-text'>all orders over <span>$150</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="footer-swiper-slide ">
                                            <div className="footer-swiper-slider-container d-flex align-items-center">
                                                <div className="footer-swiper-slider-icon-container">
                                                    <FaCreditCard  className='footer-swiper-slider-icon' />
                                                </div>
                                                <div className="footer-swiper-slider-text">
                                                    <h5 className='footer-swiper-slide-header'>QUICK PAYMENT</h5>
                                                    <p className='footer-swiper-slide-text'>100% secure payment</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="footer-swiper-slide ">
                                        <div className="footer-swiper-slider-container d-flex align-items-center">
                                            <div className="footer-swiper-slider-icon-container">
                                                    <GoPackageDependencies className='footer-swiper-slider-icon' />
                                                </div>
                                                <div className="footer-swiper-slider-text">
                                                    <h5 className='footer-swiper-slide-header'>FREE RETURNS</h5>
                                                    <p className='footer-swiper-slide-text'>Return money within 30 days</p>
                                                </div>
                                        </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="footer-swiper-slide ">
                                            <div className="footer-swiper-slider-container d-flex align-items-center">
                                                <div className="footer-swiper-slider-icon-container">
                                                    <MdSupportAgent className='footer-swiper-slider-icon' />
                                                </div>
                                                <div className="footer-swiper-slider-text">
                                                    <h5 className='footer-swiper-slide-header'>24/7 SUPPORT</h5>
                                                    <p className='footer-swiper-slide-text'>Quick Support</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>

                        <div className="container-head row mt-5">
                            <div className="logo  col-12 col-md-4 order-md-2 pb-4">
                                <img src={LogoB}b className='d-block' alt="" />
                            </div>
                            <div className="social-media-icon col-12 col-md-4 order-md-1 pb-4">
                                <div className="social-media-icon-container">
                                    <FaFacebookF className='footer-icons' />
                                </div>
                                <div className="social-media-icon-container">
                                    <FaTwitter className='footer-icons' />
                                </div>
                                <div className="social-media-icon-container">
                                    <FaInstagram className='footer-icons' />
                                </div>
                                <div className="social-media-icon-container">
                                    <FaPinterestP className='footer-icons' />
                                </div>
                            </div>
                            <div className="paymet-methods col-12 col-md-4 order-md-3 pb-4">
                                <img src={PaymentMethods} alt="" />
                            </div>
                        </div>

                        <div className="line mb-4 mt-4">
                        </div>

                        <div className="footer-lists row col-12">
                            <div className="nor-lists col-6 pb-4 col-lg-2">
                                <h5 className='list-header'>My Account</h5>
                                <ul>
                                    <li>My Account</li>
                                    <li>View Cart</li>
                                    <li>Wish list</li>
                                    <li>Compare</li>
                                    <li>New Products</li>
                                </ul>
                            </div>
                            <div className="nor-lists col-6 pb-4 col-lg-2">
                                <h5 className='list-header'>Support</h5>
                                <ul>
                                    <li>Help</li>
                                    <li>Contact Us</li>
                                    <li>Feedback</li>
                                    <li>Customer Service</li>
                                    <li>Store Locations</li>
                                </ul>
                            </div>
                            <div className="nor-lists col-12 pb-4 col-md-6 col-lg-2">
                                <h5 className='list-header'>Opening Time</h5>
                                <div className="list-devider row">
                                        <div className="col-5">
                                            <ul>
                                                <li>Mon:</li>
                                                <li>Tue:</li>
                                                <li>Wed:</li>
                                                <li>Fri:</li>
                                                <li>Sat:</li>
                                                <li>Sun:</li>
                                            </ul>
                                        </div>
                                        <div className="col-7">
                                            <ul>
                                                <li>8AM - 10PM</li>
                                                <li>8AM - 10PM</li>
                                                <li>8AM - 7PM</li>
                                                <li>7AM - 12PM</li>
                                                <li>9AM - 8PM</li>
                                                <li>Closed</li>
                                            </ul>
                                        </div>
                                </div>
                            </div>

                            <div className="nor-lists col-12 pb-4 col-md-6 col-lg-3">
                                <h5 className='list-header'>Contact Us</h5>
                                <ul>
                                    <li><FaLocationDot className='footer-list-icon' /> 830 Broad way, New York, NY 10003,
                                    United States</li>
                                    <li><FaPhone className='footer-list-icon' /> +18008660286</li>
                                    <li><IoMdMail className='footer-list-icon' /> aetor.info@gmail.com</li>
                                </ul>
                            </div>
                            <div className="nor-lists col-12 pb-4 col-lg-3">
                                <h5 className='list-header'>News Letter</h5>
                                <ul>
                                    <li className='footer-sub'>Authoritatively morph 24/7 potentialities with error-free partnerships.</li>
                                </ul>
                                <form action="submit">
                                    <div className="btn-group">
                                        <input className='sub-input' type="text" placeholder='Enter your email....' />
                                        <button className='sub-button'>Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                                      
                    </div>
                </div>

                

            </div>
            
        </div>
    );
};

export default Home;