import Icon from '@/components/ui/icon';

const features = [
  {
    icon: 'Waves',
    title: 'Ультразвуковая система',
    description: 'УзСООУ — точное обнаружение положения человека под водой на любой глубине'
  },
  {
    icon: 'Video',
    title: 'Видеосистема контроля',
    description: 'ВСООУ — интеллектуальная видеоаналитика для автоматического обнаружения опасных ситуаций'
  },
  {
    icon: 'Bell',
    title: 'Система оповещения',
    description: 'СОУ — мгновенное оповещение спасателей звуком, светом и мобильными уведомлениями'
  }
];

const applications = [
  'Общественные и частные бассейны',
  'Аквапарки и водные комплексы',
  'Школы олимпийского резерва',
  'Спортивные центры и фитнес-клубы',
  'Санатории и оздоровительные комплексы',
  'Гостиничные комплексы с бассейнами'
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              О системе Sentag AB
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Комплексная система безопасности на воде производства компании Sentag AB — шведское качество и надёжность, адаптированные для российского рынка
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl border border-border hover:border-primary transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name={feature.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-2xl border border-border p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Icon name="Target" size={28} className="text-primary" />
                  Области применения
                </h3>
                <ul className="space-y-4">
                  {applications.map((app, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon name="CheckCircle2" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Icon name="Users" size={28} className="text-primary" />
                  Для кого эта система
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="font-semibold text-foreground mb-2">Проектировщики</div>
                    <p className="text-sm text-muted-foreground">Готовые технические решения для проектной документации</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="font-semibold text-foreground mb-2">Владельцы и руководители</div>
                    <p className="text-sm text-muted-foreground">Снижение рисков и повышение безопасности объекта</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="font-semibold text-foreground mb-2">Исполнители госконтрактов</div>
                    <p className="text-sm text-muted-foreground">Соответствие всем требованиям и стандартам</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="font-semibold text-foreground mb-2">Спасательные службы</div>
                    <p className="text-sm text-muted-foreground">Современный инструмент для эффективной работы</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
