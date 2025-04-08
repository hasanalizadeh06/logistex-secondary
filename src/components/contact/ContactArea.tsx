import Link from "next/link"
import ContactForm from "../form/ContactForm"

const ContactArea = () => {
   return (
      <section className="contact__area section-py-120">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="contact-map contact-map-two">
                     <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3037.5703763225547!2d49.9066249760111!3d40.41836737143938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDI1JzA2LjEiTiA0OcKwNTQnMzMuMSJF!5e0!3m2!1saz!2saz!4v1744131803111!5m2!1saz!2saz" style={{ border: "0" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-4 col-sm-6">
                  <div className="contact__info-item">
                     <h4 className="title">Office in Baku</h4>
                     <p className="info-one">Arena plaza, mərtəbə 4, ofis 406 <br/> Baku</p>
                     {/* <h4 className="title"><Link href="tel:0123456789">+(09) 3456 7890</Link></h4> */}
                     {/* <p className="info-two">Monday – Friday: 9:00-20:00 <br/> Saturday: 11:00 – 15:00</p> */}
                     {/* <Link href="mailto:contactinfo@gmail.com">İnfo@İls.co.az</Link> */}
                  </div>
               </div>
               <div className="col-lg-4 col-sm-6">
                  <div className="contact__info-item">
                     <h4 className="title">Tel</h4>
                     <p className="info-one"><Link href="tel:994509889777">+(994) 050 988 97 77</Link></p>
                     {/* <h4 className="title"><Link href="tel:0123456789">+(994) 050 988 97 77</Link></h4> */}
                     {/* <p className="info-two">Monday – Friday: 9:00-20:00 <br/> Saturday: 11:00 – 15:00</p> */}
                     {/* <Link href="mailto:contactinfo@gmail.com">contactinfo@gmail.com</Link> */}
                  </div>
               </div>
               <div className="col-lg-4 col-sm-6">
                  <div className="contact__info-item">
                     <h4 className="title">Mail</h4>
                     <Link href="mailto:İnfo@İls.co.az"><p className="info-one">İnfo@İls.co.az</p></Link>
                     {/* <h4 className="title"><Link href="tel:0123456789">+(09) 3446 7892</Link></h4> */}
                     {/* <p className="info-two">Monday – Friday: 9:00-20:00 <br/> Saturday: 11:00 – 15:00</p> */}
                     {/* <Link href="mailto:contactinfo@gmail.com">contactinfo@gmail.com</Link> */}
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-12">
                  <div className="contact__form-wrap">
                     <h2 className="title">Send Us Message</h2>
                     <ContactForm />
                     <p className="ajax-response mb-0"></p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default ContactArea
