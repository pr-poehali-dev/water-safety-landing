import Hero from '@/components/Hero';
import Advantages from '@/components/Advantages';
import About from '@/components/About';
import Certificates from '@/components/Certificates';
import Contacts from '@/components/Contacts';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Advantages />
      <About />
      <Certificates />
      <Contacts />
    </div>
  );
};

export default Index;