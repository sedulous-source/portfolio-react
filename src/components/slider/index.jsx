import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const SliderSection = () => {
  return (
    <section className="content-section frame-space-before-medium frame-space-after-medium">
      <div className="container">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                id="Layer_1"
                viewBox="0 0 224.9 78"
                width="224.9"
                height="78"
                style={{ enableBackground: 'new 0 0 224.9 78' }}
              >
                <style type="text/css">
                  {`
                    .st0 { fill: #04122D; }
                    .st1 { fill: #3A85E6; }
                    .st2 { clipPath: url(#SVGID_00000174583153869244061720000002380088101234303649_); }
                    .st3 { clipPath: url(#SVGID_00000121987344244277855900000013970389793527646896_); }
                    .st4 { fillRule:evenodd; clipRule:evenodd; fill:#04122D; }
                    .st5 { clipPath: url(#SVGID_00000096775551376354602370000011583946463380953261_); }
                  `}
                </style>
                <defs>
                  <rect id="SVGID_00000020378116848909826620000010396722725207271077_" width="224.9" height="78" />
                </defs>
                <clipPath id="SVGID_00000165230838778504579970000016760261125724403108_">
                  <use href="#SVGID_00000020378116848909826620000010396722725207271077_" style={{ overflow: 'visible' }} />
                </clipPath>
                <g
                  id="Logo_With_Text_00000143585676013215732060000011206622623132799142_"
                  style={{ clipPath: 'url(#SVGID_00000165230838778504579970000016760261125724403108_)' }}
                >
                  <g id="Group_849_00000105396659531099279320000014007648509968291001_">
                    <g id="T3PLANET_00000145058084069686871950000005444631235200268201_">
                      <path fill="#04122D" d="M7.6,39.2H0v-3.2h18.7v3.2h-7.6v25.5H7.6V39.2z" />
                      <path fill="#04122D" d="M23.9,58.9l2.6-1.5c1,2.9,3.7,4.8,6.7,4.7c3.5,0,6.6-2.2,6.6-6.4c0-4.8-4.2-7.4-9-6.1L37.2,39H25.5v-3h16.7L35.4,47c4,0.2,7.9,3.4,7.9,8.7c0,5.7-4.5,9.3-10.1,9.3C28.5,65.1,25.1,62.4,23.9,58.9z" />
                      <path fill="#04122D" d="M49.2,35.9h10.2c6.2,0,10.3,3.9,10.3,9.7s-4,9.7-10.3,9.7h-4.6v9.2h-5.5V35.9z M58.9,50.3c3,0,5.1-1.3,5.1-4.6s-2.1-4.6-5.1-4.6h-4.1v9.3H58.9z" />
                      <path fill="#04122D" d="M75,35.9h5.5v23.6h11.2v5.1H75V35.9z" />
                      <path fill="#04122D" d="M112.3,35.9l11.1,28.7h-6l-1.9-5.2h-12.2l-1.9,5.2h-6l11.1-28.7H112.3z M113.6,54.4l-4.2-11.5l-4.2,11.5L113.6,54.4z" />
                      <path fill="#04122D" d="M127.9,35.9h5.5l13.2,19.6h0.2V35.9h5.5v28.7h-5.5L133.7,45h-0.2v19.6h-5.6V35.9z" />
                      <path fill="#04122D" d="M158.5,35.9h16.3V41h-10.7v6.7h9v5h-9v6.8h11.1v5.1h-16.6V35.9z" />
                      <path fill="#04122D" d="M186.6,41h-6.9v-5.1H199V41h-6.9v23.6h-5.5V41z" />
                    </g>
                  </g>
                  <g id="Group_850_00000176044735223055618270000014526138223497029051_">
                    <path
                      id="Path_15355_00000162351834781144227930000016603829114688815771_"
                      className="st1"
                      d="M218.5,30.1c3.8,8.5,1.9,18.5-4.8,25c10.8-6.3,14.5-20.1,8.2-30.9S201.7,9.7,191,16c-2.3,1.3-4.3,3.1-6,5.1c10-7.3,23.9-5.1,31.2,4.9C217.1,27.3,217.9,28.6,218.5,30.1L218.5,30.1z"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </SwiperSlide>
          <SwiperSlide>Block Menue</SwiperSlide>
          <SwiperSlide>Nitsan</SwiperSlide>
          <SwiperSlide>CNTY</SwiperSlide>
          <SwiperSlide>QUIVO</SwiperSlide>
          <SwiperSlide>Berg Hotel</SwiperSlide>
          <SwiperSlide>Epoche Napoleon</SwiperSlide>
          <SwiperSlide>HiTHIUM</SwiperSlide>
          <SwiperSlide>BAVC</SwiperSlide>
          <SwiperSlide>Wolgast</SwiperSlide>
          <SwiperSlide>Century Casino</SwiperSlide>
          <SwiperSlide>Fisher and Friends</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default SliderSection;