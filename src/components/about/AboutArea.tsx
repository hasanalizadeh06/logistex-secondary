import Image from 'next/image'
import about_1 from "@/assets/img/images/inner_about_img01.jpg"
import about_2 from "@/assets/img/images/inner_about_img02.jpg"
import { useTranslations } from 'next-intl'

const AboutArea = () => {
   const t = useTranslations("AboutPage")
   return (
      <section className="about__area-two section-py-120">
         <div className="container">
            <div className="row align-items-center justify-content-center gutter-24">
               <div className="col-lg-6 col-md-9">
                  <div className="about__img-two">
                     <Image src={about_1} width={400} height={200} alt="img" data-aos="fade-right" data-aos-delay="400" />
                     <Image src={about_2} alt="img" data-aos="fade-up" data-aos-delay="600" />
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="about__content-two">
                     <div className="section__title section__title-two mb-20">
                        <span className="sub-title">{t("section1.subtitle")}</span>
                        <h2 className="title">{t("section1.title")}</h2>
                     </div>
                     <p className="info-one">{t("section1.text.part1")}</p>
                     <div className="about__content-inner">
                        <div className="about__list-box about__list-box-two">
                           <ul className="list-wrap">
                              <li><i className="flaticon-check"></i>{t("section1.text.part2.item1")}</li>
                              <li><i className="flaticon-check"></i>{t("section1.text.part2.item2")}</li>
                              <li><i className="flaticon-check"></i>{t("section1.text.part2.item3")}</li>
                              <li><i className="flaticon-check"></i>{t("section1.text.part2.item4")}</li>
                           </ul>
                        </div>
                        <div className="about__clients-box">
                           <span>{t("section1.text.part3.item1")}</span>
                           <div className="counter__item">
                              <div className="counter__icon">
                                 <i className="flaticon-planet-earth"></i>
                              </div>
                              <div className="counter__content">
                                 <h2 className="count"><span className="counter-number">15.9</span>M</h2>
                                 <p>{t("section1.text.part3.item2")}</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <p>{t("section1.text.part4")}</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default AboutArea
