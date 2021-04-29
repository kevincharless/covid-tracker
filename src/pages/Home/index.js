import { HeroSection, IndicationSection, InfectionSection, PreventionSection, RiskSection } from '../../components';
import { Element } from 'react-scroll';

const Home = () => {
    return (
        <div>
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
