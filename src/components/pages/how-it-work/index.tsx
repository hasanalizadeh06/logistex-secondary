import Breadcumb from "@/components/common/Breadcumb"
import ScrollToTop from "@/components/common/ScrollToTop"
import FooterTwo from "@/layouts/footers/FooterTwo"
import HeaderFour from "@/layouts/headers/HeaderFour"
import HowItWorkArea from "./HowItWorkArea"

const HowItWork = () => {
   return (
      <div className="theme-red">
         <ScrollToTop />
         <HeaderFour />
         <main className="fix">
            <Breadcumb title="howItWorks" sub_title="howItWorks" />
            <HowItWorkArea />
         </main>
         <FooterTwo />
      </div>
   )
}

export default HowItWork
