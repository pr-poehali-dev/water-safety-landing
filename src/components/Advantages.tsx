import Icon from '@/components/ui/icon';

const advantages = [
  {
    icon: 'ShieldCheck',
    title: 'Сертифицированная безопасность',
    description: 'Полное соответствие ГОСТ Р 59219-2020 и ГОСТ Р 58458-2020. Система прошла все необходимые испытания и получила официальные сертификаты.'
  },
  {
    icon: 'Zap',
    title: 'Мгновенная реакция',
    description: 'Ультразвуковая и видеосистема обнаруживают опасность за секунды. Спасатели получают оповещение моментально, что критично для спасения жизни.'
  },
  {
    icon: 'Eye',
    title: 'Непрерывный мониторинг',
    description: 'Система работает 24/7 без перерывов. Автоматический контроль всех зон бассейна одновременно — надёжнее человеческого фактора.'
  },
  {
    icon: 'Smartphone',
    title: 'Браслеты безопасности',
    description: 'NFC-метки на водонепроницаемых браслетах отслеживают каждого посетителя. Быстрая идентификация и контроль доступа к ящикам.'
  },
  {
    icon: 'Settings',
    title: 'Готовность к интеграции',
    description: 'Легко интегрируется с популярными CRM-системами, включая Квант Рус. Экспорт данных и аналитики для вашего бизнеса.'
  },
  {
    icon: 'Award',
    title: 'Для тендеров и госконтрактов',
    description: 'Вся необходимая документация для участия в тендерах на строительство бассейнов и аквапарков. Соответствие требованиям заказчиков.'
  }
];

const Advantages = () => {
  return (
    <section id="advantages" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Почему выбирают Sentag AB
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Комплексное решение для обеспечения безопасности на воде — от проектирования до эксплуатации
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-primary transition-all duration-300 hover-scale hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Icon name={advantage.icon as any} size={28} className="text-primary" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">
                {advantage.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
