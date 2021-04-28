import { HeroSection, IndicationSection, InfectionSection, PreventionSection, RiskSection } from '../../components';
import VirusBackground from '../../assets/images/virusBackground.svg';
import { Element } from 'react-scroll';

const Home = () => {
    return (
        <div>
            {/* 
            <img className="position-absolute" src={VirusBackground} style={{ width: '242px',  top: '-2.1%', left: '83%' }} alt="Virus Background" />
            <img className="position-absolute" src={VirusBackground} style={{ width: '287px',  top: '71.1%', left: '44.4%' }} alt="Virus Background" />
            <img className="position-absolute" src={VirusBackground} style={{ width: '161px',  top: '74.6%'}} alt="Virus Background" />
            <img className="position-absolute" src={VirusBackground} style={{ width: '81px',  top: '15.7%', left: '4.7%' }} alt="Virus Background" /> */}
            <Element name="HeroSection" className="element">
                <HeroSection />
            </Element>
            <Element name="RiskSection" className="element">
                <RiskSection />
            </Element>
            <Element name="IndicationSection" className="element">
                <IndicationSection />
            </Element>
            <Element name="InfectionSection" className="element">
                <InfectionSection />
            </Element>
            <Element name="PreventionSection" className="element">
                <PreventionSection />
            </Element>
        </div>
    )
}

export default Home
