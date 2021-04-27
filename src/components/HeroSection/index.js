import { useSelector } from 'react-redux';
import { Button, Container, Row, Col } from 'reactstrap';
import { IoIosArrowForward } from 'react-icons/io';
import TrackCount from './TrackCount';

import HeroIllustration from '../../assets/images/heroIllustration.png';
import VirusBackground from '../../assets/images/virusBackground.svg';
import YouTube from 'react-youtube';

const HeroSection = () => {
    const covidTrack = useSelector(state => state.covidTrack);
    const covidCount = covidTrack?.covidCount?.data?.timeline[0];

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const onReady = e => {
        e.target.pauseVideo();
    }

    return (
        <Container className="d-flex flex-column justify-content-center" id="beranda" style={{ height: '100vh' }}>
            <Row style={{ padding: '0 0 2em 0' }}>
                <Col xs="12" md="5" className="d-flex align-items-center justify-content-end">
                    <Row>
                        <h3 className="fw-bold">
                            COVID-19 Live Tracker
                            <img className="ms-3" src={VirusBackground} style={{ width: '50px' }} alt="Virus Background" />
                        </h3>
                        <p>
                            Virus Corona (COVID-19) pertama kali dilaporkan di Wuhan, Hubei, China pada Desember 2019, wabah ini kemudian diakui sebagai pandemi oleh Organisasi Kesehatan Dunia (WHO) pada 11 Maret 2020.
                        </p>
                        <Button className="buttonPrimary m-3 w-auto px-3">Pencegahan <IoIosArrowForward className="fs-3" /></Button>
                    </Row>
                </Col>
                <Col xs="12" md="7" className="d-flex align-items-center justify-content-center">
                    {/* <img class="img-fluid" src={HeroIllustration} alt="Hero Illustration" /> */}
                    <YouTube videoId="OPeuzQYRzAM" opts={opts} onReady={onReady} />;
                </Col>
                
            </Row>
            <Row className="d-flex align-items-center justify-content-center mt-5 p-2 rounded" style={{ backgroundColor: '#01BAB5' }}>
                    <Col xs="12" md="6" lg="3" className="d-flex align-items-center justify-content-center">
                        <TrackCount Title="Kasus Hari Ini" Count={`+${covidCount?.new_confirmed.toLocaleString()}`} />
                    </Col>
                    <Col xs="12" md="6" lg="3" className="d-flex align-items-center justify-content-center">
                        <TrackCount Title="Total Kasus" Count={covidCount?.confirmed.toLocaleString()} />
                    </Col>
                    <Col xs="12" md="6" lg="3" className="d-flex align-items-center justify-content-center">
                        <TrackCount Title="Total Sembuh" Count={covidCount?.recovered.toLocaleString()} />
                    </Col>
                    <Col xs="12" md="6" lg="3" className="d-flex align-items-center justify-content-center">
                        <TrackCount Title="Total Kematian" Count={covidCount?.deaths.toLocaleString()} />
                    </Col>
                </Row>
        </Container>
    )
}

export default HeroSection
