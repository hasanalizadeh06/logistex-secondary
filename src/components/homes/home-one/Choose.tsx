import Image from "next/image"

import choose_thumb1 from "@/assets/img/images/choose_img01.jpg"
import InjectableSvg from "@/components/common/InjectableSvg"
import Link from "next/link"
import Count from "@/components/common/Count"
import { useTranslations } from "next-intl"

const Choose = () => {
   const t = useTranslations("HomePage.section4")
   return (
      <section className="choose__area choose__bg" style={{ backgroundImage: `/assets/img/bg/vector_bg.svg` }}>
         <div className="container">
            <div className="row align-items-center justify-content-center">
               <div className="col-lg-5 col-md-10">
                  <div className="choose__img wow img-custom-anim-left animated" data-wow-duration="1.5s" data-wow-delay="0.2s">
                     <Image src={choose_thumb1} alt="img" />
                  </div>
               </div>
               <div className="col-lg-7">
                  <div className="choose__content">
                     <div className="section__title white-title mb-25">
                        <span className="sub-title">{t("subtitle")}</span>
                        <h2 className="title">{t("title.part1")} <br /> {t("title.part2")} <br /> {t("title.part3")}</h2>
                     </div>
                     <div className="choose__content-bottom">
                        <div className="left-side">
                           <p>
                              <strong>✔ {t("items.item1.title")}:</strong> {t("items.item1.text")}  
                              <br/><strong>✔ {t("items.item2.title")}:</strong> {t("items.item2.text")}
                              <br/><strong>✔ {t("items.item3.title")}:</strong> {t("items.item3.text")}
                              <br/><strong>✔ {t("items.item4.title")}:</strong> {t("items.item4.text")}
                           </p>
                        </div>
                        <div className="counter__wrap">
                           <div className="counter__item">
                              <div className="counter__icon">
                                 <i className="flaticon-package"></i>
                              </div>
                              <div className="counter__content">
                                 <h2 className="count"><span className="counter-number"><Count number={9.5} /></span>M</h2>
                                 <p>{t("stats.title")}</p>
                              </div>
                           </div>
                           <div className="counter__item">
                              <div className="counter__icon">
                                 <i className="flaticon-planet-earth"></i>
                              </div>
                              <div className="counter__content">
                                 <h2 className="count"><span className="counter-number"><Count number={15.9} /></span>M</h2>
                                 <p>{t("stats.text")}</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Choose
