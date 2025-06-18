import React from "react";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitterSquare,
  faFacebookSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const quickLinks = [
  { value: "Terms", href: "#!" },
  { value: "Conditions", href: "#!" },
  { value: "Refund", href: "#!" },
  { value: "Groups", href: "#!" },
  { value: "Careers", href: "#!" },
  { value: "Policy", href: "#!" },
  { value: "Support", href: "#!" },
];

const socialMedia = [
  { value: "Facebook", href: "#!", icon: faFacebookSquare },
  { value: "Instagram", href: "#!", icon: faInstagramSquare },
  { value: "LinkedIn", href: "#!", icon: faLinkedin },
  { value: "Twitter", href: "#!", icon: faTwitterSquare },
];

const buttons = [
  {
    img: "https://cdn.easyfrontend.com/pictures/hero/play-app-android.png",
    href: "#!",
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/hero/play-app-apple.png",
    href: "#!",
  },
];

const QuickLinks = ({ qLink }) => (
  <li>
    <a href={qLink.href}>{qLink.value}</a>
  </li>
);
QuickLinks.propTypes = {
  qLink: PropTypes.object.isRequired,
};

const SocialMedia = ({ media }) => (
  <li>
    <FontAwesomeIcon icon={media.icon} className="me-2" />
    {media.value}
  </li>
);
SocialMedia.propTypes = {
  media: PropTypes.object.isRequired,
};

const Buttons = ({ item }) => (
  <Button variant="" className="ezy__footer13-btn px-0">
    <img src={item.img} alt="" className="img-fluid" />
  </Button>
);
Buttons.propTypes = {
  item: PropTypes.object.isRequired,
};

const Footer = () => {
  return (
    <section className="ezy__footer13 light">
      <Container>
        <Row className="justify-content-around text-center text-sm-start">
          <Col xs={12} lg={4}>
            <img
              src="https://cdn.easyfrontend.com/pictures/footers/site-logo.png"
              height="35"
              alt=""
            />
            <p className="mt-3 mb-2">
              Quis consectetur orci proin massa, et. Fermentum fringilla
              pharetra arcu mauris dis tristique sit id mattis. Pretium quisque
              phasellus dictum duis dapibus hendrerit curabitur.
            </p>
            <div className="ezy__footer13-social mt-3">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className=" me-2 opacity-75"
              />
              <span className="mt-3">89 Crown Street, LONDON, SW3 1AQ</span>
            </div>
          </Col>
          <Col xs={12} sm={4} lg={2} className="mt-4 mt-lg-0">
            <p className="fw-bold text-uppercase mb-2">Quick Links</p>
            <Nav className="flex-column ezy__footer13-quick-links">
              {quickLinks.map((qLink, i) => (
                <QuickLinks qLink={qLink} key={i} />
              ))}
            </Nav>
          </Col>
          <Col xs={12} sm={4} lg={2} className="mt-4 mt-lg-0">
            <h6 className="fw-bold text-uppercase mb-3">Social</h6>
            <Nav className="flex-column ezy__footer13-quick-links">
              {socialMedia.map((media, i) => (
                <SocialMedia media={media} key={i} />
              ))}
            </Nav>
          </Col>
          <Col xs={6} sm={4} lg={3} className="mt-4 mt-lg-0">
            <p className="fw-bold text-uppercase mb-2">Download</p>
            {buttons.map((item, i) => (
              <Buttons item={item} key={i} />
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
