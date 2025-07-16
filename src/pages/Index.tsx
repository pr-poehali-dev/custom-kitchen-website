import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#2C3E50]">КSTOM КУХНИ</h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#projects" className="text-gray-600 hover:text-[#2C3E50] transition-colors">Проекты</a>
            <a href="#process" className="text-gray-600 hover:text-[#2C3E50] transition-colors">Процесс</a>
            <a href="#prices" className="text-gray-600 hover:text-[#2C3E50] transition-colors">Цены</a>
            <a href="#contact" className="text-gray-600 hover:text-[#2C3E50] transition-colors">Контакты</a>
          </nav>
          <Button className="bg-[#2C3E50] hover:bg-[#34495E]">
            Заказать звонок
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-[#ECFDF5] to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-[#2C3E50] mb-6">
            Кухни на заказ<br />любой сложности
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Полный цикл производства от замера до установки. Работаем с массивом и МДФ, 
            создаем 3D-визуализацию и даем гарантию 5 лет.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-[#2C3E50] hover:bg-[#34495E] px-8">
              Бесплатный замер
            </Button>
            <Button size="lg" variant="outline" className="border-[#2C3E50] text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white">
              Смотреть проекты
            </Button>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-md">
                <Icon name="Ruler" size={24} className="text-[#2C3E50]" />
              </div>
              <h3 className="font-semibold text-[#2C3E50] mb-2">3D-визуализация</h3>
              <p className="text-sm text-gray-600">Увидите результат до производства</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-md">
                <Icon name="Wrench" size={24} className="text-[#2C3E50]" />
              </div>
              <h3 className="font-semibold text-[#2C3E50] mb-2">Полный цикл</h3>
              <p className="text-sm text-gray-600">От замера до установки</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-md">
                <Icon name="Shield" size={24} className="text-[#2C3E50]" />
              </div>
              <h3 className="font-semibold text-[#2C3E50] mb-2">Гарантия 5 лет</h3>
              <p className="text-sm text-gray-600">Уверены в качестве</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-md">
                <Icon name="CreditCard" size={24} className="text-[#2C3E50]" />
              </div>
              <h3 className="font-semibold text-[#2C3E50] mb-2">Рассрочка</h3>
              <p className="text-sm text-gray-600">Удобная оплата</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2C3E50] mb-12">Готовые проекты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src="/img/798f9a34-1fba-4e62-b75a-a2b65f73f228.jpg" 
                    alt="Современная белая кухня" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#2C3E50]">Современная</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">Белая классика</h3>
                  <p className="text-gray-600 mb-4">Минималистичный дизайн с деревянными столешницами</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">от 280 000 ₽</span>
                    <Button size="sm" variant="outline">Подробнее</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src="/img/c6736035-2750-45f1-8047-2dc6d89c96f8.jpg" 
                    alt="Темная элегантная кухня" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#2C3E50]">Премиум</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">Темная элегантность</h3>
                  <p className="text-gray-600 mb-4">Черные фасады с мраморными столешницами</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">от 450 000 ₽</span>
                    <Button size="sm" variant="outline">Подробнее</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src="/img/297fc145-e79e-44f3-b620-70311260e7c4.jpg" 
                    alt="Скандинавская кухня" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#2C3E50]">Скандинавский</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">Скандинавский стиль</h3>
                  <p className="text-gray-600 mb-4">Светлое дерево и функциональность</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">от 320 000 ₽</span>
                    <Button size="sm" variant="outline">Подробнее</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2C3E50] mb-12">Процесс работы</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#2C3E50] text-white rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">Консультация</h3>
              <p className="text-gray-600">Обсуждаем ваши потребности и бюджет</p>
            </div>
            <div className="text-center">
              <div className="bg-[#2C3E50] text-white rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">Замер</h3>
              <p className="text-gray-600">Бесплатный выезд замерщика на объект</p>
            </div>
            <div className="text-center">
              <div className="bg-[#2C3E50] text-white rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">Дизайн</h3>
              <p className="text-gray-600">Создаем 3D-проект и выбираем материалы</p>
            </div>
            <div className="text-center">
              <div className="bg-[#2C3E50] text-white rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">Установка</h3>
              <p className="text-gray-600">Производство и монтаж под ключ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2C3E50] mb-12">Цены</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 hover:border-[#2C3E50] transition-colors">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">Эконом</h3>
                <div className="text-4xl font-bold text-[#2C3E50] mb-4">от 25 000 ₽<span className="text-lg text-gray-500">/м²</span></div>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-500 mr-2" />МДФ фасады</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-500 mr-2" />Столешница ЛДСП</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-500 mr-2" />Базовая фурнитура</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-500 mr-2" />Гарантия 3 года</li>
                </ul>
                <Button className="w-full bg-[#2C3E50] hover:bg-[#34495E]">Выбрать</Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-[#2C3E50] relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-[#2C3E50] text-white px-4 py-1">Популярно</Badge>
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">Стандарт</h3>
                <div className="text-4xl font-bold text-[#2C3E50] mb-4">от 35 000 ₽<span className="text-lg text-gray-500">/м²</span></div>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-500 mr-2" />МДФ + массив</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-500 mr-2" />Столешница из камня</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-500 mr-2" />Качественная фурнитура</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-500 mr-2" />Гарантия 5 лет</li>
                </ul>
                <Button className="w-full bg-[#2C3E50] hover:bg-[#34495E]">Выбрать</Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-[#2C3E50] transition-colors">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">Премиум</h3>
                <div className="text-4xl font-bold text-[#2C3E50] mb-4">от 55 000 ₽<span className="text-lg text-gray-500">/м²</span></div>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-500 mr-2" />Натуральный массив</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-500 mr-2" />Мраморные столешницы</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-500 mr-2" />Премиум фурнитура</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-500 mr-2" />Гарантия 7 лет</li>
                </ul>
                <Button className="w-full bg-[#2C3E50] hover:bg-[#34495E]">Выбрать</Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-4">Рассрочка 0% на 12 месяцев</p>
            <Button size="lg" className="bg-[#2C3E50] hover:bg-[#34495E]">
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#2C3E50] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Связаться с нами</h2>
              <p className="text-lg text-gray-300 mb-8">
                Готовы обсудить ваш проект? Оставьте заявку, и мы свяжемся с вами в течение 30 минут.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Icon name="Phone" size={24} className="text-gray-300" />
                  <span className="text-lg">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Mail" size={24} className="text-gray-300" />
                  <span className="text-lg">info@kstom-kitchen.ru</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="MapPin" size={24} className="text-gray-300" />
                  <span className="text-lg">г. Москва, ул. Примерная, 123</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Clock" size={24} className="text-gray-300" />
                  <span className="text-lg">Пн-Сб: 9:00 - 19:00</span>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="bg-white text-gray-900">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Заказать звонок</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Имя *</label>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон *</label>
                      <Input placeholder="+7 (999) 123-45-67" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input placeholder="email@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Комментарий</label>
                      <Textarea placeholder="Расскажите о своем проекте" rows={4} />
                    </div>
                    <Button className="w-full bg-[#2C3E50] hover:bg-[#34495E]">
                      Отправить заявку
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 КSTOM КУХНИ. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;