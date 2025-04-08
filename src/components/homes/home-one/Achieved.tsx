"use client"
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import achieve_img from "@/assets/img/images/achieved_img.png";
import shape from "@/assets/img/images/achieved_shape.png";
import { use } from "react";
import { useTranslations } from "next-intl";

const Achieved: React.FC = () => {
   const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.75,  
   });
   const t = useTranslations("HomePage.section5")

   return (
      <section className="achieved__area fix">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-6 col-md-10 order-0 order-lg-2">
                  <div className="achieved__img">
                     <Image
                        src={achieve_img}
                        alt="img"
                        className="wow bounceInDown"
                        data-wow-delay=".3s"
                     />
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="achieved__content">
                     <div className="section__title mb-20">
                        <span className="sub-title">{t("subtitle")}</span>
                        <h2 className="title">
                           {t("title")}
                        </h2>
                     </div>
                     <p>
                        {t("desc")}
                     </p>
                     <div className="progress__wrap" ref={ref}>
                        <div className="progress__item">
                           <div className="progress__item-top">
                              <h3 className="progress__title">
                                 {t("list.item1")}
                              </h3>
                              <div className="progress-value">
                                 <span className="counter-number">82</span>%
                              </div>
                           </div>
                           <div className="progress">
                              <div
                                 className="progress-bar"
                                 style={{
                                    width: "82%",
                                    animation: inView ? "animate-positive 1.8s" : "none",
                                    opacity: inView ? "1" : "0",
                                 }}
                              ></div>
                           </div>
                        </div>
                        <div className="progress__item">
                           <div className="progress__item-top">
                              <h3 className="progress__title">
                                 {t("list.item2")}
                              </h3>
                              <div className="progress-value">
                                 <span className="counter-number">90</span>%
                              </div>
                           </div>
                           <div className="progress">
                              <div
                                 className="progress-bar"
                                 style={{
                                    width: "90%",
                                    animation: inView ? "animate-positive 1.8s" : "none",
                                    opacity: inView ? "1" : "0",
                                 }}
                              ></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="achieved__shape">
            <Image src={shape} alt="shape" />
         </div>
      </section>
   );
};

export default Achieved;
