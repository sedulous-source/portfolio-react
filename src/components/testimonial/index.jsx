import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Images from '../../Images';

const Testimonial = () => {
    return (
        <section className="content-section testimonial-section frame-space-before-medium">
            <div className="container">
                <h2 className="text-center">Words From Legends</h2>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={40}
                    breakpoints={{
                        slidesPerView: 1,

                        993: {
                          slidesPerView: 2,
                        },
                      }}
                    pagination={{ clickable: true }}
                    // navigation
                >
                        <SwiperSlide>
                            <div className="testimonial-slide">
                                <div className="testimonial-slide__content">
                                    <h3>Bill Gates</h3>
                                    <p>A visionary leader and co-founder of Microsoft, Bill Gates revolutionized personal computing and continues to inspire with his philanthropic work through the Bill & Melinda Gates Foundation.</p>
                                </div>
                                <div className="testimonial-slide__image">
                                    <img src={Images.billGates} alt="Image" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-slide">
                                <div className="testimonial-slide__content">
                                    <h3>Steve Jobs</h3>
                                    <p>As the co-founder of Apple, Steve Jobs revolutionized technology and design, leaving a legacy of creativity and user-centric innovation.</p>
                                </div>
                                <div className="testimonial-slide__image">
                                    <img src={Images.steveJobs} alt="Image" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-slide">
                                <div className="testimonial-slide__content">
                                    <h3>Ratan Tata</h3>
                                    <p>A revered industrialist and former chairman of the Tata Group, Ratan Tata is celebrated for his ethical leadership and transformative contributions to India's global business stature.</p>
                                </div>
                                <div className="testimonial-slide__image">
                                    <img src={Images.ratanTata} alt="Image" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-slide">
                                <div className="testimonial-slide__content">
                                    <h3>James Gosling</h3>
                                    <p>Known as the "Father of Java," James Gosling's creation of the Java programming language has profoundly impacted modern software development and innovation.</p>
                                </div>
                                <div className="testimonial-slide__image">
                                    <img src={Images.jamesGosling} alt="Image" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-slide">
                                <div className="testimonial-slide__content">
                                    <h3>Jeff Bezoz</h3>
                                    <p>The founder of Amazon, Jeff Bezos, reshaped e-commerce and logistics, showcasing unparalleled innovation and a customer-first approach in global business.</p>
                                </div>
                                <div className="testimonial-slide__image">
                                    <img src={Images.jeffBezos} alt="Image" />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
            </div>
        </section>
    )
};

export default Testimonial;