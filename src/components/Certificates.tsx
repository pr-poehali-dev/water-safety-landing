import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

const certificates = [
  {
    title: 'ГОСТ Р 59219-2020',
    description: 'Системы обнаружения утопающих. Общие технические требования',
    icon: 'FileCheck'
  },
  {
    title: 'ГОСТ Р 58458-2020',
    description: 'Бассейны. Требования безопасности при эксплуатации',
    icon: 'Shield'
  },
  {
    title: 'Сертификат соответствия',
    description: 'Подтверждение соответствия требованиям технических регламентов',
    icon: 'Award'
  },
  {
    title: 'Декларация соответствия',
    description: 'Электробезопасность и электромагнитная совместимость',
    icon: 'FileText'
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Сертификаты и документация
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Система Sentag AB прошла все необходимые испытания и полностью соответствует российским стандартам безопасности
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {certificates.map((cert, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow duration-300 border-border hover:border-primary"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={cert.icon as any} size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="bg-muted/50 rounded-2xl p-8 border border-border">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name="Download" size={32} className="text-primary" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Документация для тендеров
                </h3>
                <p className="text-muted-foreground">
                  Предоставляем полный пакет документов для участия в госконтрактах и тендерах на строительство водных объектов
                </p>
              </div>
              <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2 hover-scale">
                Запросить документы
                <Icon name="ArrowRight" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
