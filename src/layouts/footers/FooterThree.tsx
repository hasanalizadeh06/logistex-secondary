import Image from "next/image"
import Link from "next/link"

import logo from "@/assets/img/logo/logo2.png"
import shape_1 from "@/assets/img/images/h3_footer_shape01.svg"
import shape_2 from "@/assets/img/images/h3_footer_shape02.svg"
import { useTranslations } from "next-intl"

const FooterThree = () => {
   const t = useTranslations("Footer")
   return (
      <footer className="footer__area footer__area-four fix">
         <div className="container">
            <div className="footer__top footer__top-two">
               <div className="row">
                  <div className="col-xl-4 col-lg-5 col-md-6">
                     <div className="footer__widget">
                        <div className="footer__logo">
                           <Link href="/"><Image style={{maxWidth:230}} src={logo} alt="logo" /></Link>
                        </div>
                        <div className="footer__content footer__content-three">
                           <p>{t("text")}</p>
                        </div>
                        <div className="footer__social footer__social-three">
                           <ul className="list-wrap">
                              <li><Link href="https://www.linkedin.com/company/i̇ls-llc/" target="_blank"><i className="fab fa-linkedin"></i></Link></li>
                           </ul>
                        </div>
                        <div className="copyright-text copyright-text-three">
                           <p>{t("copy")}</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
                     <div className="footer__widget">
                        <h4 className="footer__widget-title footer__widget-title-two">{t("column1.title")}</h4>
                        <div className="footer__link footer__link-three">
                           <ul className="list-wrap">
                              <li><Link href="/services-details">{t("column1.item1")}</Link></li>
                              <li><Link href="/services-details">{t("column1.item2")}</Link></li>
                              <li><Link href="/services-details">{t("column1.item3")}</Link></li>
                              <li><Link href="/services-details">{t("column1.item4")}</Link></li>
                              <li><Link href="/services-details">{t("column1.item5")}</Link></li>
                              <li><Link href="/services-details">{t("column1.item6")}</Link></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                     <div className="footer__widget">
                        <h4 className="footer__widget-title footer__widget-title-two">{t("column2.title")}</h4>
                        <div className="footer__link footer__link-three">
                           <ul className="list-wrap">
                              <li><Link href="/how-it-work">{t("column2.item1")}</Link></li>
                              <li><Link href="/client">{t("column2.item2")}</Link></li>
                              <li><Link href="/about">{t("column2.item3")}</Link></li>
                              <li><Link href="/service">{t("column2.item4")}</Link></li>
                              <li><Link href="/contact">{t("column2.item5")}</Link></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6">
                     <div className="footer__widget">
                        <h4 className="footer__widget-title footer__widget-title-two">{t("column3.title")}</h4>
                        <div className="footer__info-wrap footer__info-wrap-three">
                           <ul className="list-wrap">
                              <li>
                                 <i className="flaticon-location-1"></i>
                                 <p>{t("column3.item1_1")} <br /> {t("column3.item1_2")}</p>
                              </li>
                              <li>
                                 <i className="flaticon-telephone"></i>
                                 <a href="tel:0123456789">+(994) 050 988 97 77</a>
                              </li>
                              <li>
                                 <i className="flaticon-time"></i>
                                 <p>{t("column3.time1")}<br />{t("column3.time2")}</p>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="footer__shape footer__shape-two footer__shape-three">
            <Image src={shape_1} alt="shape" />
            <Image src={shape_2} alt="shape" data-aos="fade-left" data-aos-delay="400" />
         </div>
      </footer>
   )
}

export default FooterThree
