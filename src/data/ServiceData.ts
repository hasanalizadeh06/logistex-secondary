import { StaticImageData } from "next/image";

import service_1 from "@/assets/img/services/services_img01.jpg"
import service_2 from "@/assets/img/services/services_img02.jpg"
import service_3 from "@/assets/img/services/services_img03.jpg"
import service_4 from "@/assets/img/services/services_img04.jpg"
import service_5 from "@/assets/img/services/services_img07.jpg"
import service_6 from "@/assets/img/services/services_img08.jpg"
import service_7 from "@/assets/img/services/services_img09.jpg"

interface DataType {
   id: number;
   page: string;
   img?: StaticImageData;
   icon: string;
   title: string;
   desc: string;
   list?: string[];
}

const service_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      img: service_1,
      icon: "flaticon-train",
      title: "Freight Transportation",
      desc: "Reliable delivery by land, air, sea, and rail.",
   },
   {
      id: 2,
      page: "home_1",
      img: service_2,
      icon: "flaticon-ship",
      title: "Customs Brokerage",
      desc: "Expert handling of declarations, tariffs, and documentation.",
   },
   {
      id: 3,
      page: "home_1",
      img: service_3,
      icon: "flaticon-truck",
      title: "Warehousing & Distribution",
      desc: "Secure storage and seamless order fulfillment.",
   },
   {
      id: 4,
      page: "home_1",
      img: service_4,
      icon: "flaticon-train",
      title: "Specialized Logistics",
      desc: "Tailored solutions for oversized, temperature-sensitive, and high-value cargo.",
   },

   // home_2
   {
      id: 1,
      page: "home_2",
      icon: "flaticon-delivery-cart",
      title: "Fast & Efficient Delivery",
      desc: "Gadipi Scing elite Aliquam vulputate tortor nec com ultri viverra Suspen aucibus seed dolor eget follow.",
      list: ["Quality Control System", "Modern Technology", "100% True Result Provide"],
   },
   {
      id: 2,
      page: "home_2",
      icon: "flaticon-ship",
      title: "Real - Time Tracking",
      desc: "Gadipi Scing elite Aliquam vulputate tortor nec com ultri viverra Suspen aucibus seed dolor eget follow.",
      list: ["Quality Control System", "Modern Technology", "100% True Result Provide"],
   },
   {
      id: 3,
      page: "home_2",
      icon: "flaticon-warehouse-1",
      title: "Warehouse Storage",
      desc: "Gadipi Scing elite Aliquam vulputate tortor nec com ultri viverra Suspen aucibus seed dolor eget follow.",
      list: ["Quality Control System", "Modern Technology", "100% True Result Provide"],
   },
   {
      id: 4,
      page: "home_2",
      icon: "flaticon-train",
      title: "Train Freight Location",
      desc: "Gadipi Scing elite Aliquam vulputate tortor nec com ultri viverra Suspen aucibus seed dolor eget follow.",
      list: ["Quality Control System", "Modern Technology", "100% True Result Provide"],
   },

   // home_4
   {
      id: 1,
      page: "home_4",
      img: service_5,
      icon: "flaticon-delivery-cart",
      title: "Modern Storage",
      desc: "Road transpo arer tation criucial follw roley Logistins coordinated trans portatn the countries destination.",
   },
   {
      id: 2,
      page: "home_4",
      img: service_6,
      icon: "flaticon-delivery-man",
      title: "House Shifting",
      desc: "Road transpo arer tation criucial follw roley Logistins coordinated trans portatn the countries destination.",
   },
   {
      id: 3,
      page: "home_4",
      img: service_7,
      icon: "flaticon-warehouse",
      title: "Smart Warehousing",
      desc: "Road transpo arer tation criucial follw roley Logistins coordinated trans portatn the countries destination.",
   },

   // inner_page
   {
      id: 1,
      page: "inner_page",
      img: service_1,
      icon: "flaticon-ship",
      title: "Sea Freight",
      desc: "Cost-effective shipping solutions for large-scale and international freight.",
   },
   {
      id: 2,
      page: "inner_page",
      img: service_2,
      icon: "flaticon-truck",
      title: "Land Freight",
      desc: "Reliable road transport solutions for both domestic and international shipments",
   },
   {
      id: 3,
      page: "inner_page",
      img: service_3,
      icon: "flaticon-air-freight",
      title: "Air Freight",
      desc: "Fast and efficient delivery for urgent and high-value cargo.",
   },
   {
      id: 4,
      page: "inner_page",
      img: service_4,
      icon: "flaticon-train",
      title: "Rail Freight",
      desc: "Sustainable and reliable transport for bulk shipments.",
   }
];

export default service_data;