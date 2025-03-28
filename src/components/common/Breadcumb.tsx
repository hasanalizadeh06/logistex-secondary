import { useTranslations } from "next-intl";
import Link from "next/link";


interface PropsType {
   title: string;
   sub_title: string
}

const Breadcumb = ({ title, sub_title }: PropsType) => {
   const t = useTranslations("Navigation");
   return (
      <section className="breadcrumb__area breadcrumb__bg" style={{ backgroundImage: `url(/assets/img/bg/breadcrumb_bg.jpg)` }}>
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="breadcrumb__content">
                     <h1 className="title">{t(title)}</h1>
                     <nav className="breadcrumb">
                        <span property="itemListElement" typeof="ListItem">
                           <Link href="/">{t("home")}</Link>
                        </span>
                        <span className="breadcrumb-separator"><i className="flaticon-right-arrow"></i></span>
                        <span property="itemListElement" typeof="ListItem">{t(title)}</span>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Breadcumb
