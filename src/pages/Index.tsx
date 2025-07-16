import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">КSTOM КУХНИ</h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#projects" className="text-white/80 hover:text-pink-400 transition-colors">Проекты</a>
            <a href="#process" className="text-white/80 hover:text-pink-400 transition-colors">Процесс</a>
            <a href="#prices" className="text-white/80 hover:text-pink-400 transition-colors">Цены</a>
            <a href="#contact" className="text-white/80 hover:text-pink-400 transition-colors">Контакты</a>
          </nav>
          <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 shadow-lg shadow-pink-500/25">
            Заказать звонок
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20 animate-pulse"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-bounce"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-bounce"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            Кухни на заказ<br />любой сложности
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Полный цикл производства от замера до установки. Работаем с массивом и МДФ, 
            создаем 3D-визуализацию и даем гарантию 5 лет.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 shadow-lg shadow-pink-500/25 px-8">
              Бесплатный замер
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white bg-transparent backdrop-blur-sm">
              Смотреть проекты
            </Button>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg shadow-pink-500/25 group-hover:scale-110 transition-transform">
                <Icon name="Ruler" size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">3D-визуализация</h3>
              <p className="text-sm text-white/70">Увидите результат до производства</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform">
                <Icon name="Wrench" size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Полный цикл</h3>
              <p className="text-sm text-white/70">От замера до установки</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform">
                <Icon name="Shield" size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Гарантия 5 лет</h3>
              <p className="text-sm text-white/70">Уверены в качестве</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-cyan-500 to-pink-500 rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:scale-110 transition-transform">
                <Icon name="CreditCard" size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Рассрочка</h3>
              <p className="text-sm text-white/70">Удобная оплата</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-12">Готовые проекты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 bg-black/40 backdrop-blur-md border border-white/10 hover:border-pink-500/50">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src="/img/798f9a34-1fba-4e62-b75a-a2b65f73f228.jpg" 
                    alt="Современная белая кухня" 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-pink-500 to-purple-500 text-white border-0 shadow-lg">Современная</Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Белая классика</h3>
                  <p className="text-white/70 mb-4">Минималистичный дизайн с деревянными столешницами</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-pink-400 font-semibold">от 280 000 ₽</span>
                    <Button size="sm" variant="outline" className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white">Подробнее</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 bg-black/40 backdrop-blur-md border border-white/10 hover:border-purple-500/50">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src="/img/c6736035-2750-45f1-8047-2dc6d89c96f8.jpg" 
                    alt="Темная элегантная кухня" 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 shadow-lg">Премиум</Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Темная элегантность</h3>
                  <p className="text-white/70 mb-4">Черные фасады с мраморными столешницами</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-purple-400 font-semibold">от 450 000 ₽</span>
                    <Button size="sm" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">Подробнее</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 bg-black/40 backdrop-blur-md border border-white/10 hover:border-blue-500/50">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src="/img/297fc145-e79e-44f3-b620-70311260e7c4.jpg" 
                    alt="Скандинавская кухня" 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 shadow-lg">Скандинавский</Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Скандинавский стиль</h3>
                  <p className="text-white/70 mb-4">Светлое дерево и функциональность</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-blue-400 font-semibold">от 320 000 ₽</span>
                    <Button size="sm" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">Подробнее</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-12">Процесс работы</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-pink-500 to-purple-500 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold shadow-lg shadow-pink-500/25 group-hover:scale-110 transition-transform">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Консультация</h3>
              <p className="text-white/70">Обсуждаем ваши потребности и бюджет</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Замер</h3>
              <p className="text-white/70">Бесплатный выезд замерщика на объект</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Дизайн</h3>
              <p className="text-white/70">Создаем 3D-проект и выбираем материалы</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-cyan-500 to-green-500 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold shadow-lg shadow-cyan-500/25 group-hover:scale-110 transition-transform">
                4
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Установка</h3>
              <p className="text-white/70">Производство и монтаж под ключ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-20 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-12">Цены</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-white/10 hover:border-pink-500/50 transition-colors bg-black/40 backdrop-blur-md">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Эконом</h3>
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">от 25 000 ₽<span className="text-lg text-white/50">/м²</span></div>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-400 mr-2" /><span className="text-white/80">МДФ фасады</span></li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-400 mr-2" /><span className="text-white/80">Столешница ЛДСП</span></li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-400 mr-2" /><span className="text-white/80">Базовая фурнитура</span></li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-400 mr-2" /><span className="text-white/80">Гарантия 3 года</span></li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 shadow-lg">Выбрать</Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-gradient-to-r from-purple-500 to-pink-500 relative bg-black/40 backdrop-blur-md shadow-2xl shadow-purple-500/25">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 shadow-lg animate-pulse">Популярно</Badge>
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Стандарт</h3>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">от 35 000 ₽<span className="text-lg text-white/50">/м²</span></div>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-400 mr-2" /><span className="text-white/80">МДФ + массив</span></li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-400 mr-2" /><span className="text-white/80">Столешница из камня</span></li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-400 mr-2" /><span className="text-white/80">Качественная фурнитура</span></li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-400 mr-2" /><span className="text-white/80">Гарантия 5 лет</span></li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-lg">Выбрать</Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-white/10 hover:border-blue-500/50 transition-colors bg-black/40 backdrop-blur-md">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Премиум</h3>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">от 55 000 ₽<span className="text-lg text-white/50">/м²</span></div>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-400 mr-2" /><span className="text-white/80">Натуральный массив</span></li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-400 mr-2" /><span className="text-white/80">Мраморные столешницы</span></li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-400 mr-2" /><span className="text-white/80">Премиум фурнитура</span></li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-400 mr-2" /><span className="text-white/80">Гарантия 7 лет</span></li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 shadow-lg">Выбрать</Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-white/80 mb-4">Рассрочка 0% на 12 месяцев</p>
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-lg shadow-purple-500/25">
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/40 backdrop-blur-sm text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Связаться с нами</h2>
              <p className="text-lg text-white/80 mb-8">
                Готовы обсудить ваш проект? Оставьте заявку, и мы свяжемся с вами в течение 30 минут.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 group">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-lg">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <span className="text-lg text-white/80 group-hover:text-white transition-colors">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-lg">
                    <Icon name="Mail" size={24} className="text-white" />
                  </div>
                  <span className="text-lg text-white/80 group-hover:text-white transition-colors">info@kstom-kitchen.ru</span>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <span className="text-lg text-white/80 group-hover:text-white transition-colors">г. Москва, ул. Примерная, 123</span>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="bg-gradient-to-r from-cyan-500 to-green-500 p-2 rounded-lg">
                    <Icon name="Clock" size={24} className="text-white" />
                  </div>
                  <span className="text-lg text-white/80 group-hover:text-white transition-colors">Пн-Сб: 9:00 - 19:00</span>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="bg-black/40 backdrop-blur-md border border-white/10 text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Заказать звонок</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white/80">Имя *</label>
                      <Input placeholder="Ваше имя" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white/80">Телефон *</label>
                      <Input placeholder="+7 (999) 123-45-67" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white/80">Email</label>
                      <Input placeholder="email@example.com" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white/80">Комментарий</label>
                      <Textarea placeholder="Расскажите о своем проекте" rows={4} className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 shadow-lg shadow-pink-500/25">
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
      <footer className="bg-black/60 backdrop-blur-sm text-white py-8 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60">© 2024 <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent font-semibold">КSTOM КУХНИ</span>. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;