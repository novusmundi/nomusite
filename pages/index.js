import Head from "next/head";
import { Row, Col } from "antd";
import { InlineWidget } from "react-calendly";
import Layout from "../components/general/Layout";
import useTranslation from "../hooks/useTranslation";
import useMediaQuery from "../hooks/useMediaQuery";

export default function Home() {
  const { translations } = useTranslation();
  const isSm = useMediaQuery("(max-width: 768px)");
  const isLg = useMediaQuery("(max-width: 1040px)");
  return (
    <Layout>
      <Head>
        <title>Nomu Labs</title>
        <meta
          name="description"
          content="Nomu Labs es una agencia Web3 que te acompaña de principio a fin durante tu aventura en el metaverso."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        id="header"
        className="mt-lg-0 bg-black fullScreen d-flex justify-content-center align-items-center"
      >
        <Row
          className="container-fluid w-100 h-100"
          align="middle"
          justify="space-between"
        >
          <Col sm={24} lg={8} className="d-flex alig-content-center">
            <div className="mx-auto text-center text-lg-start">
              <img
                src="/assets/textLogo.png"
                alt="Nomu Labs"
                className="img-fluid px-5 px-lg-0"
              />
              <h2 className="mt-3 text-white">{translations.title}</h2>
              <h5 className="gradientText text-center text-lg-start">
                {translations.subtitle}
              </h5>
            </div>
          </Col>
          <Col lg={16} sm={14} className="text-end mx-auto ">
            <img src="/assets/banner.png" alt="" className="img-fluid" />
          </Col>
        </Row>
      </div>
      <div className="container-fluid fullScreen d-flex justify-content-center align-items-center">
        <div className="p-5">
          <Row gutter={[16, 16]} justify="center" align="middle">
            <Col lg={8} className="d-flex justify-content-center">
              <div className="">
                <h1 className="gradientText">
                  <b>Nomu</b> Labs
                </h1>
                <p className="mt-3 text-white text-md">
                  {translations.partners}
                </p>
              </div>
            </Col>
            <Col lg={12}>
              <div className="d-none d-lg-block">
                <img src="/assets/partners.png" alt="" className="img-fluid" />
              </div>
              <div className="d-lg-none">
                <img
                  src="/assets/partnersMobile.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="bg-black fullScreen d-flex align-items-center justify-content-center">
        <div className="p-5">
          <Row
            gutter={[32, 32]}
            className="w-100"
            justify="center"
            align="middle"
          >
            <Col lg={10} md={24}>
              <h1 className="text-white">
                {translations.services.text.split("-")[0]}
                <span className="gradientText ms-3">
                  {translations.services.text.split("-")[1]}
                </span>
              </h1>
            </Col>
            <Col lg={12} md={24} className="text-center">
              <div className="d-none d-lg-block  mx-auto">
                <img
                  src="/assets/services.png"
                  alt=""
                  className="img-fluid mx-auto"
                />
              </div>
              <div className="d-lg-none mx-auto">
                <img
                  src="/assets/servicesmobile.png"
                  alt=""
                  className="img-fluid mx-auto"
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="container-fluid w-100 mt-5 pt-4">
        <h2 className="text-white text-center mt-3">{translations.letsTalk}</h2>
        <h6 className="mt-3 text-white text-center">
          {translations.letsTaslkDescription}
        </h6>
        <div className="my-4">
          <InlineWidget
            className="meeting"
            pageSettings={{
              backgroundColor: "ffffff",
              hideEventTypeDetails: false,
              hideLandingPageDetails: true,
              primaryColor: "378D8C",
              textColor: "000000",
            }}
            styles={{
              height: isLg ? "980px" : "700px",
              overflow: "hidden",
            }}
            url="https://calendly.com/nomulabs/30min"
          />
        </div>
      </div>
    </Layout>
  );
}
