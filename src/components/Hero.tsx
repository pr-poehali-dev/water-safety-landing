import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  const scrollToContacts = () => {
    document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-dark">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-accent/30">
            <Icon name="Shield" size={20} className="text-accent" />
            <span className="text-sm font-medium text-white">Сертифицировано по ГОСТ Р 59219-2020</span>
          </div>

          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-white/90 mb-2">
              СООУ Sentag в России
            </h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Безопасность вашего бассейна<br />под контролем
            </h2>
          </div>

          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Передовые системы защиты для посетителей бассейнов. Система оповещения опасности утопления производства компании «Sentag AB» − современное решение для обеспечения безопасности плавания. Ее внедрение будет актуально в бассейнах, аквапарках и на других объектах, где есть закрытая вода.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg hover-scale"
              onClick={scrollToContacts}
            >
              Заказать обратный звонок
              <Icon name="Phone" size={20} className="ml-2" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
              onClick={scrollToContacts}
            >
              Запросить расчет
              <Icon name="Calculator" size={20} className="ml-2" />
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Icon name="Shield" size={40} className="text-accent mx-auto mb-3" />
              <div className="text-white font-semibold text-lg">Обеспечение безопасности людей</div>
              <div className="text-gray-300 text-sm mt-2">на закрытой воде</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Icon name="Users" size={40} className="text-accent mx-auto mb-3" />
              <div className="text-white font-semibold text-lg">Оптимизация работы</div>
              <div className="text-gray-300 text-sm mt-2">спасателей</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Icon name="TrendingUp" size={40} className="text-accent mx-auto mb-3" />
              <div className="text-white font-semibold text-lg">Повышение имиджа</div>
              <div className="text-gray-300 text-sm mt-2">и репутации заведения</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-white/60" />
      </div>
    </section>
  );
};

export default Hero;