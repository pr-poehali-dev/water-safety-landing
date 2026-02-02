import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import NewSurveyForm from './NewSurveyForm';

const Contacts = () => {
  return (
    <section id="contacts" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Оставьте заявку, и наши специалисты проконсультируют вас по всем вопросам внедрения системы безопасности
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Tabs defaultValue="survey" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="survey">
                    <Icon name="ClipboardList" size={16} className="mr-2" />
                    Анкета-заявка
                  </TabsTrigger>
                  <TabsTrigger value="quick">
                    <Icon name="MessageSquare" size={16} className="mr-2" />
                    Быстрая связь
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="survey" className="mt-0">
                  <NewSurveyForm />
                </TabsContent>
                
                <TabsContent value="quick" className="mt-0">
                  <div className="space-y-6">
                    <div className="bg-muted/50 p-4 rounded-lg mb-6">
                      <p className="text-sm text-muted-foreground">
                        Для подробной заявки используйте вкладку «Анкета-заявка»
                      </p>
                    </div>
                    
                    <div className="flex flex-col gap-4">
                      <a 
                        href="tel:+73452568286" 
                        className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors"
                      >
                        <Icon name="Phone" size={24} className="text-primary" />
                        <div>
                          <div className="font-semibold text-foreground">Телефон</div>
                          <div className="text-sm text-muted-foreground">+7 (3452) 56-82-86</div>
                        </div>
                      </a>
                      
                      <a 
                        href="mailto:info@meridian-t.ru" 
                        className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors"
                      >
                        <Icon name="Mail" size={24} className="text-primary" />
                        <div>
                          <div className="font-semibold text-foreground">Email</div>
                          <div className="text-sm text-muted-foreground">info@meridian-t.ru</div>
                        </div>
                      </a>

                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-8">
              <div className="bg-card p-8 rounded-2xl border border-border">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Icon name="MapPin" size={24} className="text-primary" />
                  Контактная информация
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Адрес</div>
                    <a 
                      href="https://yandex.ru/maps/-/CDdkzFwo" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      г. Тюмень, ул. 30 лет Победы, д. 60А, офис 302
                    </a>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Телефон</div>
                    <a href="tel:+73452568286" className="text-foreground hover:text-primary transition-colors">
                      +7 (3452) 56-82-86
                    </a>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Email</div>
                    <a href="mailto:info@meridian-t.ru" className="text-foreground hover:text-primary transition-colors">
                      info@meridian-t.ru
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Icon name="Clock" size={24} className="text-primary" />
                  Время работы
                </h3>
                <p className="text-muted-foreground">
                  Понедельник — Пятница: 9:00 — 18:00<br />
                  Суббота — Воскресенье: выходной
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary to-primary-dark p-8 rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-3">Нужна консультация?</h3>
                <p className="mb-4 text-white/90">
                  Наши специалисты помогут подобрать оптимальное решение для вашего объекта
                </p>
                <div className="flex items-center gap-2 text-white/90">
                  <Icon name="Phone" size={20} />
                  <span>Перезвоним в течение 1 часа</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-12 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <div className="text-2xl font-bold text-foreground mb-2">Sentag AB</div>
                <p className="text-sm text-muted-foreground">Системы безопасности на воде</p>
              </div>
              
              <div className="flex gap-6">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Политика конфиденциальности
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Согласие на обработку данных
                </a>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
              © 2026 Sentag AB. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contacts;