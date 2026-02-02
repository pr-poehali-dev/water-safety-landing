import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

interface FormData {
  phone: string;
  email: string;
  company: string;
  clientType: string;
  fullName: string;
  objectName: string;
  objectAddress: string;
  consent: boolean;
  
  companyCard: File | null;
  visitorsInfo: string;
  poolDimensions: string;
  poolScheme: File | null;
  deliveryTimeline: string;
}

const NewSurveyForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    phone: '',
    email: '',
    company: '',
    clientType: '',
    fullName: '',
    objectName: '',
    objectAddress: '',
    consent: false,
    
    companyCard: null,
    visitorsInfo: '',
    poolDimensions: '',
    poolScheme: null,
    deliveryTimeline: ''
  });

  const updateField = (field: keyof FormData, value: string | boolean | File | null) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isStep1Valid = () => {
    return formData.phone && 
           formData.email && 
           formData.company && 
           formData.clientType &&
           formData.fullName &&
           formData.objectName &&
           formData.objectAddress &&
           formData.consent;
  };

  const handleStep1Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isStep1Valid()) return;
    
    setStep(2);
  };

  const handleStep2Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      setSubmitSuccess(true);
    } catch (error) {
      console.error('Error submitting:', error);
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
            phone: '', email: '', company: '', clientType: '', fullName: '',
            objectName: '', objectAddress: '', consent: false,
            companyCard: null, visitorsInfo: '', poolDimensions: '',
            poolScheme: null, deliveryTimeline: ''
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
            <p className="text-sm text-muted-foreground font-semibold">
              Первый шаг: Контактная информация
            </p>
          </div>

          <div>
            <Label htmlFor="phone">Контактный телефон *</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => updateField('phone', e.target.value)}
              placeholder="+7 (3452) 56-82-86"
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="email">E-mail *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
              placeholder="info@meridian-t.ru"
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="company">Наименование предприятия *</Label>
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
            <Label htmlFor="clientType">Кем является *</Label>
            <select
              id="clientType"
              required
              value={formData.clientType}
              onChange={(e) => updateField('clientType', e.target.value)}
              className="w-full mt-2 px-3 py-2 border border-input rounded-md bg-background"
            >
              <option value="">Выберите</option>
              <option value="contractor">Подрядчик</option>
              <option value="client">Конечный заказчик</option>
              <option value="design">Проектная организация</option>
            </select>
          </div>

          <div>
            <Label htmlFor="fullName">ФИО, должность *</Label>
            <Input
              id="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => updateField('fullName', e.target.value)}
              placeholder="Иванов Иван Иванович, Директор"
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="objectName">Наименование объекта *</Label>
            <Input
              id="objectName"
              type="text"
              required
              value={formData.objectName}
              onChange={(e) => updateField('objectName', e.target.value)}
              placeholder="Название бассейна или аквапарка"
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="objectAddress">Адрес объекта *</Label>
            <Input
              id="objectAddress"
              type="text"
              required
              value={formData.objectAddress}
              onChange={(e) => updateField('objectAddress', e.target.value)}
              placeholder="г. Тюмень, ул. ..."
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
            <Label htmlFor="consent" className="text-sm cursor-pointer leading-relaxed">
              Даю согласие на сбор и обработку персональных данных в соответствии с{' '}
              <a href="#" className="text-primary hover:underline">Политикой конфиденциальности</a>
            </Label>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={!isStep1Valid()}
          >
            Продолжить к шагу 2
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleStep2Submit} className="space-y-6">
          <div className="bg-muted/30 p-4 rounded-lg mb-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground font-semibold">
              Второй шаг: Детали проекта
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
            <Label htmlFor="companyCard">Добавьте карточку предприятия</Label>
            <Input
              id="companyCard"
              type="file"
              onChange={(e) => updateField('companyCard', e.target.files?.[0] || null)}
              className="mt-2"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            />
            <p className="text-xs text-muted-foreground mt-1">Форматы: PDF, DOC, DOCX, JPG, PNG</p>
          </div>

          <div>
            <Label htmlFor="visitorsInfo">Информация о посетителях</Label>
            <Textarea
              id="visitorsInfo"
              value={formData.visitorsInfo}
              onChange={(e) => updateField('visitorsInfo', e.target.value)}
              placeholder="Укажите максимальное количество посетителей в день. Есть ли градация: детские зоны, взрослые зоны? Цвета браслетов и их количество?"
              className="mt-2 min-h-32"
            />
          </div>

          <div>
            <Label htmlFor="poolDimensions">Форма, размеры и глубина бассейна</Label>
            <Textarea
              id="poolDimensions"
              value={formData.poolDimensions}
              onChange={(e) => updateField('poolDimensions', e.target.value)}
              placeholder="Например: прямоугольная форма, 25м x 12м, глубина от 1.2м до 2м"
              className="mt-2 min-h-24"
            />
          </div>

          <div>
            <Label htmlFor="poolScheme">Схема бассейна (при наличии)</Label>
            <Input
              id="poolScheme"
              type="file"
              onChange={(e) => updateField('poolScheme', e.target.files?.[0] || null)}
              className="mt-2"
              accept=".pdf,.jpg,.jpeg,.png,.dwg"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Укажите на схеме: подводные фонари, водные преграды, волны, аэромассажные зоны, подводные лежаки, гейзеры и др.
            </p>
          </div>

          <div>
            <Label htmlFor="deliveryTimeline">Сроки поставки и запуска объекта</Label>
            <Textarea
              id="deliveryTimeline"
              value={formData.deliveryTimeline}
              onChange={(e) => updateField('deliveryTimeline', e.target.value)}
              placeholder="Какие сроки поставки интересуют? Когда планируется запуск объекта?"
              className="mt-2 min-h-24"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
            <Icon name="Send" size={20} className="ml-2" />
          </Button>
        </form>
      )}
    </div>
  );
};

export default NewSurveyForm;
