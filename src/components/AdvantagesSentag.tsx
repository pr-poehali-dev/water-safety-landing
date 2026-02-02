import Icon from '@/components/ui/icon';

const advantages = [
  {
    number: '1',
    icon: 'Wrench',
    title: 'Легкое обслуживание и монтаж',
    description: 'Простота развертывания и эксплуатации оборудования как в готовом бассейне, так и на этапе строительства. Компактное исполнение и легкое тестирование работоспособности. Для эксплуатации не требуются специалисты.'
  },
  {
    number: '2',
    icon: 'FileCheck',
    title: 'Соответствует российскому ГОСТ',
    description: 'Вся продукция прошла сертификацию и соответствует действующим российским стандартам ГОСТ Р 59219-2020.'
  },
  {
    number: '3',
    icon: 'CreditCard',
    title: 'Браслет как ключ или способ оплаты',
    description: 'Внутри браслета находится RFID-считыватель, который обеспечивает интеграции с другими системами. Таким образом, браслет может использоваться как "ключ" и "кошелек". Нет необходимости зарядки браслетов.'
  },
  {
    number: '4',
    icon: 'Heart',
    title: 'Особое внимание к детям и пожилым',
    description: 'Браслеты и датчики настраиваются для разных возрастных категорий и с учетом особенностей и глубины бассейнов. По запросу также могут быть поставлены специальные неснимаемые браслеты для инвалидов.'
  },
  {
    number: '5',
    icon: 'Zap',
    title: 'Мгновенная реакция',
    description: 'Ультразвуковые сенсоры ежесекундно анализируют ситуацию под водой. Тут же оповещая об опасности. Система значительно сокращает время, необходимое для спасения людей.'
  },
  {
    number: '6',
    icon: 'Eye',
    title: 'Функция "Объект в бассейне"',
    description: 'Бассейн под охраной 24/7 даже тогда, когда в нем никого быть не должно. Если в воде оказался кто-то случайно или без браслета, вам придет уведомление на телефон или зазвучит сирена.'
  },
  {
    number: '7',
    icon: 'Users',
    title: 'Контролирует каждого пользователя индивидуально',
    description: 'Нет ограничений по максимальному количеству пользователей и никто не останется без внимания.'
  },
  {
    number: '8',
    icon: 'Shield',
    title: 'Система не подвержена сбоям в работе',
    description: 'Большое количество одновременно купающихся людей, шум, солнечный свет, загрязнение, не помешают работе «Sentag».'
  }
];

const AdvantagesSentag = () => {
  return (
    <section id="advantages-sentag" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Преимущества СООУ Sentag
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                      <Icon name={advantage.icon as any} size={24} className="text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary/20 text-center">
                      {advantage.number}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-3 leading-tight">
                      {advantage.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSentag;
