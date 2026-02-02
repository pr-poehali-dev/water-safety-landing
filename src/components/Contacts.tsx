import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Ваше имя *
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Иванов"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="example@company.ru"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Телефон *
                  </label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Компания / Организация
                  </label>
                  <Input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="ООО «Название»"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Ваш вопрос
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Опишите ваш объект и задачу..."
                    className="w-full min-h-32"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                    className="mt-1"
                  />
                  <label htmlFor="consent" className="text-sm text-muted-foreground cursor-pointer">
                    Даю согласие на обработку персональных данных в соответствии с{' '}
                    <a href="#" className="text-primary hover:underline">политикой конфиденциальности</a>
                  </label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  disabled={!formData.consent}
                >
                  Отправить заявку
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-card p-8 rounded-2xl border border-border">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Icon name="MapPin" size={24} className="text-primary" />
                  Контактная информация
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Email</div>
                    <a href="mailto:dimanadym@yandex.ru" className="text-foreground hover:text-primary transition-colors">
                      dimanadym@yandex.ru
                    </a>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Telegram</div>
                    <a href="https://t.me/+Jcc9HDH1PphiMzA6" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                      Чат поддержки
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
