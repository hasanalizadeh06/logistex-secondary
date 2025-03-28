import InjectableSvg from "@/components/common/InjectableSvg"
import Image from "next/image"
import Link from "next/link"

import banner_img from "@/assets/img/banner/banner_img01.png"
import shape_1 from "@/assets/img/banner/banner_shape.png"
import shape_2 from "@/assets/img/banner/banner_img02.png"

const Hero = () => {
   return (
      <section className="banner__area banner__bg" style={{backgroundImage:`url(/assets/img/banner/banner_bg.jpg)`}}>
         <div className="container">
            <div className="row align-items-end">
               <div className="col-lg-6">
                  <div className="banner__content">
                     <span className="sub-title" data-aos="fade-up" data-aos-delay="200">Fastest & Secure Logistics</span>
                     <h2 className="title" data-aos="fade-up" data-aos-delay="400">Delivering the Full Range of Logistic Solutions</h2>
                     <p data-aos="fade-up" data-aos-delay="600">At ILS, we connect businesses with seamless and efficient logistics solutions worldwide. From freight forwarding to customs clearance, our expertise ensures smooth and timely deliveries across industries.</p>
                     <Link href="/services" className="btn" data-aos="fade-up" data-aos-delay="800">Explore Our Services <InjectableSvg src="/assets/img/icon/right_arrow.svg" alt="" className="injectable" /></Link>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="banner__img">
                     <Image src={banner_img} alt="img" data-aos="fade-left" data-aos-delay="800" />
                  </div>
               </div>
            </div>
         </div>
         <div className="banner__shape-wrap">
            <Image src={shape_1} alt="shape" className="rotateme" />
            <Image src={shape_2} alt="img" className="wow bounceInDown" data-wow-delay=".3s" />
         </div>
      </section>
   )
}

export default Hero
