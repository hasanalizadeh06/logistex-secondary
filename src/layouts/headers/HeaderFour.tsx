"use client"
import Link from "next/link"
import NavMenu from "./menu/NavMenu"
import Image from "next/image"
import UseSticky from "@/hooks/UseSticky"
import { useState } from "react"
import OffCanvas from "./menu/OffCanvas"
import HeaderSearch from "./menu/HeaderSearch"
import MobileSidebar from "./menu/MobileSidebar"

import logo from "@/assets/img/logo/ils logo jpg.png"
import HeaderTopFour from "./HeaderTopFour"

const HeaderFour = () => {

   const { sticky } = UseSticky();
   const [offCanvas, setOffCanvas] = useState<boolean>(false);
   const [isSearch, setIsSearch] = useState<boolean>(false);
   const [isActive, setIsActive] = useState<boolean>(false);

   return (
      <header>
         <div id="header-fixed-height"></div>
         <HeaderTopFour />
         <div id="sticky-header" className={`tg-header__area tg-header__area-two ${sticky ? "tg-sticky-menu sticky-menu sticky-menu__show" : ""}`}>
            <div className="container-fluid p-0">
               <div className="row gx-0">
                  <div className="col-12">
                     <div className="tgmenu__wrap">
                        <div className="logo">
                           <Link href="/"><Image style={{maxWidth:230}} src={logo} alt="Logo" /></Link>
                        </div>
                        <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                           <NavMenu />
                        </div>
                        <div className="mobile-nav-toggler" onClick={() => setIsActive(true)}>
                           <i className="tg-flaticon-menu-1"></i>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <OffCanvas offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
         <HeaderSearch isSearch={isSearch} setIsSearch={setIsSearch} />
         <MobileSidebar isActive={isActive} setIsActive={setIsActive} />
      </header>
   )
}

export default HeaderFour
