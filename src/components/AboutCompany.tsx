import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AboutCompany = () => {
  return (
    <section id="about-company" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              О компании
            </h2>
            <div className="flex justify-center mb-8">
              <div className="w-48 h-24 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">МЕРИДИАН</span>
              </div>
            </div>
          </div>

          <Card className="p-8 lg:p-12 mb-12">
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p className="mb-6">
                Компания <strong className="text-foreground">«Меридиан»</strong> имеет эксклюзивное право на реализацию продукции шведских систем обнаружения опасности утопления производства <strong className="text-foreground">«Sentag AB»</strong> в России.
              </p>
              
              <p className="mb-6">
                Мы сможем реализовать заказ любого уровня сложности, начиная от маленьких частных бассейнов, до олимпийских объектов и аквапарков. Легко подберем оборудование с учетом особенностей вашего бассейна. Расскажем о работе системы, подберем оптимальные варианты для вашего объекта.
              </p>
              
              <p className="mb-8">
                <strong className="text-foreground">«Меридиан»</strong> надёжный партнёр, который ответственно относится к принятым на себя обязательствам, что подтверждено многолетним опытом работы и довольными заказчиками. Наши системы позволяют сделать бассейны еще более безопасными, сохраняя жизни людей.
              </p>

              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
                <div className="flex items-center gap-4 mb-4">
                  <Icon name="Target" size={48} className="text-primary flex-shrink-0" />
                  <h3 className="text-2xl font-bold text-foreground">Миссия компании</h3>
                </div>
                <p className="text-xl font-semibold text-foreground text-center">
                  Бассейны должны быть безопасны!
                </p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <Icon name="Award" size={40} className="text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">лет на рынке</div>
            </Card>
            
            <Card className="p-6 text-center">
              <Icon name="Building2" size={40} className="text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">реализованных объектов</div>
            </Card>
            
            <Card className="p-6 text-center">
              <Icon name="Globe" size={40} className="text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-2">🇸🇪</div>
              <div className="text-muted-foreground">Эксклюзив в России</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
