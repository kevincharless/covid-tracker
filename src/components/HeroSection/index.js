import { Button, Container, Row, Col } from 'reactstrap';
import { IoIosArrowForward } from 'react-icons/io';
import TrackCount from './TrackCount';

import HeroIllustration from '../../assets/images/heroIllustration.png';
import VirusBackground from '../../assets/images/virusBackground.svg';

const HeroSection = () => {
    return (
        <Container className="d-flex flex-column justify-content-center" id="beranda" style={{ height: '100vh' }}>
            <Row style={{ padding: '8em 0 2em 0' }}>
                <Col xs="12" md="5" className="d-flex align-items-center justify-content-end">
                    <Row>
                        <h3 className="fw-bold">
                            COVID-19 Live Tracker
                            <img className="ms-3" src={VirusBackground} style={{ width: '50px' }} />
                        </h3>
                        <p>
                            Virus Corona (COVID-19) pertama kali dilaporkan di Wuhan, Hubei, China pada Desember 2019, wabah ini kemudian diakui sebagai pandemi oleh Organisasi Kesehatan Dunia (WHO) pada 11 Maret 2020.
                        </p>
                        <Button className="buttonPrimary m-3 w-auto px-3">Pencegahan <IoIosArrowForward className="fs-3" /></Button>
                    </Row>
                </Col>
                <Col xs="12" md="7" className="d-flex align-items-center justify-content-center">
                    <img src={HeroIllustration} />
                </Col>
                
            </Row>
            <Row className="d-flex align-items-center justify-content-center mt-5 p-2 rounded" style={{ backgroundColor: '#01BAB5' }}>
                    <Col xs="12" md="6" lg="3" className="d-flex align-items-center justify-content-center">
                        <TrackCount Title="Total Kasus Hari Ini" Count="+5,767" />
                    </Col>
                    <Col xs="12" md="6" lg="3" className="d-flex align-items-center justify-content-center">
                        <TrackCount Title="Total Kasus" Count="1, 373, 836" />
                    </Col>
                    <Col xs="12" md="6" lg="3" className="d-flex align-items-center justify-content-center">
                        <TrackCount Title="Total Sembuh" Count="1, 189, 510" />
                    </Col>
                    <Col xs="12" md="6" lg="3" className="d-flex align-items-center justify-content-center">
                        <TrackCount Title="Total Kematian" Count="37, 154" />
                    </Col>
                </Row>
        </Container>
    )
}

export default HeroSection
