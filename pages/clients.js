import Head from "next/head";
import { Row, Col } from "antd";
import useTranslation from "../hooks/useTranslation";
import Layout from "../components/general/Layout";

export default function Clients() {
  const { translations } = useTranslation();

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
      <div className="fullScreen d-flex justify-content-center align-items-center gradientBg">
        <div className="container py-5">
          <div className="bg-white rounded p-5 mt-5">
            <div className="container">
              <Row gutter={[32, 32]} justify="space-between" align="top">
                <Col className="text-start" lg={10}>
                  <img src="/assets/nbn23.png" alt="" className="logo-lg" />
                  <h5 className="mt-3">{translations.nbn23.contract}</h5>
                  <div className="mt-3 text-black">
                    <a href="https://nbn23.com" className="gradientText">
                      <b>NBN23</b>
                    </a>
                    {translations.nbn23.text.split("\n\n").map((txt, i) => (
                      <p key={i}>{txt}</p>
                    ))}
                  </div>
                </Col>
                <Col className="" lg={6}>
                  <img
                    src="/assets/basket.png"
                    alt=""
                    className="img-fluid rounded"
                  />
                </Col>
              </Row>
            </div>
          </div>
          <div className="bg-white rounded p-5 mt-5">
            <div className="container">
              <Row gutter={[32, 32]} justify="space-between" align="top">
                <Col className="text-start" lg={10}>
                  <img src="/assets/selas.png" alt="" className="logo-lg" />
                  <h5 className="mt-3">{translations.selas.contract}</h5>
                  <div className="mt-3 text-black">
                    <span className="gradientText">
                      <b>Selas Studio</b>
                    </span>
                    {translations.selas.text.split("\n\n").map((txt, i) => (
                      <p key={i}>{txt}</p>
                    ))}
                  </div>
                </Col>
                <Col className="" lg={6}>
                  <img
                    src="/assets/selas.jpg"
                    alt=""
                    className="img-fluid rounded"
                  />
                </Col>
              </Row>
            </div>
          </div>
          <div className="bg-white rounded p-5 mt-5">
            <div className="container">
              <Row gutter={[32, 32]} justify="space-between" align="top">
                <Col className="text-start" lg={10}>
                  <img src="/assets/tgd.svg" alt="" className="logo-md" />
                  <h5 className="mt-3">{translations.dao.contract}</h5>

                  <div className="mt-3 text-black">
                    <span className="gradientText">
                      <b>TheGalleryDAO</b>
                    </span>
                    {translations.dao.text.split("\n\n").map((txt, i) => (
                      <p key={i}>{txt}</p>
                    ))}
                  </div>
                </Col>
                <Col className="" lg={6}>
                  <img
                    src="/assets/tgdWeb.png"
                    alt=""
                    className="img-fluid rounded"
                  />
                </Col>
              </Row>
            </div>
          </div>
          <div className="bg-white rounded p-5 mt-5">
            <div className="container">
              <Row gutter={[32, 32]} justify="space-between" align="top">
                <Col className="text-start" lg={10}>
                  <img src="/assets/amsar.svg" alt="" className="logo-lg" />
                  <h5 className="mt-3">{translations.amsar.contract}</h5>
                  <div className="mt-3 text-black">
                    <span className="gradientText">
                      <b>AMSAR</b>
                    </span>{" "}
                    {translations.amsar.text.split("\n\n").map((txt, i) => (
                      <p key={i}>{txt}</p>
                    ))}
                  </div>
                </Col>
                <Col className="" lg={6}>
                  <img
                    src="/assets/amsarParty.jpg"
                    alt=""
                    className="img-fluid rounded"
                  />
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
