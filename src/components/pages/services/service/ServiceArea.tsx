import InjectableSvg from "@/components/common/InjectableSvg"
import service_data from "@/data/ServiceData"
import { useTranslations } from "next-intl";
import Image from "next/image"
import Link from "next/link"
import { TiDocumentText } from "react-icons/ti";


const ServiceArea = () => {
  const t = useTranslations("Services")
  return (
    <section className="services__area-five grey-bg section-pt-120 section-pb-90">
      <div className="container">
        <div className="section__title mb-15">
            <span className="sub-title">{t("subtitle")}</span>
            <h2 className="title">{t("title")}</h2>
            <p>{t("text")}</p>
        </div>
        <div className="row gutter-24 justify-content-center">
          {service_data.filter((items) => items.page === "inner_page").map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6">
              <div className="services__item-three">
                <div className="services__thumb-three">
                  <Image src={item.img ? item.img : ""} alt="img" />
                </div>
                <div className="services__content-three">
                  <div className="services__icon-three">
                    {item.icon == 'file' ? (<TiDocumentText />) : (<i className={item.icon}></i>)}
                  </div>
                  <h4 className="title">{t(`services.${item.title}.title`)}</h4>
                  <p>{t(`services.${item.title}.text`)}</p>
                </div>
              </div>
            </div>
          ))}
          <p>
            {t("list.title")}
            <ul>
              <li>{t("list.item1")}</li>
              <li>{t("list.item2")}</li>
              <li>{t("list.item3")}</li>
              <li>{t("list.item4")}</li>
            </ul>
            {t("list.footer.item1")}
            {t("list.footer.item2")}
          </p>
        </div>
      </div>
    </section>
  )
}

export default ServiceArea
