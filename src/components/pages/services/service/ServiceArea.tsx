import InjectableSvg from "@/components/common/InjectableSvg"
import service_data from "@/data/ServiceData"
import Image from "next/image"
import Link from "next/link"
import { TiDocumentText } from "react-icons/ti";


const ServiceArea = () => {
  return (
    <section className="services__area-five grey-bg section-pt-120 section-pb-90">
      <div className="container">
        <div className="section__title mb-15">
            <span className="sub-title">Our Services</span>
            <h2 className="title">Comprehensive Logistics Solutions for a Global Market</h2>
            <p>At International Logistics Services (ILS), we provide a wide range of efficient and secure transportation and customs solutions tailored to meet the diverse needs of businesses and individuals worldwide. With expertise in multiple regions, including Azerbaijan, Russia, Kazakhstan, Turkey, China, European countries, the UAE, and Georgia, we offer customized logistics services to ensure seamless cargo movement across borders.</p>
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
                  <h4 className="title">{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
          <p>
            Customs Clearance and Documentation
            <ul>
              <li>Accurate and timely completion of customs documentation.</li>
              <li>Smooth clearance of goods at international borders.</li>
              <li>Assistance with regulatory compliance and duty payments.</li>
              <li>Preparation of essential documents such as CMR, Invoice, and Packing List.</li>
            </ul>
            Partner with ILS for Seamless Logistics
            At ILS, we go beyond simple freight forwarding—we deliver trust, efficiency, and reliability with every shipment. Whether you're moving cargo across continents or need specialized customs solutions, we are your trusted logistics partner.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ServiceArea
