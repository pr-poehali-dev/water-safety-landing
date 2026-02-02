import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Как работает система оповещения<br />опасности утопления?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 border-2">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Watch" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Обнаружение опасности</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Если посетитель бассейна находится продолжительное время на критической глубине, браслет подает сигнал. Информация поступает на сенсоры, установленные в бассейне.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Bell" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Мгновенное оповещение</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Тревожный сигнал отображается на дисплее настенного модуля, включаются световые и звуковые приборы оповещения.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="bg-muted/50 rounded-2xl p-8 mb-12">
            <div className="flex items-start gap-4">
              <Icon name="Settings2" size={32} className="text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Гибкая настройка</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Продолжительность времени нахождения и глубина настраивается отдельно с учетом особенностей бассейнов и возрастной категории посетителей. Браслеты могут отличаться настройками и цветами.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl p-8 border border-primary/20">
            <Icon name="Zap" size={48} className="text-primary mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Инновационная технология Sentag
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Обеспечивает самую раннюю и точную сигнализацию об обнаружении опасности утопления с целью сокращения времени на спасение в случае инцидента.
            </p>
            <p className="text-foreground font-semibold text-lg">
              Технические решения, предлагаемые нашей компанией, сводят к нулю риски того, что критическая ситуация останется незамеченной.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
