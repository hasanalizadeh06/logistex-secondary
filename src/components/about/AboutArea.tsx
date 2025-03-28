import Image from 'next/image'
import about_1 from "@/assets/img/images/inner_about_img01.jpg"
import about_2 from "@/assets/img/images/inner_about_img02.jpg"

const AboutArea = () => {
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
                        <span className="sub-title">About Logistics Company</span>
                        <h2 className="title">International Logistics Services (ILS) – Reliable Logistics, Seamless Borders</h2>
                     </div>
                     <p className="info-one">At <strong>International Logistics Services (ILS)</strong>, we take pride in providing <strong>efficient, secure, and seamless transportation and customs clearance services</strong> across multiple global markets.</p>
                     <div className="about__content-inner">
                        <div className="about__list-box about__list-box-two">
                           <ul className="list-wrap">
                              <li><i className="flaticon-check"></i>Quality Control System</li>
                              <li><i className="flaticon-check"></i>100% Satisfaction Guarantee</li>
                              <li><i className="flaticon-check"></i>Professional and Qualified</li>
                              <li><i className="flaticon-check"></i>Safe, Reliable And Express</li>
                           </ul>
                        </div>
                        <div className="about__clients-box">
                           <span>Flexible, Improved & Accelerated Solutions!</span>
                           <div className="counter__item">
                              <div className="counter__icon">
                                 <i className="flaticon-planet-earth"></i>
                              </div>
                              <div className="counter__content">
                                 <h2 className="count"><span className="counter-number">15.9</span>M</h2>
                                 <p>Clients Worldwide</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <p> With a strong presence in <strong>Azerbaijan, Russia, Kazakhstan, Turkey, China, European countries, the UAE, and Georgia</strong>, we ensure that businesses and individuals experience hassle-free logistics solutions tailored to their needs.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default AboutArea
