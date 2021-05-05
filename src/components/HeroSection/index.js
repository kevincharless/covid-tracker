import { useSelector } from 'react-redux';
import { IoIosArrowForward } from 'react-icons/io';
import { Link, scrollSpy } from 'react-scroll';
import TrackCount from './TrackCount';


import VirusBackground from '../../assets/images/heroVirus.svg';
import ImageSlider1 from '../../assets/images/imageSlider1.png';
import ImageSlider2 from '../../assets/images/imageSlider2.png';
import ImageSlider3 from '../../assets/images/imageSlider3.png';
import ImageSlider4 from '../../assets/images/imageSlider4.png';
import { useEffect } from 'react';

const HeroSection = () => {
    const covidTrack = useSelector(state => state.covidTrack);
    const covidCount = covidTrack?.covidCount?.data?.timeline[0];

    useEffect(() => {
        scrollSpy.update();
    }, [])

    return (
        <div className="container-fluid">
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
                        <Link activeClass="activeNav" to="PreventionSection" spy={true} smooth={true} offset={0} duration={100}>
                            Pencegahan <IoIosArrowForward className="fs-3" />
                        </Link>
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

            <div className="row">
                <div id="carouselExampleControlsNoTouching" className="carousel slide p-0" data-bs-touch="true" data-bs-interval="false" >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={ImageSlider1} className="SliderImage" alt="ImageSlider1" />
                        </div>
                        <div className="carousel-item">
                            <img src={ImageSlider2} className="SliderImage" alt="ImageSlider2" />
                        </div>
                        <div className="carousel-item">
                            <img src={ImageSlider3} className="SliderImage" alt="ImageSlider3" />
                        </div>
                        <div className="carousel-item">
                            <img src={ImageSlider4} className="SliderImage" alt="ImageSlider4" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev" style={{ width: '8%' }}>
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next" style={{ width: '8%' }}>
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            {/* Live Count Mobile */}
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
