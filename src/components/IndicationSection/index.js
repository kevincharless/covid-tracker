import IndicationIllustration from '../../assets/images/indicationIllustration.png';

const IndicationSection = () => {
    return (
        <div className="position-relative py-5">
            <div className="container">
                <div className="IndicationSectionTitle" data-aos="zoom-in" adta-aos-duration="2500">
                    Apa saja gejala&nbsp;
                    <h1 className="IndicationSectionCovid19">COVID-19</h1> ?
                </div>
                <hr className="TitleBar" />
                <div className="row">
                    <div className="IndicationContent1 col-md-12 col-lg-4 m-0" data-aos="zoom-in" adta-aos-duration="2500" data-aos-delay="300">
                        Gejala-gejala COVID-19 ini umumnya muncul dalam waktu 2 hari sampai 2 minggu setelah penderita terpapar virus Corona. Sebagian pasien yang terinfeksi virus Corona bisa mengalami penurunan oksigen tanpa adanya gejala apapun. Kondisi ini disebut happy hypoxia.
                    </div> 
                    <div className="col-md-12 col-lg-8 d-flex justify-content-center px-5" data-aos="zoom-in" adta-aos-duration="2500" data-aos-delay="300">
                        <img className="IndicationIllustration" src={IndicationIllustration} alt="Indication Illustration" />
                    </div>
                </div>
                <div className="row">
                    <div className="IndicationContent2" data-aos="zoom-in" adta-aos-duration="2500" data-aos-delay="600">
                        COVID-19 memengaruhi orang yang berbeda dengan cara yang berbeda. Kebanyakan orang yang terinfeksi akan mengembangkan penyakit ringan hingga sedang dan pulih tanpa dirawat di rumah sakit.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndicationSection
