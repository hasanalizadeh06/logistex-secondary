/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Thumbs } from 'swiper/modules';
import { Swiper as SwiperClass } from 'swiper/types';
import InjectableSvg from "@/components/common/InjectableSvg";

import author_1 from "@/assets/img/images/author01.png"
import author_2 from "@/assets/img/images/author02.png"
import author_3 from "@/assets/img/images/author03.png"
import author_4 from "@/assets/img/images/author04.png"
import shape from "@/assets/img/images/testimonial_shape.png"
import { useTranslations } from 'next-intl';

const author_data: StaticImageData[] = [author_1, author_2, author_3, author_4];

interface DataType {
   id: number;
   title: string;
   designation: string;
   desc: JSX.Element;
}

const testi_data: DataType[] = [
   {
      id: 1,
      title: "Samantha Richards",
      designation: "CEO, logistex Agency",
      desc: (<>“ As a small business owner, shipping and logistics can be a headache. But ever since we partnered with ILS, everything has been smooth sailing! Their team is incredibly responsive and efficient. Our shipments from China to Azerbaijan always arrive on time, and I love how easy the customs clearance process is. ILS truly offers a hassle-free experience every time. Highly recommend them!”</>),
   },
   {
      id: 2,
      title: "Alexey Ivanov",
      designation: "CEO, logistex Agency",
      desc: (<>“I’ve been working in international trade for over a decade, and I can honestly say that ILS is the best logistics company I’ve ever used. Their services across Russia, Turkey, and the UAE are exceptional. No delays, no hidden fees, and always on top of communication. Whether it's air freight or customs clearance, they handle it all professionally. Truly reliable!”</>),
   },
   {
      id: 3,
      title: "Lena Orlov",
      designation: "CEO, logistex Agency",
      desc: (<>“ I’ve been using ILS for over a year, and they’ve never let me down! Their seamless services from Kazakhstan to European countries are a real game-changer for our business. They handle everything from warehousing to delivery with absolute precision, and their tracking system is fantastic. I’ll definitely continue working with them in the future!”</>),
   },
   {
      id: 4,
      title: "Michael Thompson",
      designation: "CEO, logistex Agency",
      desc: (<>“ ILS has been our go-to logistics partner for shipments from Azerbaijan to Georgia, and their service has been top-notch. They offer transparent pricing, quick delivery, and great customer service. Whenever I have a question, their team is always ready to help. I highly recommend their services for anyone looking for reliable logistics solutions.”</>),
   },
];

interface PropsType {
   style?: boolean;
}

const Testimonial = ({ style }: PropsType) => {

   const [isLoop, setIsLoop] = useState(false);
   useEffect(() => {
      setIsLoop(true);
   }, []);

   const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

   const t = useTranslations("HomePage.section8")

   return (
      <section className={`${style ? "testimonial__area-two section-pt-130 section-pb-130" : "testimonial__area"}`}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-8 col-lg-10">
                  <div className="testimonial__wrap fix">
                     <div className={`testimonial__icon ${style ? "testimonial__icon-two" : ""}`}>
                        <InjectableSvg src="/assets/img/icon/quote.svg" alt="" className="injectable" />
                     </div>
                     <div className="testimonial-slider-dot">
                        <Swiper
                           onSwiper={setThumbsSwiper}
                           spaceBetween={0}
                           slidesPerView={4}
                           loop={true}
                           modules={[Thumbs, Navigation, Autoplay]}
                           className="testimonial__nav"
                        >
                           {author_data.map((img, i) => (
                              <SwiperSlide key={i}>
                                 <button><Image src={img} alt="img" /></button>
                              </SwiperSlide>
                           ))}
                        </Swiper>
                     </div>
                     <Swiper
                        modules={[Thumbs, Navigation, Autoplay]}
                        thumbs={{ swiper: thumbsSwiper }}
                        spaceBetween={0}
                        loop={true}
                        navigation={{
                           nextEl: ".testimonial-button-next",
                           prevEl: ".testimonial-button-prev",
                        }}
                        className="testimonial-active"
                     >
                        {testi_data.map((item, i) => (
                           <SwiperSlide key={item.id} className="swiper-slide">
                              <div className="testimonial__item">
                                 <div className="testimonial__info">
                                    <h2 className="name">{t(`item${i+1}.name`)}</h2>
                                    <span>{t(`item${i+1}.designation`)}</span>
                                 </div>
                                 <div className="testimonial__rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                 </div>
                                 <div className={`testimonial__content ${style ? "testimonial__content-two" : ""}`}>
                                    <p>{t(`item${i+1}.text`)}</p>
                                 </div>
                              </div>
                           </SwiperSlide>
                        ))}
                        <div className="testimonial__nav-wrap">
                           <button className="testimonial-button-prev">
                              <i className="flaticon-left-arrow"></i>
                           </button>
                           <button className="testimonial-button-next">
                              <i className="flaticon-right-arrow"></i>
                           </button>
                        </div>
                     </Swiper>
                  </div>
               </div>
            </div>
            {!style && <div className="testimonial__shape">
               <Image src={shape} alt="img" />
            </div>}
         </div>
      </section>
   )
}

export default Testimonial
