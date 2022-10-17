import Head from 'next/head'
import {Row, Col} from 'antd'
import {GrLinkedin} from 'react-icons/gr'
import Layout from '../components/general/Layout'
export default function Team() {

  return (
    <Layout>
      <Head>
        <title>Nomu Labs | Team</title>
        <meta name="description" content="Nomu Labs es una agencia Web3 que te acompaña de principio a fin durante tu aventura en el metaverso." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="fullScreen d-flex justify-content-center align-items-center mt-5 p-5">
        <div>
            <h1 className="text-white"><b>Nomu Labs Core Team</b></h1>
        <Row justify="center" gutter={[32,32]} className="mt-5">
            <Col sm={24} md={24} lg={4}>
                <div className='text-center'>
                    <img src="/assets/team/javi.png" alt="" className="img-fluid" />
                    <p className="mt-3">
                        <b>
                        Javier Mateache<br />
                        <span className="textGreen">
                            CEO & Co-Founder
                        </span>
                        
                        </b> 
                    </p>
                    <a href="https://www.linkedin.com/in/javier-mateache/" className="textGreen">
                        <GrLinkedin/>
                    </a>
                </div>
            </Col>
            <Col sm={24} md={24} lg={4}>
                <div className='text-center'>
                    <img src="/assets/team/luis.png" alt="" className="img-fluid" />
                    <p className="mt-3">
                        <b>
                        Luis Pozo-Gilo<br />
                        <span className="textGreen">
                            CTO & Co-Founder
                        </span>
                        
                        </b> 
                    </p>
                    <a href="https://www.linkedin.com/in/luis-pozo-gilo" className="textGreen">
                        <GrLinkedin/>
                    </a>
                </div>
            </Col>
            <Col sm={24} md={24} lg={4}>
                <div className='text-center'>
                    <img src="/assets/team/juanma.png" alt="" className="img-fluid" />
                    <p className="mt-3">
                        <b>
                        Juanma Saez<br />
                        <span className="textGreen">
                            CBO
                        </span>
                        
                        </b> 
                    </p>
                    <a href="https://www.linkedin.com/in/juanmasaezdrr/" className="textGreen">
                        <GrLinkedin/>
                    </a>
                </div>
            </Col>
            <Col sm={24} md={24} lg={4}>
                <div className='text-center'>
                    <img src="/assets/team/camille.png" alt="" className="img-fluid" />
                    <p className="mt-3">
                        <b>
                        Camille Hajjar<br />
                        <span className="textGreen">
                            Head of Art dept
                        </span>
                        
                        </b> 
                    </p>
                    <a href="https://www.linkedin.com/in/camille-hajjar-b2499815a/" className="textGreen">
                        <GrLinkedin/>
                    </a>
                </div>
            </Col>
            <Col sm={24} md={24} lg={4}>
                <div className='text-center'>
                    <img src="/assets/team/carlos.png" alt="" className="img-fluid" />
                    <p className="mt-3">
                        <b>
                        Carlos Pozo-Gilo<br />
                        <span className="textGreen">
                            Head of Design
                        </span>
                        
                        </b> 
                    </p>
                </div>
            </Col>                                                
        </Row>
        <div className="mt-5">
        <h2 className="text-white"><b>Advisors & Collaborators</b></h2>
        <Row justify="center" gutter={[32,32]} className="mt-5">
            <Col sm={24} md={24} lg={5}>
                <div className='text-center'>
                    <img src="/assets/team/juan.png" alt="" className="img-fluid" />
                    <p className="mt-3">
                        <b>
                        Juan Milagro<br />
                        <span className="textGreen">
                            Partner at Mavens
                        </span>
                        
                        </b> 
                    </p>
                    <a href="https://www.linkedin.com/in/juan-milagro/" className="textGreen">
                        <GrLinkedin/>
                    </a>
                </div>
            </Col>
            <Col sm={24} md={24} lg={5}>
                <div className='text-center'>
                    <img src="/assets/team/sergio.png" alt="" className="img-fluid" />
                    <p className="mt-3">
                        <b>
                        Sergio Navarro<br />
                        <span className="textGreen">
                        Easysmile CEO
                        </span>
                        
                        </b> 
                    </p>
                    <a href="https://www.linkedin.com/in/sergionavarrofernandez/" className="textGreen">
                        <GrLinkedin/>
                    </a>
                </div>
            </Col>
            <Col sm={24} md={24} lg={5}>
                <div className='text-center'>
                    <img src="/assets/team/sean.png" alt="" className="img-fluid" />
                    <p className="mt-3">
                        <b>
                        Sean Bradford<br />
                        <span className="textGreen">
                        TheGalleryDAO founder
                        </span>
                        </b> 
                    </p>
                    <a href="https://www.linkedin.com/in/sean-bradford-21103039/" className="textGreen">
                        <GrLinkedin/>
                    </a>
                </div>
            </Col>                                             
        </Row>            
        </div>
        </div>

      </div>


    </Layout>
  )
}
