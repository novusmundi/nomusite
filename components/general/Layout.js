import React from 'react'
import Image from 'next/image'
import {AiFillLinkedin, AiFillInstagram, AiFillTwitterSquare} from 'react-icons/ai'
import {Row, Col} from 'antd'
export default function Layout(props){
    return(
        <div>
            <nav class="navbar bg-black fixed-top">
            <div class="container-fluid d-flex justify-content-space-between align-items-center">
                <a class="navbar-brand" href="#">
                <picture>
                    <source setSrc="/assets/logo.png" type='image/png' />
                    <img src="/assets/logo.png" alt="Nomu Labs" class="d-inline-block align-text-middle logo-md"/>
                </picture>

                </a>

                <a href="https://calendly.com/nomulabs/30min" className='noLink'>
                    <button className="gradientButton">Contactanos</button>
                </a>
            </div>
            </nav>        
            {props.children}

            <div className="container-fluid py-3">
                <Row justify="space-between" align="middle">
                    <Col>
                        <picture>
                            <source setSrc="/assets/logo.png" type='image/png' />
                            <img src="/assets/logo.png" alt="Nomu Labs" class="d-inline-block align-text-middle logo-md"/>                    
                        </picture>

                    </Col>
                    <Col>
                        <a href="mailto:info@nomulabs.com" className="noLink text-white">info@nomulabs.com</a>
                    </Col>
                    <Col>
                    <Row>
                        <Col>
                            <a href="https://www.linkedin.com/company/nomulabs/" className="noLink ">
                                <h2 className="text-white">
                                <AiFillLinkedin/>

                                </h2>
                            </a>
                        </Col>
                        <Col>
                            <a href="https://www.instagram.com/nomulabs/" className="noLink ">
                                <h2 className="text-white">
                                <AiFillInstagram/>

                                </h2>
                            </a>
                        </Col>
                        <Col>
                            <a href="https://twitter.com/nomulabs/" className="noLink ">
                                <h2 className="text-white">
                                <AiFillTwitterSquare/>

                                </h2>
                            </a>
                        </Col>
                    </Row>                    
                    </Col>
                </Row>
            </div>
    </div>
    )
}