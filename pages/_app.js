import "antd/dist/antd.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import LanguageProvider from "../context/LanguageProvider";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>

      <Script
        id="stripe-js"
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
      />
      <Script
        id="stripe-js"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js"
      />
    </>
  );
}

export default MyApp;
