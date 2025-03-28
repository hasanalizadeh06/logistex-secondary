import Image from "next/image"

import choose_thumb1 from "@/assets/img/images/choose_img01.jpg"
import InjectableSvg from "@/components/common/InjectableSvg"
import Link from "next/link"
import Count from "@/components/common/Count"

const Choose = () => {
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
                        <span className="sub-title">Why Choose ILS</span>
                        <h2 className="title">We are logistics improving <br /> our skills to fulfill delivery <br /> of any level!</h2>
                     </div>
                     <div className="choose__content-bottom">
                        <div className="left-side">
                           <p>
                              <strong>✔ Global Network:</strong> Strong partnerships across multiple regions. 
                              <br/><strong>✔ Fast & Secure Shipments:</strong> Ensuring reliability and speed.
                              <br/><strong>✔ Hassle-Free Documentation:</strong> End-to-end customs and compliance support. 
                              <br/><strong>✔ Customer-Centric Approach:</strong> Dedicated support for every shipment.
                           </p>
                        </div>
                        <div className="counter__wrap">
                           <div className="counter__item">
                              <div className="counter__icon">
                                 <i className="flaticon-package"></i>
                              </div>
                              <div className="counter__content">
                                 <h2 className="count"><span className="counter-number"><Count number={9.5} /></span>M</h2>
                                 <p>Delivered Goods</p>
                              </div>
                           </div>
                           <div className="counter__item">
                              <div className="counter__icon">
                                 <i className="flaticon-planet-earth"></i>
                              </div>
                              <div className="counter__content">
                                 <h2 className="count"><span className="counter-number"><Count number={15.9} /></span>M</h2>
                                 <p>Clients Worldwide</p>
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
