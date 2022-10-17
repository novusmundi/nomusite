import Head from 'next/head'
import Image from 'next/image'
import {Row, Col} from 'antd'
import { Carousel } from 'react-responsive-carousel';
import {GrNext, GrPrevious} from 'react-icons/gr'
import {InlineWidget} from 'react-calendly'
import Layout from '../components/general/Layout'
export default function Home() {
  const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 30,
    height: 30,
    cursor: 'pointer',
};

const indicatorStyles =  {
    background: 'rgb(170, 166, 166)',
    width: 40,
    height: 20,
    display: 'inline-block',
    margin: '0 8px',
};


  return (
    <Layout>
      <Head>
        <title>Nomu Labs</title>
        <meta name="description" content="Nomu Labs es una agencia Web3 que te acompaña de principio a fin durante tu aventura en el metaverso." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="header" className='bg-black fullScreen d-flex justify-content-center align-items-center'>
        <Row className='container-fluid w-100 h-100' align='middle' justify="space-between">
          <Col lg={8} className="d-flex alig-content-center">
            <div className='mx-auto'>
              <img src="/assets/textLogo.png" alt="Nomu Labs" className="logo-xl" />
            <h2 className="mt-3 text-white">Adelantate para destacar.</h2>
            <h5 className='gradientText text-start'>Agencia Web3</h5>
            </div>
          </Col>
          <Col lg={16} className="text-end">
              <img src="/assets/banner.png" alt="" className="img-fluid" />
          </Col>
        </Row>
      </div>
      <div className="container-fluid fullScreen d-flex justify-content-center align-items-center">
        <div className="p-5">
        <Row gutter={[16,16]}justify="center" align='middle'>
          <Col lg={8} className="d-flex justify-content-center">
            <div className=''>
              <h1 className="gradientText"><b>Nomu</b> Labs</h1>
              <p className="mt-3 text-white text-md">
              Contamos con un equipo y una red de partners que nos permiten proporcionar un servicio 360º, con el objetivo de  cubrir todas las necesidades de tu proyecto.
              </p>
            </div>
          </Col>
          <Col lg={12}>
              <div className='d-none d-lg-block'>
              <img src="/assets/partners.png" alt="" className="img-fluid" />
            </div>
            <div className="d-lg-none">
            <img src="/assets/partnersMobile.png" alt="" className="img-fluid" />
            </div>
          </Col>
        </Row>
        </div>
      </div>
      <div className="bg-black fullScreen d-flex align-items-center justify-content-center">
        <div className="p-5">
        <Row gutter={[32,32]} className="w-100" justify="center" align='middle'>
          <Col lg={10} md={24}>
            <h1 className='text-white'>Prepárate para la <span className="gradientText">tercera fase de internet.</span></h1>
            {/* <a href="!#"><h6 className="text-white mt-3">Saber más &gt;</h6></a> */}
          </Col>
          <Col lg={12} md={24} className="text-center">
            <div className='d-none d-lg-block  mx-auto'>
              <img src="/assets/services.png" alt="" className="img-fluid mx-auto" />
            </div>
            <div className="d-lg-none mx-auto">
            <img src="/assets/servicesmobile.png" alt="" className="img-fluid mx-auto" />
            </div>
          </Col>
        </Row>
        </div>

      </div>
      <div className="container-fluid fullScreen d-flex align-items-center justify-content-center">
        <div>
        <h2 className="text-white text-center mt-3">¡Hablemos!</h2>
        <h6 className="mt-3 text-white text-center">¡La Web3 es emocionante, ¡no te quedes atrás!</h6>
          <div className="p-5">
          <InlineWidget 
                  className="rounded"
                  pageSettings={{
                    backgroundColor: 'ffffff',
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: true,
                    primaryColor: '378D8C',
                    textColor: '000000'
                  }}
                  url="https://calendly.com/nomulabs/30min" />
          </div>
        </div>
      </div>

    </Layout>
  )
}
