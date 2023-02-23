import React from "react";
import Link from "next/link";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { MdLanguage } from "react-icons/md";

import { Row, Col, Tooltip } from "antd";
import useTranslation from "../../hooks/useTranslation";

export default function Layout(props) {
  const { translations, lang, toggleLang } = useTranslation();
  const otherLang = lang === "es" ? "en" : "es";

  const langChange = () => {
    const themeLang =
      lang === "es" ? "Cambiar idioma a " : "Change language to ";
    if (lang === "es" && otherLang === "es") return themeLang + "español";
    if (lang === "es" && otherLang === "en") return themeLang + "inglés";
    if (lang === "en" && otherLang === "es") return themeLang + "spanish";
    if (lang === "en" && otherLang === "en") return themeLang + "english";
  };
  return (
    <div className="bg-dark">
      <nav className="navbar navbar-dark smart-scroll navbar-expand-lg bg-black px-5 py-3 w-100 d-flex justify-content-space-between">
        <Link className="navbar-brand" href="/">
          <img
            src="/assets/logo.png"
            alt="Nomu Labs"
            className="d-inline-block align-text-middle logo-md"
            style={{ cursor: "pointer" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav gap-3 ms-4 w-100">
            <li
              className="nav-item d-flex justify-content-center align-items-center"
              role="button"
            >
              <Link className="nav-link text-white" href="/clients">
                <b> {translations.navbar.clients}</b>
              </Link>
            </li>
            <li
              className="nav-item d-flex justify-content-center align-items-center"
              role="button"
            >
              <Link className="nav-link text-white" href="/team">
                <b>{translations.navbar.team}</b>
              </Link>
            </li>
            <li
              className="nav-item d-flex justify-content-center align-items-center"
              role="button"
            >
              <a href="https://calendly.com/nomulabs/30min" className="noLink">
                <button className="gradientButton">
                  {translations.navbar.contactUs}
                </button>
              </a>
            </li>
            <li className="mx-auto ms-lg-auto me-lg-0">
              <Tooltip
                title={langChange()}
                placement="left"
                aria-label={langChange()}
                color="#212529"
              >
                <button className="btn-lang" onClick={toggleLang}>
                  <MdLanguage
                    className="me-2 text-white"
                    style={{ fontSize: "18px" }}
                  />
                  {otherLang.toUpperCase()}
                </button>
              </Tooltip>
            </li>
          </ul>
        </div>
      </nav>

      {props.children}

      <div className="bg-black">
        <div className="container-fluid py-3">
          <Row justify="space-between" align="bottom">
            <Col>
              <img
                src="/assets/logo.png"
                alt="Nomu Labs"
                className="d-inline-block align-text-middle logo-md"
              />
            </Col>
            <Col>
              <a href="mailto:info@nomulabs.com" className="noLink text-white">
                info@nomulabs.com
              </a>
              <p className="text-center m-0">Madrid, Spain</p>
            </Col>
            <Col>
              <Row>
                <Col>
                  <a
                    href="https://www.linkedin.com/company/nomulabs/"
                    className="noLink "
                  >
                    <h2 className="text-white">
                      <AiFillLinkedin />
                    </h2>
                  </a>
                </Col>
                <Col>
                  <a
                    href="https://www.instagram.com/nomulabs/"
                    className="noLink "
                  >
                    <h2 className="text-white">
                      <AiFillInstagram />
                    </h2>
                  </a>
                </Col>
                <Col>
                  <a href="https://twitter.com/nomulabs/" className="noLink ">
                    <h2 className="text-white">
                      <AiFillTwitterSquare />
                    </h2>
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
