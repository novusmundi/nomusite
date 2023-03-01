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
import useMediaQuery from "../../hooks/useMediaQuery";

export default function Layout(props) {
  const isSm = useMediaQuery("(max-width: 768px)");
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
      <nav className="navbar navbar-dark smart-scroll navbar-expand-lg bg-black px-5 pb-3 pt-4 w-100 d-flex justify-content-space-between">
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

      <footer className="bg-black px-5 py-4">
        <Row justify={isSm ? "center" : "space-between"} align="center">
          <Col xs={24} sm={24} md={8}>
            <img
              src="/assets/logo.png"
              alt="Nomu Labs"
              className="align-text-middle logo-md"
              style={{
                display: isSm ? "block" : "inline-block",
                margin: isSm ? "0 auto 1.2rem auto" : "0",
              }}
            />
          </Col>

          <Col xs={24} sm={24} md={8} className="text-center">
            <a href="mailto:info@nomulabs.com" className="noLink text-white">
              info@nomulabs.com
            </a>
            <p className="m-1">Madrid, Spain</p>
          </Col>

          <Col
            xs={24}
            sm={24}
            md={8}
            className="w-100"
            style={{
              display: "flex",
              justifyContent: isSm ? "center" : "flex-end",
            }}
          >
            <div className="d-inline-flex align-items-center">
              <a
                href="https://www.linkedin.com/company/nomulabs/"
                className="noLink "
              >
                <h2 className="text-white">
                  <AiFillLinkedin />
                </h2>
              </a>
              <a href="https://www.instagram.com/nomulabs/" className="noLink ">
                <h2 className="text-white">
                  <AiFillInstagram />
                </h2>
              </a>
              <a href="https://twitter.com/nomulabs/" className="noLink ">
                <h2 className="text-white">
                  <AiFillTwitterSquare />
                </h2>
              </a>
            </div>
          </Col>
        </Row>
      </footer>
    </div>
  );
}
