import IndicationIllustration from '../../assets/images/indicationIllustration.png'
import Lungs from '../../assets/images/lungs1.png';
import Jantung from '../../assets/images/jantung1.png';
import Kidney from '../../assets/images/kidney1.png';

const IndicationSection = () => {
    return (
        <div className="position-relative my-4">
            <div className="container">
                <div className="IndicationSectionTitle">
                    Apa saja gejala&nbsp;
                    <h1 className="IndicationSectionCovid19">COVID-19</h1> ?
                </div>
                <hr className="TitleBar" />
                <div className="row">
                    <div className="Content1 col-md-12 col-lg-4 m-0">
                        Gejala-gejala COVID-19 ini umumnya muncul dalam waktu 2 hari sampai 2 minggu setelah penderita terpapar virus Corona. Sebagian pasien yang terinfeksi virus Corona bisa mengalami penurunan oksigen tanpa adanya gejala apapun. Kondisi ini disebut happy hypoxia.
                    </div> 
                    <div className="col-md-12 col-lg-8 d-flex justify-content-center px-5">
                        <img className="IndicationIllustration" src={IndicationIllustration} alt="Indication Illustration" />
                    </div>
                </div>
                <div className="row">
                    <div className="Content2">
                        COVID-19 memengaruhi orang yang berbeda dengan cara yang berbeda. Kebanyakan orang yang terinfeksi akan mengembangkan penyakit ringan hingga sedang dan pulih tanpa dirawat di rumah sakit.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndicationSection
