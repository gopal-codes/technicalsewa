import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { Suspense, lazy, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ApplianceRepair from "./ApplianceRepair";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import { getAllServices, setCategories } from "../redux/allServices";
import { setServiceSlideList } from "../redux/allServices";
import { baseUrl } from "./api/baseUrl";
import Facebook from "../components/Facebook";
import { FadeLoader, ScaleLoader } from "react-spinners";

const WhyChooseUs = lazy(()=>import("../components/WhyChooseUs"))
const Topbar = lazy(()=>import("../components/Topbar"))
const WarantyProducts = lazy(
  () => import("./slider-components/WarantyProducts")
);
const ElectricianPlumbers = lazy(
  () => import("./slider-components/ElectricianPlumbers")
);
const Airpurify = lazy(() => import("./slider-components/Airpurify"));
const Number = lazy(() => import("../components/Number"));
const MobileTabs = lazy(() => import("./slider-components/MobileTabs"));
const CCTV = lazy(() => import("./slider-components/CCTV"));
const ComputerPrinter = lazy(
  () => import("./slider-components/ComputerPrinter")
);
const CleaningPestControl = lazy(
  () => import("./slider-components/CleaningPestControl")
);
const MedicalEquipments = lazy(
  () => import("./slider-components/MedicalEquipments")
);
const DroneRepair = lazy(
  () => import("./slider-components/DroneRepair")
);
const CarpenterService = lazy(
  () => import("./slider-components/CarpenterService")
);
const Description2 = lazy(() => import("../components/Description2"));
const OurClients = lazy(() => import("../components/OurClients"));
const SmartCareBlogs = lazy(() => import("../components/SmartCareBlogs"));
const RequestService = lazy(() => import("../components/RequestService"));
const BottomNavbar = lazy(() => import("../components/BottomNavbar"));
const Footerinfo = lazy(() => import("../components/Footerinfo"));
const Copyright = lazy(() => import("../components/Copyright"));
const Footer = lazy(() => import("../components/Footerinfo"));
const Products = lazy(() => import("../components/mblviewComponents/Products"));
const PopularBrands = lazy(
  () => import("./slider-components/PopularBrands")
);

const IndexPage: NextPage = () => {

  const [isLoding,setIsLoading] = useState(true)

  const dispatch = useDispatch();
  useEffect(() => {
    //GETTING ALL SERVICES
    axios
      .get(
        `${baseUrl}/techsewa/masterconfig/publicmasterconfig/getSliderListpop1`
      )
      .then((response: any) => {
        let data = response.data.brands;
        setIsLoading(false)
        // console.log(data);
        dispatch(getAllServices(data));
      });

    axios
      .get(`${baseUrl}/techsewa/masterconfig/publicmasterconfig/getServiceList`)
      .then((res) => {
        let data = res?.data?.brands;
        // console.log(data);
        dispatch(setCategories(data));
        // console.log(brands);
      })
      .catch((error) => console.log("Axios Error: " + error));

    // Getting Servicesslides
    var config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${baseUrl}/techsewa/masterconfig/publicmasterconfig/getSliderListpop`,
    };

    axios(config)
      .then(function (response) {
        // console.log(response.data);
        const data = response.data.brands;
        dispatch(setServiceSlideList(data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  
  return (
  
    <div className="xsm:mb-20 md:mb-0">
       {isLoding?<div className="flex items-center justify-center h-[100vh] w-full"><FadeLoader /></div>:<>
      <Head>
        <title>Technical Sewa</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="s4Xt-ttgXFwLDQmM-b_pAkaY52cuovGGAnlXMPIGZRA"
        />
        {/* site map */}
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#005ae0" />
        <meta
          name="description"
          content=" Technical Sewa Pvt. Ltd is a leading national company that deals with various repairing and maintenance services of multi brands and multi products viz. mobile devices, electronics and home appliances. With our years of experience, we are nationally recognized as an expert in customer support services and in repair and maintenance services.   "
        />
        <meta name="robots" content="max-image-preview:large" />
        <meta name="generator" content="Repair Services on Demand" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:site_name"
          content=" technicalsewa.com Repair Services on Demand "
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Repair Services on Demand" />
        <meta
          property="og:description"
          content=" tv , washing machine, microovan repair service in kathmandu"
        />
        <meta property="og:url" content="https://technicalsewa.com" />
        {/* <link rel="sitemap" type="application/xml" href="/sitemap.xml" /> */}
        {/* <!-- Google tag (gtag.js) --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PZ99VL1M1P"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-PZ99VL1M1P');
                `,
          }}
        />
      </Head>
      <Suspense
        fallback={
          <div className="h-[100vh] flex justify-center items-center">
            <ScaleLoader color="#00000" />
          </div>
        }
      >
        <Facebook />
        {/* topbar */}
        <Topbar />
        {/* banner */}
        <Banner />
        {/* categories */}
        <div className="xl:w-[80rem] sm:w-full  m-auto">
          <div className="xsm:hidden md:block">
            <Categories />
          </div>
          <Products />
          {/* ApplianceRepair */}
          <ApplianceRepair />
          {/* popularBrands */}
          <PopularBrands />
          {/* Numbers */}
        </div>
        {/* Description */}
        {/* <Description /> */}

        {/* WarantyProducts */}
        <div className="xl:w-[80rem] sm:w-full  sm-w-full m-auto">
          <WarantyProducts />

          <div className="flex items-center gap-[28px] justify-center flex-wrap lg:flex-nowrap">
            {/* eletricianPlumbers */}
            <ElectricianPlumbers />
            {/* Air Purify */}
            <Airpurify />
          </div>
        </div>
        {/* ads banner */}
        <Number />
        {/* <AdsBanner /> */}
        <div className="xl:w-[80rem] sm:w-full  sm-w-full m-auto">
          <div className="flex items-center gap-[28px] justify-center flex-wrap lg:flex-nowrap">
            {/* mobile& tabs */}
            <MobileTabs />
            {/* cctv service */}
            <CCTV />
            {/* computer printer */}
          </div>
          <div className="flex items-center gap-[28px] justify-center flex-wrap lg:flex-nowrap">
            <ComputerPrinter />
            <CleaningPestControl />
          </div>
          {/* medical Equipments */}
          <MedicalEquipments />

          <div className="flex items-center gap-[28px] justify-center flex-wrap lg:flex-nowrap">
            {/* Drone Repair */}
            <DroneRepair />
            {/* carpenterService */}
            <CarpenterService />
            {/* Cleaning Pest Control */}
          </div>
        </div>
        {/* description 2 */}
        <Description2 />
        <WhyChooseUs />
        {/* OurClients */}
        <div className="xl:w-[80rem] sm:w-full  sm-w-full m-auto">
          <OurClients />
          {/* what our client says */}
          {/* <ClientFeedback /> */}
          {/* Download our app */}
          <SmartCareBlogs />

          {/* <DownloadOurApp /> */}
        </div>

        <RequestService />
        {/* Bottom navbar */}

        <BottomNavbar />
        {/* footerSection */}
        {/* <FooterSection /> */}
        {/* copyright */}
        <Footerinfo />
        <Copyright />
      </Suspense>
      </>}
    </div>
  )
};

export default IndexPage;
