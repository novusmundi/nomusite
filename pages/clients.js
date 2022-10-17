import Head from 'next/head'
import {Row, Col} from 'antd'
import Layout from '../components/general/Layout'
export default function Clients() {

  return (
    <Layout>
      <Head>
        <title>Nomu Labs</title>
        <meta name="description" content="Nomu Labs es una agencia Web3 que te acompaña de principio a fin durante tu aventura en el metaverso." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="fullScreen d-flex justify-content-center align-items-center gradientBg">
        <div className='container py-5'>

                <div className="bg-white rounded p-5 mt-5">
                    <div className="container">

                  <Row gutter={[32,32]}justify="space-between" align='top'>
                    <Col className='text-start' lg={10}>
                        <img src="/assets/nbn23.png" alt="" className="logo-lg" />
                      <h5 className="mt-3">Asesoramiento Web3</h5>
                      <p className="mt-3 text-black">
                        <a href="https://nbn23.com" className='gradientText'><b>NBN23</b></a> es una empresa que tiene como objetivo digitalizar el baloncesto amateur alrededor del mundo. Su solución permite que miles de jugadores puedan disfrutar y sentir el deporte que aman como si fueran auténticos profesionales. 
                      </p>
                      <p className="mt-3 text-black">
                        Asesoramiento Web3 continuado para la implementación de la tecnología NFT dentro de la aplicación de Swish.
                      </p>
                    </Col>
                    <Col className='' lg={6}>
                      <img src="/assets/basket.png" alt="" className="img-fluid rounded" />

                    </Col>
                  </Row>
                  </div>
                </div>
                <div className="bg-white rounded p-5 mt-5">
                    <div className="container">

                  <Row gutter={[32,32]}justify="space-between" align='top'>
                    <Col className='text-start' lg={10}>
                        <img src="/assets/selas.png" alt="" className="logo-lg" />
                      <h5 className="mt-3">Asesoramiento Web3 y Desarrollo</h5>
                      <p className="mt-3 text-black">
                      <span className="gradientText"><b>Selas Studio</b></span> es una compañía especializada en generación de imágenes a través de inteligencia artificial
                      </p>
                      <p className="mt-3 text-black">
                        Hemos ayudado a construir la primera plataforma text2NFT del mundo, integrada dentro de la red social Lens Protocol para que los creadores puedan llevar su contenido al siguiente nivel.                      
                      </p>
                    </Col>
                    <Col className='' lg={6}>
                      <img src="/assets/selas.jpg" alt="" className="img-fluid rounded" />

                    </Col>
                  </Row>
                  </div>
                </div> 
                <div className="bg-white rounded p-5 mt-5">
                    <div className="container">

                  <Row gutter={[32,32]}justify="space-between" align='top'>
                    <Col className='text-start' lg={10}>
                        <img src="/assets/tgd.svg" alt="" className="logo-md" />
                      <h5 className="mt-3">Desarrollo, Asesoramiento, Comunidad</h5>
                      <p className="mt-3 text-black">
                      <span className="gradientText"><b>TheGalleryDAO</b></span> se dedica a dar visibilidad a artistas emergentes y a crear experiencias educativas e inmersivas alrededor del mundo. 
                      </p>
                      <p className="mt-3 text-black">
                      Asesoramiento sobre la creación de la DAO, desarrollo y página web con herramientas Web3, estrategia de cara al futuro. Proyectos llevados a cabo en Amsterdam, Paris, México y Bogotá.

                      </p>
                    </Col>
                    <Col className='' lg={6}>
                      <img src="/assets/tgdWeb.png" alt="" className="img-fluid rounded" />

                    </Col>
                  </Row>
                  </div>
                </div>
                <div className="bg-white rounded p-5 mt-5">
                    <div className="container">

                  <Row gutter={[32,32]}justify="space-between" align='top'>
                    <Col className='text-start' lg={10}>
                        <img src="/assets/amsar.svg" alt="" className="logo-lg" />
                      <h5 className="mt-3">Desarrollo, Comunidad, Evento, Arte</h5>
                      <p className="mt-3 text-black">
                      <span className="gradientText"><b>AMSAR</b></span> fue exhibición de NFTs en realidad aumentada durante la Amsterdam Blockchain. Creamos de comunidad que expuso sus NFTs.
                      </p>
                      <p className="mt-3 text-black">
                      Finalizamos la semana con una fiesta en un barco de 500 personas patrocinada por empresas como DFG, Human Protocol, Doingud y H.E.R. DAO, a la cual asistió toda la comunidad crypto que se encontraba en Amsterdam.
                      </p>
                    </Col>
                    <Col className='' lg={6}>
                      <img src="/assets/amsarParty.jpg" alt="" className="img-fluid rounded" />

                    </Col>
                  </Row>
                  </div>
                </div>               
        </div>
      </div>


    </Layout>
  )
}
