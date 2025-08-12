import Breadcrumb from './Breadcrumb';
import JourneySection from './JourneySection';
import WeAreCagsSection from './WeAreCagsSection';
import JoinNetwork from '../../components/JoinNetwork';
import OurValuesSection from '../../components/OurValuesSection';
import Footer from '../Footer';
const About = () => {
  return (
    <main>
      <Breadcrumb />
      <JourneySection />
      <WeAreCagsSection />
      <OurValuesSection/>
      <JoinNetwork/>
        <Footer />
    </main>
  );
};

export default About;