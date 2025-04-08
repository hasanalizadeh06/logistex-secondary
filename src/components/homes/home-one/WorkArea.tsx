import InjectableSvg from "@/components/common/InjectableSvg";
import work_data from "@/data/WorkData";
import { useTranslations } from "next-intl";

const WorkArea = () => {
   const t = useTranslations("HomePage.section9")
   return (
      <section className="work__area work__bg" style={{ backgroundImage: `url(/assets/img/bg/vector_bg.svg)` }}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-6">
                  <div className="section__title text-center white-title mb-50">
                     <span className="sub-title">{t("subtitle")}</span>
                     <h2 className="title">{t("title.part1")} <br /> {t("title.part2")}</h2>
                  </div>
               </div>
            </div>
            <div className="work__item-wrap">
               <div className="row justify-content-center">
                  {work_data.map((item, i) => (
                     <div key={item.id} className="col-lg-3 col-sm-6">
                        <div className="work__item">
                           <div className="work__icon">
                              <i className={item.icon}></i>
                              <span className="number">{item.number}</span>
                           </div>
                           <div className="work__content">
                              <h4 className="title">{t(`list.item${i+1}.title`)}</h4>
                              <p>{t(`list.item${i+1}.text`)}</p>
                           </div>
                           <div className="work__shape">
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

export default WorkArea
