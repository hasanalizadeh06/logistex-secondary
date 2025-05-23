import InjectableSvg from "@/components/common/InjectableSvg";
import work_data from "@/data/WorkData";
import { useTranslations } from "next-intl";

const HowItWorkArea = () => {
   const t = useTranslations("HowItWorks");
   return (
      <section className="work__area-three section-pt-120 section-pb-90">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-6">
                  <div className="section__title text-center mb-50">
                     <span className="sub-title">{t("subtitle")}</span>
                     <h2 className="title">{t("title.part1")} <br/>{t("title.part2")}</h2>
                  </div>
               </div>
            </div>
            <div className="work__item-wrap">
               <div className="row justify-content-center">
                  {work_data.map((item) => (
                     <div key={item.id} className="col-lg-3 col-sm-6">
                        <div className="work__item work__item-two work__item-three">
                           <div className="work__icon work__icon-two work__icon-three">
                              <i className={item.icon}></i>
                              <span className="number">{item.number}</span>
                           </div>
                           <div className="work__content work__content-three">
                              <h4 className="title">{t(`items.${item.title}.title`)}</h4>
                              <p>{t(`items.${item.title}.text`)}</p>
                           </div>
                           <div className="work__shape work__shape-three">
                              <InjectableSvg src="/assets/img/images/work_shape01.svg" alt="" className="injectable" />
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}

export default HowItWorkArea
