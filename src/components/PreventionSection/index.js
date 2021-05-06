import PreventionIllustration from '../../assets/images/preventionIllustration.png';
import PreventionIllustration1 from '../../assets/images/prevention1.png';
import PreventionIllustration2 from '../../assets/images/prevention2.png';
import PreventionIllustration3 from '../../assets/images/prevention3.png';
import PreventionIllustration4 from '../../assets/images/prevention4.png';

const PreventionSection = () => {
    return (
        <div className="position-relative py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-0 col-lg-4"></div>
                    <div className="col-md-12 col-lg-8 d-flex justify-content-end">
                        <div className="PreventionTitle" data-aos="fade-left" adta-aos-duration="2500">
                            <div className="PreventionSectionTitle">
                                Mari kita lawan&nbsp;
                                <h1 className="PreventionSectionCovid19">COVID-19!&nbsp;</h1>
                            </div>
                            <h1 className="PreventionSectionSubTitle">
                                Apa yang harus anda lakukan ?&nbsp;
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col-md-12 col-lg-8">
                        <div className="PreventionContent" data-aos="fade-right" adta-aos-duration="2500" data-aos-delay="250">
                            <img className="PreventionContentImage" src={PreventionIllustration1} alt="Prevention Illustration1" />
                            <div>
                                <h5 className="PreventionContentTitle">Terapakan Social - Distancing</h5>
                                <div className="PreventionContentDescription">
                                    menjaga jarak minimal 1 meter dari orang lain, dan jangan dulu ke luar rumah kecuali ada keperluan mendesak.
                                </div>
                            </div>
                        </div>
                        <div className="PreventionContent" data-aos="fade-right" adta-aos-duration="2500" data-aos-delay="500">
                            <img className="PreventionContentImage" src={PreventionIllustration2} alt="Prevention Illustration2" />
                            <div>
                                <h5 className="PreventionContentTitle">Gunakan Masker</h5>
                                <div className="PreventionContentDescription">
                                    menggunakan masker 3 ply ketika  berpergian, untuk menghindari droplets terbang di udara.
                                </div>
                            </div>
                        </div>
                        <div className="PreventionContent" data-aos="fade-right" adta-aos-duration="2500" data-aos-delay="750">
                            <img className="PreventionContentImage" src={PreventionIllustration3} alt="Prevention Illustration3" />
                            <div>
                                <h5 className="PreventionContentTitle">Jagalah Kebersihan</h5>
                                <div className="PreventionContentDescription">
                                    rajin mencuci tangan dengan sabun dan air mengalir atau menggunakan hand sanitzer.
                                </div>
                            </div>
                        </div>
                        <div className="PreventionContent" data-aos="fade-right" adta-aos-duration="2500" data-aos-delay="1000">
                            <img className="PreventionContentImage" src={PreventionIllustration4} alt="Prevention Illustration4" />
                            <div>
                                <h5 className="PreventionContentTitle">Jaga Kekebalan Tubuh</h5>
                                <div className="PreventionContentDescription">
                                    Meningkatkan daya tahan tubuh dengan pola hidup sehat, seperti mengonsumsi makanan bergizi, berolahraga secara rutin, beristirahat yang cukup, dan mencegah stres.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <img className="PreventionIllustration" src={PreventionIllustration} alt="Prevention Illustration" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreventionSection
