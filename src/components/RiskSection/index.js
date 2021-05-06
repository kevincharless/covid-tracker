import YouTube from 'react-youtube';

import RiskIllustration from '../../assets/images/riskIllustration.svg'
import Lungs from '../../assets/images/lungs1.png';
import Jantung from '../../assets/images/jantung1.png';
import Kidney from '../../assets/images/kidney1.png';

const RiskSection = () => {
    const opts = {
        height: '315',
        width: '440',
        playerVars: {
            https: 'developers.google.com/youtube/player_parameters',
            autoplay: 1,
        },
    };

    const onReady = e => {
        e.target.pauseVideo();
    }

    return (
        <div className="position-relative py-5">
            <div className="container">
                <div className="RiskSectionTitle" data-aos="fade-right" adta-aos-duration="2500">
                    <span className="RiskTitle">
                        Nggak mau jaga&nbsp;
                        <h1 className="RiskHashtag">#protokolkesehatan</h1> ?
                    </span>
                    <span className="RiskTitle">
                        Yuk kenali resiko-resiko&nbsp;
                        <h1 className="RiskCovid19">COVID-19 !</h1>
                    </span>
                </div>
                <div className="row">
                    <div className="col-md-12 col-lg-5 m-0" data-aos="zoom-in" adta-aos-duration="2500" data-aos-delay="1200">
                        <YouTube className="RiskContentVideo" videoId="gV2-gQYyZRs" opts={opts} onReady={onReady} />
                    </div> 
                    <div className="col-md-12 col-lg-7">
                        <div className="RiskContent" data-aos="fade-left" adta-aos-duration="2500" data-aos-delay="300" style={{ backgroundColor: '#63CCC9' }}>
                            <img className="RiskContentImage" src={Lungs} alt="Lungs" />
                            <div>
                                <h5 className="RiskContentTitle">Gangguan Pernapasan</h5>
                                <ul className="RiskContentDescription">
                                    <li>
                                        <b>ARDS</b> atau acute respiratory distress syndrome adalah gangguan pernapasan berat yang disebabkan oleh penumpukan cairan di alveoli atau kantung udara kecil di paru-paru.
                                    </li>
                                    <li>
                                        <b>Pneumonia</b> adalah peradangan paru-paru yang disebabkan oleh infeksi.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="RiskContent" data-aos="fade-left" adta-aos-duration="2500" data-aos-delay="600" style={{ backgroundColor: '#85B754' }}>
                            <img className="RiskContentImage" src={Jantung} alt="Jantung" />
                            <div>
                                <h5 className="RiskContentTitle">Gangguan Jantung </h5>
                                <div className="RiskContentDescription" style={{ margin: '0 2em' }}>
                                    COVID-19 memperberat kerja jantung, sehingga berbahaya bagi orang yang memiliki riwayat gangguan jantung, seperti penyakit jantung dan gagal jantung.
                                </div>
                            </div>
                        </div>
                        <div className="RiskContent" data-aos="fade-left" adta-aos-duration="2500" data-aos-delay="900" style={{ backgroundColor: '#62CBC9' }}>
                            <img className="RiskContentImage" src={Kidney} alt="Kidney" />
                            <div>
                                <h5 className="RiskContentTitle">Gangguan Ginjal & Hati</h5>
                                <div className="RiskContentDescription" style={{ margin: '0 2em' }}>
                                    Beberapa laporan kasus terkait infeksi virus Corona menyebutkan bahwa sebagian penderita dengan gejala yang parah dapat mengalami gagal hati dan gangguan fungsi ginjal.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className="RiskIllustration" src={RiskIllustration} alt="Risk Illustration" />
        </div>
    )
}

export default RiskSection
