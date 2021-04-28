import { useSelector } from 'react-redux';
import { IoIosArrowForward } from 'react-icons/io';
import TrackCount from './TrackCount';

import VirusBackground from '../../assets/images/heroVirus.svg';
import YouTube from 'react-youtube';
import ImageSlider1 from '../../assets/images/imageSlider1.png';

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
        // <Container className="d-flex flex-column justify-content-center" id="beranda" style={{ height: '100vh' }}>
        //     <Row style={{ padding: '0 0 2em 0' }}>
        //         <Col xs="12" md="5" className="d-flex align-items-center justify-content-end">
        //             <Row>
        //                 <h3 className="fw-bold">
        //                     COVID-19 Live Tracker
        //                     <img className="ms-3" src={VirusBackground} style={{ width: '50px' }} alt="Virus Background" />
        //                 </h3>
        //                 <p>
        //                     Virus Corona (COVID-19) pertama kali dilaporkan di Wuhan, Hubei, China pada Desember 2019, wabah ini kemudian diakui sebagai pandemi oleh Organisasi Kesehatan Dunia (WHO) pada 11 Maret 2020.
        //                 </p>
        //                 <Button className="buttonPrimary m-3 w-auto px-3">Pencegahan <IoIosArrowForward className="fs-3" /></Button>
        //             </Row>
        //         </Col>
        //         <Col xs="12" md="7" className="d-flex align-items-center justify-content-center">
        //             <YouTube videoId="OPeuzQYRzAM" opts={opts} onReady={onReady} />;
        //         </Col>
                
        //     </Row>
        //     <Row className="d-flex align-items-center justify-content-center mt-5 p-2 rounded" style={{ backgroundColor: '#01BAB5' }}>
        //         <Col xs="12" md="6" lg="3" className="d-flex align-items-center justify-content-center">
        //             <TrackCount Title="Kasus Hari Ini" Count={`+${covidCount?.new_confirmed.toLocaleString()}`} />
        //         </Col>
        //         <Col xs="12" md="6" lg="3" className="d-flex align-items-center justify-content-center">
        //             <TrackCount Title="Total Kasus" Count={covidCount?.confirmed.toLocaleString()} />
        //         </Col>
        //         <Col xs="12" md="6" lg="3" className="d-flex align-items-center justify-content-center">
        //             <TrackCount Title="Total Sembuh" Count={covidCount?.recovered.toLocaleString()} />
        //         </Col>
        //         <Col xs="12" md="6" lg="3" className="d-flex align-items-center justify-content-center">
        //             <TrackCount Title="Total Kematian" Count={covidCount?.deaths.toLocaleString()} />
        //         </Col>
        //     </Row>
        // </Container>
        <div className="container-fluid">
            <div className="row">
                <div id="carouselExampleControlsNoTouching" className="carousel slide p-0" data-bs-touch="true" data-bs-interval="false" >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={ImageSlider1} className="SliderImage d-block w-100" alt="..." />
                            <div className="SliderContent1 container">
                                <div className="SliderContents1">
                                    <h3 className="SliderContent1Title fw-bold">
                                        COVID-19 Live Tracker
                                        <img className="SliderContent1Image ms-3" src={VirusBackground} alt="Virus Background" />
                                    </h3>
                                    <p className="SliderContent1Description m-0">
                                        Virus Corona (COVID-19) pertama kali dilaporkan di Wuhan, Hubei, China pada Desember 2019, wabah ini kemudian diakui sebagai pandemi oleh Organisasi Kesehatan Dunia (WHO) pada 11 Maret 2020.
                                    </p>
                                    <button className="SliderContent1Button btn">
                                        Pencegahan <IoIosArrowForward className="fs-3" />
                                    </button>
                                </div>
                            </div>
                            <div className="LiveCount container rounded">
                                <div className="row d-flex align-items-center justify-content-center  p-2">
                                    <div className="col-3 d-flex align-items-center justify-content-center">
                                        <TrackCount Title="Kasus Hari Ini" Count={`+${covidCount?.new_confirmed.toLocaleString()}`} />
                                    </div>
                                    <div className="col-3 d-flex align-items-center justify-content-center">
                                        <TrackCount Title="Total Kasus" Count={covidCount?.confirmed.toLocaleString()} />
                                    </div>
                                    <div className="col-3 d-flex align-items-center justify-content-center">
                                        <TrackCount Title="Total Sembuh" Count={covidCount?.recovered.toLocaleString()} />
                                    </div>
                                    <div className="col-3 d-flex align-items-center justify-content-center">
                                        <TrackCount Title="Total Kematian" Count={covidCount?.deaths.toLocaleString()} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.austintexas.gov%2Fsites%2Fdefault%2Ffiles%2FCOVID-19gfx.png&f=1&nofb=1" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.austintexas.gov%2Fsites%2Fdefault%2Ffiles%2FCOVID-19gfx.png&f=1&nofb=1" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="LiveCountMobileSpacing"></div>
            <div className="LiveCountMobile container rounded">
                <div className="row d-flex align-items-center justify-content-center  p-2">
                    <div className="col-sm-12 col-md-6 d-flex align-items-center justify-content-center">
                        <TrackCount Title="Kasus Hari Ini" Count={`+${covidCount?.new_confirmed.toLocaleString()}`} />
                    </div>
                    <div className="col-sm-12 col-md-6 d-flex align-items-center justify-content-center">
                        <TrackCount Title="Total Kasus" Count={covidCount?.confirmed.toLocaleString()} />
                    </div>
                    <div className="col-sm-12 col-md-6 d-flex align-items-center justify-content-center">
                        <TrackCount Title="Total Sembuh" Count={covidCount?.recovered.toLocaleString()} />
                    </div>
                    <div className="col-sm-12 col-md-6 d-flex align-items-center justify-content-center">
                        <TrackCount Title="Total Kematian" Count={covidCount?.deaths.toLocaleString()} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
