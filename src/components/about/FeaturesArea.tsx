import Image from "next/image"
import shape from "@/assets/img/images/features_shape.png"

const FeaturesArea = () => {
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
                        <h2 className="title">Rail Freight</h2>
                        <p>Sustainable and reliable transport for bulk shipments.</p>
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
                        <h2 className="title">Land Freight</h2>
                        <p>Reliable road transport solutions for both domestic and international shipments</p>
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
                        <h2 className="title">Air Freight</h2>
                        <p>Fast and efficient delivery for urgent and high-value cargo.</p>
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
                        <h2 className="title">Sea Freight</h2>
                        <p>Cost-effective shipping solutions for large-scale and international freight.</p>
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
