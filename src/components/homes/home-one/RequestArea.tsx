"use client"
import Image from "next/image";
import { useState } from "react";

import request_shape from "@/assets/img/images/request_shape.svg"
import { useTranslations } from "next-intl";

const tab_title: string[] = ["Request a Quote", "Track & Trace"];

interface PropsType {
   style?: boolean;
}

const RequestArea = ({ style }: PropsType) => {

   const [activeTab, setActiveTab] = useState(0);

   const handleTabClick = (index: number) => {
      setActiveTab(index);
   };

   const t = useTranslations("HomePage.section7")

   return (
      <div className={style ? "request__area-two" : "request__area"}>
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="request__wrap">
                     <div className="request__nav">
                        <ul className={`nav nav-tabs ${style ? "request__nav-two" : ""}`} id="myTab">
                           {tab_title.map((tab, index) => (
                              <li key={index} onClick={() => handleTabClick(index)} className="nav-item" role="presentation">
                                 <button className={`nav-link ${activeTab === index ? "active" : ""}`}>{t(`item${index+1}.title`)}</button>
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className="request__tab-wrap">
                        <div className="tab-content" id="myTabContent">
                           <div className={`tab-pane fade ${activeTab === 0 ? 'show active' : ''}`} id="request-tab-pane">
                              <form onSubmit={(e) => e.preventDefault()} className="request__form">
                                 <span className="title">{t("item1.category1.title")}</span>
                                 <div className="row gutter-20">
                                    <div className="col-lg-4">
                                       <div className="form-grp">
                                          <input type="text" placeholder={t("item1.category1.list.item1")} />
                                       </div>
                                    </div>
                                    <div className="col-lg-4">
                                       <div className="form-grp">
                                          <input type="email" placeholder={t("item1.category1.list.item2")} />
                                       </div>
                                    </div>
                                    <div className="col-lg-4">
                                       <div className="form-grp">
                                          <input type="text" placeholder={t("item1.category1.list.item3")} />
                                       </div>
                                    </div>
                                 </div>
                                 <span className="title">{t(`item1.category2.title`)}</span>
                                 <div className="row gutter-20">
                                    <div className="col-lg-4">
                                       <div className="form-grp">
                                          <div className="form-grp select-grp">
                                             <select name="interest" className="orderby">
                                                <option value="Freight Type">{t(`item1.category2.list.item1.item1`)}</option>
                                                <option value="Freight Type">{t(`item1.category2.list.item1.item2`)}</option>
                                                <option value="Freight Type">{t(`item1.category2.list.item1.item3`)}</option>
                                             </select>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-lg-4">
                                       <div className="form-grp">
                                          <input type="text" placeholder={t(`item1.category2.list.item2`)} />
                                       </div>
                                    </div>
                                    <div className="col-lg-4">
                                       <div className="form-grp">
                                          <input type="text" placeholder={t(`item1.category2.list.item3`)} />
                                       </div>
                                    </div>
                                    <div className="col-lg-4">
                                       <div className="form-grp select-grp">
                                          <select name="interest" className="orderby">
                                             <option value="Incoterms">{t(`item1.category2.list.item4.item1`)}</option>
                                             <option value="Incoterms">{t(`item1.category2.list.item4.item2`)}</option>
                                             <option value="Incoterms">{t(`item1.category2.list.item4.item3`)}</option>
                                          </select>
                                       </div>
                                    </div>
                                    <div className="col-lg-4">
                                       <div className="form-grp-wrap">
                                          <div className="form-grp">
                                             <input type="text" placeholder={t(`item1.category2.list.item5`)} />
                                          </div>
                                          <div className="form-grp">
                                             <input type="text" placeholder={t(`item1.category2.list.item6`)} />
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-lg-4">
                                       <div className="form-grp-wrap">
                                          <div className="form-grp">
                                             <input type="text" placeholder={t(`item1.category2.list.item7`)} />
                                          </div>
                                          <div className="form-grp">
                                             <input type="text" placeholder={t(`item1.category2.list.item8`)} />
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className={`request__radio-wrap ${style ? "request__radio-wrap-two" : ""}`}>
                                    <div className="form-check">
                                       <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
                                       <label className="form-check-label" htmlFor="flexRadioDefault1">
                                          {t(`item1.category2.list.item9.item1`)}
                                       </label>
                                    </div>
                                    <div className="form-check">
                                       <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                       <label className="form-check-label" htmlFor="flexRadioDefault2">
                                          {t(`item1.category2.list.item9.item2`)}
                                       </label>
                                    </div>
                                    <div className="form-check">
                                       <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                       <label className="form-check-label" htmlFor="flexRadioDefault3">
                                          {t(`item1.category2.list.item9.item3`)}
                                       </label>
                                    </div>
                                    <div className="form-check">
                                       <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                                       <label className="form-check-label" htmlFor="flexRadioDefault4">
                                          {t(`item1.category2.list.item9.item4`)}
                                       </label>
                                    </div>
                                 </div>
                                 <button type="submit" className="btn">{t(`item1.category2.list.item10`)}</button>
                              </form>
                           </div>
                           <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`} id="track-tab-pane">
                              <form onSubmit={(e) => e.preventDefault()} className="request__form">
                                 <span className="title">{t("item2.category1.title")}</span>
                                 <div className="form-grp select-grp">
                                    <select name="interest" className="orderby">
                                       <option value="Incoterms">{t("item2.category1.desc.item1")}</option>
                                       <option value="Incoterms">{t("item2.category1.desc.item2")}</option>
                                       <option value="Incoterms">{t("item2.category1.desc.item3")}</option>
                                    </select>
                                 </div>
                                 <span className="title">{t("item2.category2.title")}</span>
                                 <div className="form-grp">
                                    <textarea name="comment" placeholder={t("item2.category2.desc")}></textarea>
                                 </div>
                                 <div className={`request__radio-wrap ${style ? "request__radio-wrap-two" : ""}`}>
                                    <div className="form-check">
                                       <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" defaultChecked />
                                       <label className="form-check-label" htmlFor="flexRadioDefault5">
                                          {t("item2.category3.item1")}
                                       </label>
                                    </div>
                                    <div className="form-check">
                                       <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault6" />
                                       <label className="form-check-label" htmlFor="flexRadioDefault6">
                                          {t("item2.category3.item2")}
                                       </label>
                                    </div>
                                    <div className="form-check">
                                       <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault7" />
                                       <label className="form-check-label" htmlFor="flexRadioDefault7">
                                          {t("item2.category3.item3")}
                                       </label>
                                    </div>
                                    <div className="form-check">
                                       <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault8" />
                                       <label className="form-check-label" htmlFor="flexRadioDefault8">
                                          {t("item2.category3.item4")}
                                       </label>
                                    </div>
                                 </div>
                                 <button type="submit" className="btn">{t("item2.button")}</button>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {style && <div className="request__shape">
            <Image src={request_shape} alt="shape" data-aos="fade-down" data-aos-delay="400" />
         </div>}
      </div>
   )
}

export default RequestArea
