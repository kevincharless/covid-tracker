import RiskIllustration from '../../assets/images/riskIllustration.svg'
import Lungs from '../../assets/images/lungs1.png';
import Jantung from '../../assets/images/jantung1.png';
import Kidney from '../../assets/images/kidney1.png';

const RiskSection = () => {
    return (
        <div className="position-relative py-5">
            <div className="container">
                <div className="RiskSectionTitle">
                    <span className="Title">
                        Nggak mau jaga&nbsp;
                        <h1 className="Hashtag">#protokolkesehatan</h1> ?
                    </span>
                    <span className="Title">
                        Yuk kenali resiko-resiko&nbsp;
                        <h1 className="Covid19">COVID-19 !</h1>
                    </span>
                </div>
                <div className="row">
                    <div className="col-md-12 col-lg-4 m-0">
                    </div> 
                    <div className="col-md-12 col-lg-8">
                        <div className="RiskContent" style={{ backgroundColor: '#63CCC9' }}>
                            <img className="ContentImage" src={Lungs} alt="Lungs" />
                            <div>
                                <h5 className="ContentTitle">Gangguan Pernapasan</h5>
                                <ul className="ContentDescription">
                                    <li>
                                        <b>ARDS</b> atau acute respiratory distress syndrome adalah gangguan pernapasan berat yang disebabkan oleh penumpukan cairan di alveoli atau kantung udara kecil di paru-paru.
                                    </li>
                                    <li>
                                        <b>Pneumonia</b> adalah peradangan paru-paru yang disebabkan oleh infeksi.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="RiskContent" style={{ backgroundColor: '#85B754' }}>
                            <img className="ContentImage" src={Jantung} alt="Jantung" />
                            <div>
                                <h5 className="ContentTitle">Gangguan Jantung </h5>
                                <div className="ContentDescription" style={{ margin: '0 2em' }}>
                                    COVID-19 memperberat kerja jantung, sehingga berbahaya bagi orang yang memiliki riwayat gangguan jantung, seperti penyakit jantung dan gagal jantung.
                                </div>
                            </div>
                        </div>
                        <div className="RiskContent" style={{ backgroundColor: '#62CBC9' }}>
                            <img className="ContentImage" src={Kidney} alt="Kidney" />
                            <div>
                                <h5 className="ContentTitle">Gangguan Ginjal & Hati</h5>
                                <div className="ContentDescription" style={{ margin: '0 2em' }}>
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
