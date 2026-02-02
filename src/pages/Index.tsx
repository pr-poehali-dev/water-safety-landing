import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import AdvantagesSentag from '@/components/AdvantagesSentag';
import SystemComponents from '@/components/SystemComponents';
import AboutCompany from '@/components/AboutCompany';
import Contacts from '@/components/Contacts';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <AdvantagesSentag />
      <SystemComponents />
      <AboutCompany />
      <Contacts />
    </div>
  );
};

export default Index;