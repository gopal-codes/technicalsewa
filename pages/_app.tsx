import "../styles/globals.css";
import type { AppProps } from "next/app";
// import Topbar from "../components/Topbar";
// import FooterSection from '../components/FooterSection'
// import Copyright from "../components/Copyright";
// import Footerinfo from "../components/Footerinfo";
import BottomNavbar from "../components/BottomNavbar";
import { useRouter } from "next/router";
import Footer from "../components/mblviewComponents/Footer";
import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Script from 'next/script'
import Head from 'next/head'
import { useEffect } from "react";
import FacebookPixel from "../components/FacebookPixel"

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();




  const theme = createTheme({
    palette: {
      primary: {
        main: "#2591b2",
      },
      secondary: {
        main: "#2591b2",
      },
    },
  });

  if (router.pathname === "/login") {
    return (
      <>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Component {...pageProps} />
            </PersistGate>
          </Provider>
        </ThemeProvider>
      </>
    );
  }

  // const router = useRouter()

  // useEffect(() => {
  //   import('react-facebook-pixel')
  //     .then((x) => x.default)
  //     .then((ReactPixel) => {
  //       ReactPixel.init('XXXXXXXXXXXXXXXXXXXXX') // facebookPixelId
  //       ReactPixel.pageView()

  //       router.events.on('routeChangeComplete', () => {
  //         ReactPixel.pageView()
  //       })
  //     })
  // }, [router.events])
  return (

    <>
      <Head>
      <title>Technical Sewa-Professional Repair Services On Demand</title>

      {/* <!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '744852134053836');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=744852134053836&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code --> */}


      </Head>
      <FacebookPixel/>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
            <Footer />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
