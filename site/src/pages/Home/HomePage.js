import FirstHPSection from './Sections/First/FirstHPSection'
import SecondHPSection from './Sections/Second/SecondHPSection'
import ThirdHPSection from './Sections/Third/ThirdHPSection'
import FourthHPSection from './Sections/Fourth/FourthHPSection'

const HomePage = () => {
    return (
        <div className="hp-content">
            <FirstHPSection />
            <SecondHPSection />
            <ThirdHPSection />
            <FourthHPSection />
        </div>
    );
}

export default HomePage;