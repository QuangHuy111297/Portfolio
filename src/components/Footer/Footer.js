import { Container, Row, Col } from 'react-bootstrap';
import { MailchimpForm } from './MailchimpForm';
import logo from '~/assets/img/logo.svg';
import navIcon1 from '~/assets/img/nav-icon1.svg';
import navIcon2 from '~/assets/img/nav-icon2.svg';
import navIcon3 from '~/assets/img/nav-icon3.svg';
import './Footer.scss';
import '~/components/Banner/Banner.scss';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />
                    <Col size={12} sm={12} className="text-center">
                        <div className="social-icon">
                            <a href="https://www.facebook.com/ghostkidamy/" target="blank">
                                <img src={navIcon2} alt="" />
                            </a>
                            <a href="https://github.com/QuangHuy111297" target="blank">
                                <img src={navIcon3} alt="" />
                            </a>
                        </div>
                        <p>Copyright 2022. Lê Quang Huy</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
