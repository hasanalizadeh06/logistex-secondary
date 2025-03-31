import img_1 from "@/assets/img/brand/THY-LOGO.png"
import img_2 from "@/assets/img/brand/azal_logo.png"
import img_3 from "@/assets/img/brand/silkway_logo.png"
import Image, { StaticImageData } from "next/image"

const partner_logo: StaticImageData[] = [img_1, img_2, img_3]

const PartnerArea = () => {
   return (
      <section className="partner__area section-py-120">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="section__title text-center mb-50">
                     <span className="sub-title">Our Partners</span>
                     <h2 className="title">Our World wide Partners</h2>
                  </div>
               </div>
            </div>
            <div className="row gx-0">
               <div className="col-lg-12">
                  <div className="partner__item-wrap">
                     {partner_logo.map((item, i) => (
                        <div key={i} className="partner__item">
                           <Image src={item} alt="img" />
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default PartnerArea
