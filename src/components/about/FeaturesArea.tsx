import Image from "next/image"
import shape from "@/assets/img/images/features_shape.png"
import { useTranslations } from "next-intl"

const FeaturesArea = () => {
   const t = useTranslations("AboutPage.section2")
   return (
      <section className="features__area section-pb-90">
         <div className="container">
            <div className="row justify-content-center gutter-24">
               <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
                  <div className="features__item">
                     <div className="features__icon">
                        <i className="flaticon-train"></i>
                     </div>
                     <div className="features__content">
                        <h2 style={{fontSize:"16px"}} className="title">{t("item1.title")}</h2>
                        <p>{t("item1.text")}</p>
                        <h2 className="number">01</h2>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="600">
                  <div className="features__item">
                     <div className="features__icon">
                        <i className="flaticon-warehouse-1"></i>
                     </div>
                     <div className="features__content">
                        <h2 style={{fontSize:"16px"}} className="title">{t("item2.title")}</h2>
                        <p>{t("item2.text")}</p>
                        <h2 className="number">01</h2>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="800">
                  <div className="features__item">
                     <div className="features__icon">
                        <i className="flaticon-air-freight"></i>
                     </div>
                     <div className="features__content">
                        <h2 style={{fontSize:"16px"}} className="title">{t("item3.title")}</h2>
                        <p>{t("item3.text")}</p>
                        <h2 className="number">02</h2>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="1000">
                  <div className="features__item">
                     <div className="features__icon">
                        <i className="flaticon-ship"></i>
                     </div>
                     <div className="features__content">
                        <h2 style={{fontSize:"16px"}} className="title">{t("item4.title")}</h2>
                        <p>{t("item4.text")}</p>
                        <h2 className="number">03</h2>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="features__shape">
            <Image src={shape} alt="shape" data-aos="fade-left" data-aos-delay="400" />
         </div>
      </section>
   )
}

export default FeaturesArea
