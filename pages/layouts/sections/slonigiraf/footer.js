import React from 'react'
import { Container, Row, Col } from 'reactstrap'
const Footer = () => (
    <React.Fragment>
        <footer className="agency footer2 p-b-0">
            <Container>
                <Row>
                    <Col lg="3" md="3" sm="12" className="set-first">
                        <div className="logo-sec">
                            <div className="footer-title mobile-title">
                                <h3 className="text-white">About Us</h3>
                            </div>
                            <div className="footer-contant">
                                <img alt="" className="img-fluid footer-logo" src="/assets/images/logo/named-logo.png" />

                                <ul className="d-d-flex footer-social social">
                                    <li className="footer-social-list">
                                        <a href="https://t.me/slonigiraf/"><i aria-hidden="true" className="fa fa-telegram"></i></a>
                                    </li>
                                    <li className="footer-social-list">
                                        <a href="https://twitter.com/slonigiraf"><i aria-hidden="true" className="fa fa-twitter"></i></a>
                                    </li>
                                    <li className="footer-social-list">
                                        <a href="https://www.facebook.com/slonigiraf"><i aria-hidden="true" className="fa fa-facebook"></i></a>
                                    </li>
                                    <li className="footer-social-list">
                                        <a href="https://www.youtube.com/channel/UC4pm5EviHUXuLt7AbAyz2Eg"><i aria-hidden="true" className="fa fa-youtube"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg="3" md="3" sm="12">
                        <div className="footer-title mobile-title">
                            <h3 className="text-white">contact us</h3>
                        </div>
                        <div className="footer-contant">
                            <h5 className="footer-headings">contact us</h5>
                            <div>
                                <ul className="footer-lists op-text">
                                    <li>
                                        <a href="mailto:reshetovdenis@gmail.com">reshetovdenis@gmail.com</a>
                                    </li>
                                    <li>
                                        <a href="https://t.me/denisreshetov">@denisreshetov</a>
                                    </li>
                                   
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg="3" md="3" sm="12">
                        <div className="footer-title mobile-title">
                            <h3 className="text-white">learn</h3>
                        </div>
                        <div className="footer-contant">
                            <h5 className="footer-headings">learn</h5>
                            <div>
                                <ul className="footer-lists op-text">
                                    <li>
                                        <a href="https://github.com/slonigiraf/whitepaper/blob/main/slonigiraf/ENG.md">Whitepaper</a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/slonigiraf/">Our Github</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                   
                    <Col lg="3" md="3" sm="12">
                        <div className="footer-title mobile-title">
                            <h3 className="text-white">Community</h3>
                        </div>
                        <div className="footer-contant">
                            <h5 className="footer-headings">Community</h5>
                            <div>
                                <ul className="footer-lists op-text">
                                    <li>
                                        <a href="http://ui.slonigiraf.org/#/accounts">Join</a>
                                    </li>
                                    <li>
                                        <a href="http://ui.slonigiraf.org/#/democracy">Submit a proposal</a>
                                    </li>
                                    
                                
                                </ul>
                            </div>
                        </div>
                    </Col>
                    
                </Row>
                
            </Container>
        </footer>
        <div className="agency copyright">
            <Container>
                <Row>
                    <Col md="6">
                        <div className="link-horizontal">
                            <ul>
                                <li>
                                    <a className="copyright-text" href="#">Copyright © 2022 Slonigiraf</a>
                                </li>
                                
                            </ul>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    </React.Fragment>
)

export default Footer;