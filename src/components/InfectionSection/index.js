import InfectionIllustration from '../../assets/images/infectionIllustration.png';
import InfectionIllustration1 from '../../assets/images/infection1.png';
import InfectionIllustration2 from '../../assets/images/infection2.png';
import InfectionIllustration3 from '../../assets/images/infection3.png';
import InfectionIllustration4 from '../../assets/images/infection4.png';

const InfectionSection = () => {
    return (
        <div className="position-relative py-3">
            <div className="container">
                <div className="InfectionSectionTitle">
                    Bagaimana Cara Penularan&nbsp;
                    <h1 className="InfectionSectionCovid19">COVID-19</h1> ?
                </div>
                <h1 className="InfectionSectionSubTitle">
                    Berikut metode penularan  COVID-19
                </h1>
                <div className="row my-4">
                    <div className="col-md-12 col-lg-3">
                        <img className="InfectionIllustration" src={InfectionIllustration} alt="Infection Illustration" />
                    </div> 
                    <div className="InfectionContents col-md-12 col-lg-9 d-flex flex-column justify-content-center px-5">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <div className="InfectionContent">
                                    <img className="InfectionContentImage" src={InfectionIllustration1} alt="Infection Illustration1" />
                                    <div>
                                        <h5 className="InfectionContentTitle">Kontak Dengan Barang</h5>
                                        <div className="InfectionContentDescription" style={{ margin: '0 2em' }}>
                                            Menyetuh barang yang terkontaminasi virus, kemudian menyentuh wajah.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="InfectionContent">
                                    <img className="InfectionContentImage" src={InfectionIllustration2} alt="Infection Illustration2" />
                                    <div>
                                        <h5 className="InfectionContentTitle">Droplets</h5>
                                        <div className="InfectionContentDescription" style={{ margin: '0 2em' }}>
                                            Melalui cairan dari batuk dan bersin
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <div className="InfectionContent">
                                    <img className="InfectionContentImage" src={InfectionIllustration3} alt="Infection Illustration3" />
                                    <div>
                                        <h5 className="InfectionContentTitle">Kontak Fisik</h5>
                                        <div className="InfectionContentDescription" style={{ margin: '0 2em' }}>
                                            Bersentuhan dengan orang yang terkontaminasi virus.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="InfectionContent">
                                    <img className="InfectionContentImage" src={InfectionIllustration4} alt="Infection Illustration4" />
                                    <div>
                                        <h5 className="InfectionContentTitle">Tinja</h5>
                                        <div className="InfectionContentDescription" style={{ margin: '0 2em' }}>
                                            Meskipun jarang terjadi, namun virus ini dapat menular melalui tinja.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfectionSection
