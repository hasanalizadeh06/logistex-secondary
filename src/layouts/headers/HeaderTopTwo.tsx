import Link from "next/link"

const HeaderTopTwo = () => {
   return (
      <div className="tg-header__top tg-header__top-three">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xl-5">
                  <div className="tg-header__top-right">
                     <div className="tg-header__top-social tg-header__top-social-three">
                        <span>Follow Us On:</span>
                        <ul className="list-wrap">
                           <li><Link href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                           <li><Link href="https://twitter.com" target="_blank"><i className="fab fa-twitter"></i></Link></li>
                           <li><Link href="https://www.whatsapp.com/" target="_blank"><i className="fab fa-whatsapp"></i></Link></li>
                           <li><Link href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></Link></li>
                           <li><Link href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></Link></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default HeaderTopTwo
