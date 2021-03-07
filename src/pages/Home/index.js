import { HeroSection } from '../../components';
import VirusBackground from '../../assets/images/virusBackground.svg';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <img className="position-absolute" src={VirusBackground} style={{ width: '242px',  top: '-2.1%', left: '83%' }} />
            <img className="position-absolute" src={VirusBackground} style={{ width: '287px',  top: '71.1%', left: '44.4%' }} />
            <img className="position-absolute" src={VirusBackground} style={{ width: '161px',  top: '74.6%'}} />
            <img className="position-absolute" src={VirusBackground} style={{ width: '81px',  top: '15.7%', left: '4.7%' }} />
        </div>
    )
}

export default Home