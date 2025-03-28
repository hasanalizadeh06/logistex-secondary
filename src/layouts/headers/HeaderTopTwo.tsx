import Link from "next/link"
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
const HeaderTopTwo = () => {
   const router = useRouter();
   const localActive = useLocale();
   
   const pathname = usePathname();
   
   const languages = [{ label: "az" }, { label: "en" }, { label: "ru" }];
   
   const onSelectChange = (label: string) => {
      router.push(pathname, { locale: label });
      router.refresh();
   };
   return (
      <div className="tg-header__top tg-header__top-three">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xl-7">
                  <ul className="tg-header__top-info tg-header__top-info-three left-side list-wrap">
                     <li><button onClick={() => onSelectChange("az")} className="btn btn-success btn-sm p-2">AZ</button></li>
                     <li><button onClick={() => onSelectChange("ru")} className="btn btn-success btn-sm p-2">RU</button></li>
                     <li><button onClick={() => onSelectChange("en")} className="btn btn-success btn-sm p-2">EN</button></li>
                  </ul>
               </div>
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
