"use client"
import Link from "next/link"
import NavMenu from "./menu/NavMenu"
import Image from "next/image"
import UseSticky from "@/hooks/UseSticky"
import { useState } from "react"
import MobileSidebar from "./menu/MobileSidebar"

import logo_1 from "@/assets/img/logo/ils logo jpg.png"

const HeaderThree = () => {

   const { sticky } = UseSticky();
   const [isActive, setIsActive] = useState<boolean>(false);

   return (
      <header className="transparent-header">
         <div id="sticky-header" className={`tg-header__area tg-header__area-four ${sticky ? "tg-sticky-menu sticky-menu sticky-menu__show" : ""}`}>
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="tgmenu__wrap">
                        <div className="logo">
                           <Link href="/"><Image style={{maxWidth:180}} src={logo_1} alt="Logo" /></Link>
                        </div>
                        <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                           <NavMenu />
                        </div>
                        <div onClick={() => setIsActive(true)} className="mobile-nav-toggler mobile-nav-toggler-two">
                           <i className="tg-flaticon-menu-1"></i>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <MobileSidebar isActive={isActive} setIsActive={setIsActive} />
      </header>
   )
}

export default HeaderThree
