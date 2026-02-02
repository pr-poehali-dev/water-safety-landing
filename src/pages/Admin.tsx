import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Icon from '@/components/ui/icon';

interface ContentItem {
  id: number;
  section: string;
  key: string;
  value: string;
  updated_at: string;
}

interface Survey {
  id: number;
  step: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  object_type: string;
  status: string;
  created_at: string;
}

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState<ContentItem[]>([]);
  const [surveys, setSurveys] = useState<Survey[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editValue, setEditValue] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (token) {
      setIsLoggedIn(true);
      loadData();
    }
  }, []);

  const loadData = async () => {
    try {
      const contentRes = await fetch('https://functions.poehali.dev/425c04ec-e6c9-42a2-8a10-f79a77ab253e?resource=content');
      const contentData = await contentRes.json();
      setContent(contentData.content || []);

      const surveysRes = await fetch('https://functions.poehali.dev/425c04ec-e6c9-42a2-8a10-f79a77ab253e?resource=surveys');
      const surveysData = await surveysRes.json();
      setSurveys(surveysData.surveys || []);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://functions.poehali.dev/609ebf0b-5924-4cb2-b9ea-d31ab05a62fd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'request_magic_link',
          email: email
        })
      });

      const data = await response.json();
      if (data.success) {
        alert('Magic link отправлен на почту! Проверьте email.');
      } else {
        alert('Ошибка: ' + data.error);
      }
    } catch (error) {
      alert('Ошибка входа: ' + error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item: ContentItem) => {
    setEditingId(item.id);
    setEditValue(item.value);
  };

  const handleSave = async (id: number) => {
    try {
      const response = await fetch('https://functions.poehali.dev/425c04ec-e6c9-42a2-8a10-f79a77ab253e', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          resource: 'content',
          id: id,
          value: editValue
        })
      });

      const data = await response.json();
      if (data.message) {
        alert('Сохранено!');
        setEditingId(null);
        loadData();
      }
    } catch (error) {
      alert('Ошибка сохранения: ' + error);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30">
        <Card className="w-full max-w-md p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Админ-панель</h1>
            <p className="text-muted-foreground">Вход для администраторов</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email администратора
              </label>
              <Input
                type="email"
                placeholder="dimanadym@yandex.ru"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <Button 
              className="w-full" 
              onClick={handleLogin}
              disabled={loading || !email}
            >
              {loading ? 'Отправка...' : 'Получить ссылку для входа'}
              <Icon name="Mail" size={20} className="ml-2" />
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Magic link будет отправлен на указанный email
            </p>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">Админ-панель</h1>
          <Button 
            variant="outline" 
            onClick={() => {
              localStorage.removeItem('admin_token');
              setIsLoggedIn(false);
            }}
          >
            <Icon name="LogOut" size={20} className="mr-2" />
            Выйти
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="content" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="content">
              <Icon name="FileText" size={16} className="mr-2" />
              Контент сайта
            </TabsTrigger>
            <TabsTrigger value="surveys">
              <Icon name="ClipboardList" size={16} className="mr-2" />
              Заявки ({surveys.length})
            </TabsTrigger>
            <TabsTrigger value="settings">
              <Icon name="Settings" size={16} className="mr-2" />
              Настройки
            </TabsTrigger>
          </TabsList>

          <TabsContent value="content">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6">Редактирование контента</h2>
              <div className="space-y-4">
                {content.map((item) => (
                  <div key={item.id} className="border border-border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">
                          {item.section} / {item.key}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Обновлено: {new Date(item.updated_at).toLocaleString('ru-RU')}
                        </div>
                      </div>
                      {editingId !== item.id && (
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleEdit(item)}
                        >
                          <Icon name="Edit" size={16} className="mr-2" />
                          Редактировать
                        </Button>
                      )}
                    </div>

                    {editingId === item.id ? (
                      <div className="space-y-3 mt-4">
                        <Textarea
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          className="min-h-32"
                        />
                        <div className="flex gap-2">
                          <Button onClick={() => handleSave(item.id)}>
                            <Icon name="Save" size={16} className="mr-2" />
                            Сохранить
                          </Button>
                          <Button 
                            variant="outline" 
                            onClick={() => setEditingId(null)}
                          >
                            Отмена
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="mt-2 text-foreground whitespace-pre-wrap">
                        {item.value}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="surveys">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Заявки из анкеты</h2>
                <Button variant="outline" onClick={loadData}>
                  <Icon name="RefreshCw" size={16} className="mr-2" />
                  Обновить
                </Button>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Дата</TableHead>
                    <TableHead>Имя</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Телефон</TableHead>
                    <TableHead>Компания</TableHead>
                    <TableHead>Статус</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {surveys.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center text-muted-foreground py-8">
                        Заявок пока нет
                      </TableCell>
                    </TableRow>
                  ) : (
                    surveys.map((survey) => (
                      <TableRow key={survey.id}>
                        <TableCell>
                          {new Date(survey.created_at).toLocaleDateString('ru-RU')}
                        </TableCell>
                        <TableCell>{survey.name}</TableCell>
                        <TableCell>{survey.email}</TableCell>
                        <TableCell>{survey.phone}</TableCell>
                        <TableCell>{survey.company}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded text-xs ${
                            survey.status === 'new' ? 'bg-primary/10 text-primary' : 'bg-muted'
                          }`}>
                            {survey.status === 'new' ? 'Новая' : survey.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Настройки сайта</h2>
              <p className="text-muted-foreground">
                SEO, домены, интеграции и другие настройки будут доступны здесь
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
