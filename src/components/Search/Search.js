import React, {useContext} from 'react';
import {CustomContext} from "../../Context";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Logo2 from '../images/Logo2.png'
import Nike2 from '../images/Nike2.jpeg'
import Nike3 from '../images/Nike3.jfif'
import {Pagination} from "swiper";
import './search.scss'

const Search = () => {

    const {setInput,input} = useContext(CustomContext)

    return (
        <section className="search">
            <div className="search__swiper">
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper" spaceBetween={20}>
                    <SwiperSlide>
                        <img className="search__img" src={Logo2} alt="imageNike"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="search__img" src={Nike2} alt="imageNike"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="search__img" src={Nike3} alt=""/>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="search__card">
                <h2 className="search__trainer">Все кроссовки</h2>
                <div>
                            <span className="search__card-svg">
                                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z" stroke="#E4E4E4"/>
                        </svg>
                            </span>
                    <input value={input} className="search__input" type="search" placeholder="Пойск..." onChange={(e)=> {
                        setInput(e.target.value)
                    }}/>
                </div>
            </div>
        </section>
    );
};

export default Search;