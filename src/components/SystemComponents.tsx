import { Card } from '@/components/ui/card';

const components = [
  {
    title: 'Браслет',
    image: '/placeholder.svg'
  },
  {
    title: 'Блок управления',
    image: '/placeholder.svg'
  },
  {
    title: 'Настенный модуль',
    image: '/placeholder.svg'
  },
  {
    title: 'Сенсор для чаши бассейна',
    image: '/placeholder.svg'
  },
  {
    title: 'Блок ввода-вывода ioLogik',
    image: '/placeholder.svg'
  },
  {
    title: 'Тестер-программатор браслетов',
    image: '/placeholder.svg'
  }
];

const SystemComponents = () => {
  return (
    <section id="components" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Система оповещения опасности утопления<br />
              состоит из 6 основных компонентов
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {components.map((component, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img 
                    src={component.image} 
                    alt={component.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-center font-semibold text-foreground">
                  {component.title}
                </h3>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-primary/5 rounded-2xl p-8 text-center border border-primary/20">
            <p className="text-muted-foreground text-lg">
              Все компоненты системы работают в единой связке, обеспечивая максимальную надёжность и быстроту реагирования на критические ситуации
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemComponents;
