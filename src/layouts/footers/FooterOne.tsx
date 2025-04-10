"use client"
import InjectableSvg from "@/components/common/InjectableSvg"
import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl";

import shape_1 from "@/assets/img/images/cta_shape.png"
import shape_2 from "@/assets/img/images/footer_shape01.png"
import shape_3 from "@/assets/img/images/footer_shape02.png"
import logo from "@/assets/img/logo/logo2.png"

const FooterOne = () => {
   const t = useTranslations("Footer");
   return (
      <footer className="footer__area fix">
         <div className="container">
            <div className="cta__wrap fix">
               <div className="row align-items-center">
                  <div className="col-lg-7">
                     <div className="cta__content">
                        <h3 className="title">{t("title1")} <br /> {t("title2")}</h3>
                     </div>
                  </div>
                  <div className="col-lg-5">
                     <div className="cta__btn text-end">
                        <Link href="/services" className="btn btn-two">{t("button")}<InjectableSvg src="assets/img/icon/right_arrow.svg" alt="" className="injectable" /></Link>
                     </div>
                  </div>
               </div>
               <div className="cta__shape">
                  <Image src={shape_1} alt="img" data-aos="fade-up-right" data-aos-delay="400" />
               </div>
            </div>
            <div className="footer__top">
               <div className="row">
                  <div className="col-xl-4 col-lg-5 col-md-6">
                     <div className="footer__widget">
                        <div className="footer__logo">
                           <Link href="/"><Image src={logo} alt="logo" /></Link>
                        </div>
                        <div className="footer__content">
                           <p>{t("text")}</p>
                        </div>
                        <form onSubmit={(e) => (e.preventDefault())} className="footer__newsletter">
                           <div className="form-grp">
                              <input type="email" placeholder={t("email")} />
                              <button type="submit">{t("button2")}</button>
                           </div>
                           <span>{t("warning")}</span>
                        </form>
                     </div>
                  </div>
                  <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
                     <div className="footer__widget">
                        <h4 className="footer__widget-title">{t("column1.title")}</h4>
                        <div className="footer__link">
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
                        <h4 className="footer__widget-title">{t("column2.title")}</h4>
                        <div className="footer__link">
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
                        <h4 className="footer__widget-title">{t("column3.title")}</h4>
                        <div className="footer__info-wrap">
                           <ul className="list-wrap">
                              <li>
                                 <i className="flaticon-location-1"></i>
                                 <p>{t("column3.item1_1")} <br /> {t("column3.item1_2")}</p>
                              </li>
                              <li>
                                 <i className="flaticon-telephone"></i>
                                 <Link href="tel:0123456789">+994 (050) 988 97 77</Link>
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
            <div className="footer__bottom">
               <div className="row align-items-center">
                  <div className="col-md-7">
                     <div className="copyright-text">
                        <p>{t("copy")}</p>
                     </div>
                  </div>
                  <div className="col-md-5">
                     <div className="footer__social">
                        <ul className="list-wrap">
                           <li><Link href="https://www.linkedin.com/company/i̇ls-llc/" target="_blank"><i className="fab fa-linkedin"></i></Link></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="footer__shape">
            <Image src={shape_2} alt="shape" data-aos="fade-down" data-aos-delay="400" />
            <Image src={shape_3} alt="shape" data-aos="fade-left" data-aos-delay="400" />
         </div>
      </footer>
   )
}

export default FooterOne
