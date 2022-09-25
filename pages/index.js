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
      <div id="header" className='container-fluid fullScreen d-flex justify-content-center align-items-center'>
        <Row className='w-100 h-100' align='middle' justify="space-between">
          <Col lg={8} className="d-flex alig-content-center">
            <div className='mx-auto'>
            <picture  className="img-fluid">
              <source srcSet="/assets/textLogo.png" type="image/png"/>
              <img src="/assets/textLogo.png" alt="Nomu Labs" className="img-fluid" />
            </picture>
            <h2 className="mt-3 text-white">Adelantate para destacar.</h2>
            <h5 className='gradientText text-start'>Web3 Agency</h5>
            </div>
          </Col>
          <Col lg={16} className="text-end">
            <picture  className="img-fluid">
              <source srcSet="/assets/banner.png" type="image/png"/>
              <img src="/assets/banner.png" alt="" className="img-fluid" />
            </picture>
          </Col>
        </Row>
      </div>
      <div className="container-fluid fullScreen d-flex justify-content-center align-items-center">
        <Row gutter={[16,16]}justify="center" align='middle'>
          <Col lg={8} className="d-flex justify-content-center">
            <div className=''>
              <h1 className="gradientText"><b>Nomu</b> Labs</h1>
              <p className="mt-3 text-white text-md">
              Contamos con un equipo y una red de partners que nos permiten proporcionar servicios 360º para cubrir todas las necesidades de tu proyecto.
              </p>
            </div>
          </Col>
          <Col lg={12}>
            <picture  className="img-fluid">
              <source srcSet="/assets/partners.png" type="image/png"/>
              <img src="/assets/partners.png" alt="" className="img-fluid" />
            </picture>
          </Col>
        </Row>
      </div>
      <div className="fullScreen d-flex align-items-center justify-content-center">
        <Row gutter={[16,16]} className="w-100" justify="center" align='middle'>
          <Col lg={10}>
            <h1 className='text-white'>Prepárate para la <span className="gradientText">tercera fase de internet.</span></h1>
            {/* <a href="!#"><h6 className="text-white mt-3">Saber más &gt;</h6></a> */}
          </Col>
          <Col lg={12} className="text-end">
          <picture  className="img-fluid">
            <source srcSet="/assets/services.png" type="image/png"/>
            <img src="/assets/services.png" alt="" className="img-fluid" />
          </picture>
          </Col>
        </Row>
      </div>
      <div className="fullScreen d-flex justify-content-center align-items-center gradientBg">
        <div className='container py-5'>
              <Carousel
              autoPlay={true}
              interval={10000}
              showArrows={false}
              swipeable={true}
              
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              renderIndicator={(onClickHandler, isSelected, index, label) => {
                if (isSelected) {
                    return (
                        <li
                            style={{ ...indicatorStyles, background: 'rgba(0, 0, 0, 0.8)', height:10}}
                            aria-label={`Selected: ${label} ${index + 1}`}
                            title={`Selected: ${label} ${index + 1}`}
                        />
                    );
                }
                return (
                    <li
                        style={indicatorStyles}
                        onClick={onClickHandler}
                        onKeyDown={onClickHandler}
                        value={index}
                        key={index}
                        role="button"
                        tabIndex={0}
                        title={`${label} ${index + 1}`}
                        aria-label={`${label} ${index + 1}`}
                    />
                );
            }}

              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                  hasPrev && (
                      <button type="button" className="btn" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 0 }}>
                          <span className="text-black">
                              <GrPrevious></GrPrevious>    
                          </span>
                      </button>
                  )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                  hasNext && (
                      <button type="button" className="btn" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 0 }}>
                          <span className="text-black">
                              <GrNext></GrNext>    
                          </span>
                      </button>
                  )
              }
            >

                <div className="bg-white rounded projectSlide p-5">
                  <Row gutter={[16,16]}justify="space-between" align='middle'>
                    <Col className='text-start' lg={16}>
                      <picture  className="img-fluid">
                        <source srcSet="/assets/nbn23.png" type="image/png"/>
                        <img src="/assets/nbn23.png" alt="" className="img-fluid logo-lg" />
                      </picture>
                      <h5 className="mt-3">Asesoramiento Web3</h5>
                      <p className="mt-3 text-black">
                        <a href="https://nbn23.com" className='gradientText'><b>NBN23</b></a> es una empresa que tiene como objetivo digitalizar el baloncesto amateur alrededor del mundo. Su solución permite que miles de jugadores puedan disfrutar y sentir el deporte que aman como si fueran auténticos profesionales. 
                      </p>
                      <p className="mt-3 text-black">
                        Asesoramiento Web3 continuado para la implementación de la tecnología NFT dentro de la aplicación de Swish.
                      </p>
                    </Col>
                    <Col className='text-end'>
                    <picture  className="img-fluid">
                      <source srcSet="/assets/basket.png" type="image/png"/>
                      <img src="/assets/basket.png" alt="" className="img-fluid rounded" />
                    </picture>

                    </Col>
                  </Row>
                </div>
                <div className="bg-white rounded projectSlide p-5">
                  <Row gutter={[16,16]}justify="space-between" align='middle'>
                    <Col className='text-start' lg={16}>
                      <picture  className="img-fluid">
                        <source srcSet="/assets/selas.png" type="image/png"/>
                        <img src="/assets/selas.png" alt="" className="img-fluid logo-lg" />
                      </picture>
                      <h5 className="mt-3">Asesoramiento Web3 y Desarrollo</h5>
                      <p className="mt-3 text-black">
                      <span className="gradientText"><b>Selas Studio</b></span> es una compañía especializada en generación de imágenes a través de inteligencia artificial
                      </p>
                      <p className="mt-3 text-black">
                        Hemos ayudado a construir la primera plataforma text2NFT del mundo, integrada dentro de la red social Lens Protocol para que los creadores puedan llevar su contenido al siguiente nivel.                      
                      </p>
                    </Col>
                    <Col className='text-end'>
                    <picture  className="img-fluid">
                      <source srcSet="/assets/basket.png" type="image/png"/>
                      <img src="/assets/basket.png" alt="" className="img-fluid rounded" />
                    </picture>

                    </Col>
                  </Row>
                </div> 
                <div className="bg-white rounded projectSlide p-5">
                  <Row gutter={[16,16]}justify="space-between" align='middle'>
                    <Col className='text-start' lg={16}>
                      <picture  className="img-fluid">
                        <source srcSet="/assets/tgd.svg" type="image/png"/>
                        <img src="/assets/tgd.svg" alt="" className="img-fluid logo-md" />
                      </picture>
                      <h5 className="mt-3">Desarrollo, Asesoramiento, Comunidad</h5>
                      <p className="mt-3 text-black">
                      <span className="gradientText"><b>TheGalleryDAO</b></span> se dedica a dar visibilidad a artistas emergentes y a crear experiencias educativas e inmersivas alrededor del mundo. 
                      </p>
                      <p className="mt-3 text-black">
                      Asesoramiento sobre la creación de la DAO, desarrollo y página web con herramientas Web3, estrategia de cara al futuro. Proyectos llevados a cabo en Amsterdam, Paris, México y Bogotá.

                      </p>
                    </Col>
                    <Col className='text-end'>
                    <picture  className="img-fluid">
                      <source srcSet="/assets/basket.png" type="image/png"/>
                      <img src="/assets/basket.png" alt="" className="img-fluid rounded" />
                    </picture>

                    </Col>
                  </Row>
                </div>
                <div className="bg-white rounded projectSlide p-5">
                  <Row gutter={[16,16]}justify="space-between" align='middle'>
                    <Col className='text-start' lg={16}>
                      <picture  className="img-fluid">
                        <source srcSet="/assets/amsar.svg" type="image/png"/>
                        <img src="/assets/amsar.svg" alt="" className="img-fluid logo-lg" />
                      </picture>
                      <h5 className="mt-3">Desarrollo, Comunidad, Evento, Arte</h5>
                      <p className="mt-3 text-black">
                      <span className="gradientText"><b>AMSAR</b></span> fue exhibición de NFTs en realidad aumentada durante la Amsterdam Blockchain. Creamos de comunidad que expuso sus NFTs.
                      </p>
                      <p className="mt-3 text-black">
                      Finalizamos la semana con una fiesta en un barco de 500 personas patrocinada por empresas como DFG, Human Protocol, Doingud y H.E.R. DAO, a la cual asistió toda la comunidad crypto que se encontraba en Amsterdam.
                      </p>
                    </Col>
                    <Col className='text-end'>
                    <picture  className="img-fluid">
                      <source srcSet="/assets/basket.png" type="image/png"/>
                      <img src="/assets/basket.png" alt="" className="img-fluid rounded" />
                    </picture>

                    </Col>
                  </Row>
                </div>               
              </Carousel>
        </div>
      </div>
      <div className="container-fluid fullScreen d-flex align-items-center justify-content-center">
        <div>
          <div>
            <h6 className="text-white">
              La Web3 es emocionante, ¡no te quedes atrás!
            </h6>
          </div>
        <h2 className="text-white text-center mt-3">Hablemos!</h2>
          <div className="mt-5">
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
