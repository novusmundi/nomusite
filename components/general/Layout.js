import React from 'react'
import Image from 'next/image'
import {AiFillLinkedin, AiFillInstagram, AiFillTwitterSquare} from 'react-icons/ai'
import {Row, Col} from 'antd'
export default function Layout(props){
    return(
        <div className='bg-dark'>
            <nav className="navbar navbar-dark smart-scroll navbar-expand-lg bg-black px-5 w-100 d-flex justify-content-space-between">
                    <a className="navbar-brand" href="/">
                    <img src="/assets/logo.png" alt="Nomu Labs" className="d-inline-block align-text-middle logo-md"/>
                    </a>
                    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link text-white" href="/clients"> <b> Clientes </b></a></li>
                    <li className="nav-item"><a className="nav-link text-white" href="/team"> <b>Equipo</b> </a></li>
                    <li className="nav-item">
                    <a href="https://calendly.com/nomulabs/30min" className='noLink'>
                                <button className="gradientButton">Contáctanos</button>
                    </a>
                    </li>

                    </ul>
                </div>
                </nav>
            {props.children}
            <div className="bg-black">
            <div className="container-fluid py-3">
                <Row justify="space-between" align="bottom">
                    <Col>
                        <img src="/assets/logo.png" alt="Nomu Labs" className="d-inline-block align-text-middle logo-md"/>                    
                    </Col>
                    <Col>
                        <a href="mailto:info@nomulabs.com" className="noLink text-white">info@nomulabs.com</a>
                        <p className="text-center m-0">
                        Madrid, Spain
                        </p>
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
    </div>
    )
}