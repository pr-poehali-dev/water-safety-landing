import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  consent: boolean;
  
  objectType: string;
  poolSize: string;
  visitorsCount: string;
  currentSafety: string;
  budget: string;
  timeline: string;
  additionalInfo: string;
}

const SurveyForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    consent: false,
    
    objectType: '',
    poolSize: '',
    visitorsCount: '',
    currentSafety: '',
    budget: '',
    timeline: '',
    additionalInfo: ''
  });

  const updateField = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isStep1Valid = () => {
    return formData.name && 
           formData.email && 
           formData.phone && 
           formData.company && 
           formData.position && 
           formData.consent;
  };

  const handleStep1Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isStep1Valid()) return;

    try {
      setIsSubmitting(true);
      const response = await fetch('/api/survey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ step: 1, data: formData })
      });
      
      if (response.ok) {
        setStep(2);
      }
    } catch (error) {
      console.error('Error submitting step 1:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleStep2Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.objectType) return;

    try {
      setIsSubmitting(true);
      const response = await fetch('https://functions.poehali.dev/2912236f-c361-4954-acab-6c06c74f617b', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ step: 2, data: formData })
      });
      
      if (response.ok) {
        setSubmitSuccess(true);
      }
    } catch (error) {
      console.error('Error submitting step 2:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <Card className="p-8 text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircle2" size={32} className="text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Спасибо за заявку!
        </h3>
        <p className="text-muted-foreground mb-6">
          Мы получили вашу анкету и свяжемся с вами в ближайшее время
        </p>
        <Button onClick={() => {
          setSubmitSuccess(false);
          setStep(1);
          setFormData({
            name: '', email: '', phone: '', company: '', position: '', consent: false,
            objectType: '', poolSize: '', visitorsCount: '', currentSafety: '',
            budget: '', timeline: '', additionalInfo: ''
          });
        }}>
          Отправить ещё одну заявку
        </Button>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-8">
        <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 1 ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`}>
          {step > 1 ? <Icon name="Check" size={20} /> : '1'}
        </div>
        <div className={`flex-1 h-1 ${step >= 2 ? 'bg-primary' : 'bg-muted'}`}></div>
        <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 2 ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`}>
          2
        </div>
      </div>

      {step === 1 && (
        <form onSubmit={handleStep1Submit} className="space-y-6">
          <div className="bg-muted/30 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted-foreground">
              Шаг 1 из 2: Контактная информация
            </p>
          </div>

          <div>
            <Label htmlFor="name" className="required">Ваше имя *</Label>
            <Input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => updateField('name', e.target.value)}
              placeholder="Иван Иванов"
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="email" className="required">Email *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
              placeholder="example@company.ru"
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="required">Телефон *</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => updateField('phone', e.target.value)}
              placeholder="+7 (___) ___-__-__"
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="company" className="required">Компания / Организация *</Label>
            <Input
              id="company"
              type="text"
              required
              value={formData.company}
              onChange={(e) => updateField('company', e.target.value)}
              placeholder="ООО «Название»"
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="position" className="required">Должность *</Label>
            <Input
              id="position"
              type="text"
              required
              value={formData.position}
              onChange={(e) => updateField('position', e.target.value)}
              placeholder="Директор / Менеджер / Проектировщик"
              className="mt-2"
            />
          </div>

          <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => updateField('consent', checked as boolean)}
              className="mt-1"
              required
            />
            <Label htmlFor="consent" className="text-sm cursor-pointer">
              Даю согласие на обработку персональных данных в соответствии с{' '}
              <a href="#" className="text-primary hover:underline">политикой конфиденциальности</a>
            </Label>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={!isStep1Valid() || isSubmitting}
          >
            {isSubmitting ? 'Отправка...' : 'Продолжить к шагу 2'}
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleStep2Submit} className="space-y-6">
          <div className="bg-muted/30 p-4 rounded-lg mb-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Шаг 2 из 2: Информация о проекте
            </p>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setStep(1)}
            >
              <Icon name="ArrowLeft" size={16} className="mr-2" />
              Назад
            </Button>
          </div>

          <div>
            <Label htmlFor="objectType" className="required">Тип объекта *</Label>
            <select
              id="objectType"
              required
              value={formData.objectType}
              onChange={(e) => updateField('objectType', e.target.value)}
              className="w-full mt-2 px-3 py-2 border border-input rounded-md bg-background"
            >
              <option value="">Выберите тип объекта</option>
              <option value="pool">Бассейн</option>
              <option value="aquapark">Аквапарк</option>
              <option value="sports">Спортивный комплекс</option>
              <option value="hotel">Гостиничный комплекс</option>
              <option value="sanatorium">Санаторий</option>
              <option value="other">Другое</option>
            </select>
          </div>

          <div>
            <Label htmlFor="poolSize">Размер бассейна / водной зоны</Label>
            <Input
              id="poolSize"
              type="text"
              value={formData.poolSize}
              onChange={(e) => updateField('poolSize', e.target.value)}
              placeholder="Например: 25x12м, глубина 2м"
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="visitorsCount">Примерная посещаемость в день</Label>
            <Input
              id="visitorsCount"
              type="text"
              value={formData.visitorsCount}
              onChange={(e) => updateField('visitorsCount', e.target.value)}
              placeholder="Например: 100-200 человек"
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="currentSafety">Текущие меры безопасности</Label>
            <Textarea
              id="currentSafety"
              value={formData.currentSafety}
              onChange={(e) => updateField('currentSafety', e.target.value)}
              placeholder="Опишите, какие системы безопасности используются сейчас"
              className="mt-2 min-h-24"
            />
          </div>

          <div>
            <Label htmlFor="budget">Бюджет проекта</Label>
            <select
              id="budget"
              value={formData.budget}
              onChange={(e) => updateField('budget', e.target.value)}
              className="w-full mt-2 px-3 py-2 border border-input rounded-md bg-background"
            >
              <option value="">Выберите диапазон</option>
              <option value="under1m">До 1 млн ₽</option>
              <option value="1-3m">1-3 млн ₽</option>
              <option value="3-5m">3-5 млн ₽</option>
              <option value="over5m">Более 5 млн ₽</option>
              <option value="tender">В рамках тендера</option>
            </select>
          </div>

          <div>
            <Label htmlFor="timeline">Сроки внедрения</Label>
            <select
              id="timeline"
              value={formData.timeline}
              onChange={(e) => updateField('timeline', e.target.value)}
              className="w-full mt-2 px-3 py-2 border border-input rounded-md bg-background"
            >
              <option value="">Выберите срок</option>
              <option value="urgent">Срочно (1-2 месяца)</option>
              <option value="normal">Стандартный (3-6 месяцев)</option>
              <option value="planning">На этапе проектирования</option>
              <option value="flexible">Гибкие сроки</option>
            </select>
          </div>

          <div>
            <Label htmlFor="additionalInfo">Дополнительная информация</Label>
            <Textarea
              id="additionalInfo"
              value={formData.additionalInfo}
              onChange={(e) => updateField('additionalInfo', e.target.value)}
              placeholder="Любые дополнительные детали о проекте"
              className="mt-2 min-h-32"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={!formData.objectType || isSubmitting}
          >
            {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
            <Icon name="Send" size={20} className="ml-2" />
          </Button>
        </form>
      )}
    </div>
  );
};

export default SurveyForm;