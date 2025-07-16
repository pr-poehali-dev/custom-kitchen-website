import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useState, useEffect } from 'react';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: '/img/798f9a34-1fba-4e62-b75a-a2b65f73f228.jpg',
      title: 'Элегантность в каждой детали',
      subtitle: 'Премиальные кухни из натурального дерева'
    },
    {
      image: '/img/c6736035-2750-45f1-8047-2dc6d89c96f8.jpg',
      title: 'Современная классика',
      subtitle: 'Идеальное сочетание стиля и функциональности'
    },
    {
      image: '/img/297fc145-e79e-44f3-b620-70311260e7c4.jpg',
      title: 'Индивидуальный подход',
      subtitle: 'Создаем кухню вашей мечты'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Header */}
      <header className="bg-black/80 backdrop-blur-md border-b border-amber-200/20 relative z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">КSTOM КУХНИ</h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#projects" className="text-white/90 hover:text-amber-400 transition-colors font-medium">Проекты</a>
            <a href="#process" className="text-white/90 hover:text-amber-400 transition-colors font-medium">Процесс</a>
            <a href="#prices" className="text-white/90 hover:text-amber-400 transition-colors font-medium">Цены</a>
            <a href="#contact" className="text-white/90 hover:text-amber-400 transition-colors font-medium">Контакты</a>
          </nav>
          <Button className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-semibold border-0 shadow-lg shadow-amber-500/30">
            Заказать звонок
          </Button>
        </div>
      </header>

      {/* Hero Slider */}
      <section className="relative h-screen overflow-hidden">
        {/* Slider Images */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          ))}
        </div>
        
        {/* Slider Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h2 className="text-7xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent leading-tight">
              {slides[currentSlide].title}
            </h2>
            <p className="text-2xl text-white/90 mb-8 font-light">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-semibold border-0 shadow-lg shadow-amber-500/30 px-12 py-4 text-xl">
                Бесплатный замер
              </Button>
              <Button variant="outline" className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black bg-transparent backdrop-blur-sm font-semibold px-12 py-4 text-xl">
                Смотреть проекты
              </Button>
            </div>
          </div>
        </div>
        
        {/* Slider Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-amber-400 w-8' : 'bg-white/50 hover:bg-white/80'}`}
            />
          ))}
        </div>
        
        {/* Slider Arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 z-20"
        >
          <Icon name="ChevronLeft" size={24} />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 z-20"
        >
          <Icon name="ChevronRight" size={24} />
        </button>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform">
                <Icon name="Ruler" size={28} className="text-black" />
              </div>
              <h3 className="font-semibold text-white mb-3 text-lg">3D-визуализация</h3>
              <p className="text-white/70">Увидите результат до производства</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-yellow-600 to-orange-500 rounded-xl w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg shadow-yellow-500/30 group-hover:scale-110 transition-transform">
                <Icon name="Wrench" size={28} className="text-black" />
              </div>
              <h3 className="font-semibold text-white mb-3 text-lg">Полный цикл</h3>
              <p className="text-white/70">От замера до установки</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform">
                <Icon name="Shield" size={28} className="text-black" />
              </div>
              <h3 className="font-semibold text-white mb-3 text-lg">Гарантия 5 лет</h3>
              <p className="text-white/70">Уверены в качестве</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-red-500 to-pink-500 rounded-xl w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg shadow-red-500/30 group-hover:scale-110 transition-transform">
                <Icon name="CreditCard" size={28} className="text-black" />
              </div>
              <h3 className="font-semibold text-white mb-3 text-lg">Рассрочка</h3>
              <p className="text-white/70">Удобная оплата</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 to-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent mb-4">Готовые проекты</h2>
          <p className="text-xl text-center text-white/70 mb-16 max-w-3xl mx-auto">Каждый проект — это воплощение мечты о совершенной кухне</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl hover:shadow-amber-500/25 transition-all duration-500 bg-black/60 backdrop-blur-md border border-amber-200/20 hover:border-amber-500/50">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src="/img/798f9a34-1fba-4e62-b75a-a2b65f73f228.jpg" 
                    alt="Современная белая кухня" 
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 right-6">
                    <Badge className="bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-semibold border-0 shadow-lg">Современная</Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">Белая классика</h3>
                  <p className="text-white/80 mb-6 text-lg">Минималистичный дизайн с деревянными столешницами</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-amber-400 font-bold">от 280 000 ₽</span>
                    <Button size="sm" variant="outline" className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black font-semibold">Подробнее</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-2xl hover:shadow-amber-500/25 transition-all duration-500 bg-black/60 backdrop-blur-md border border-amber-200/20 hover:border-amber-500/50">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src="/img/c6736035-2750-45f1-8047-2dc6d89c96f8.jpg" 
                    alt="Темная элегантная кухня" 
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 right-6">
                    <Badge className="bg-gradient-to-r from-yellow-600 to-orange-500 text-black font-semibold border-0 shadow-lg">Премиум</Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">Темная элегантность</h3>
                  <p className="text-white/80 mb-6 text-lg">Черные фасады с мраморными столешницами</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-amber-400 font-bold">от 450 000 ₽</span>
                    <Button size="sm" variant="outline" className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black font-semibold">Подробнее</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-2xl hover:shadow-amber-500/25 transition-all duration-500 bg-black/60 backdrop-blur-md border border-amber-200/20 hover:border-amber-500/50">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src="/img/297fc145-e79e-44f3-b620-70311260e7c4.jpg" 
                    alt="Скандинавская кухня" 
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 right-6">
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-black font-semibold border-0 shadow-lg">Скандинавский</Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">Скандинавский стиль</h3>
                  <p className="text-white/80 mb-6 text-lg">Светлое дерево и функциональность</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-amber-400 font-bold">от 320 000 ₽</span>
                    <Button size="sm" variant="outline" className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black font-semibold">Подробнее</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gradient-to-r from-slate-900 to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent mb-16">Процесс работы</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-amber-500 to-yellow-600 text-black rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center text-2xl font-bold shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Консультация</h3>
              <p className="text-white/70">Обсуждаем ваши потребности и бюджет</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-yellow-600 to-orange-500 text-black rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center text-2xl font-bold shadow-lg shadow-yellow-500/30 group-hover:scale-110 transition-transform">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Замер</h3>
              <p className="text-white/70">Бесплатный выезд замерщика на объект</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 text-black rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center text-2xl font-bold shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Дизайн</h3>
              <p className="text-white/70">Создаем 3D-проект и выбираем материалы</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-red-500 to-pink-500 text-black rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center text-2xl font-bold shadow-lg shadow-red-500/30 group-hover:scale-110 transition-transform">
                4
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Установка</h3>
              <p className="text-white/70">Производство и монтаж под ключ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-20 bg-gradient-to-br from-gray-900 to-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent mb-16">Цены</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-amber-200/20 hover:border-amber-500/50 transition-all duration-500 bg-black/60 backdrop-blur-md">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Эконом</h3>
                <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent mb-4">от 25 000 ₽<span className="text-lg text-white/50">/м²</span></div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-amber-400 mr-3" /><span className="text-white/80">МДФ фасады</span></li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-amber-400 mr-3" /><span className="text-white/80">Столешница ЛДСП</span></li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-amber-400 mr-3" /><span className="text-white/80">Базовая фурнитура</span></li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-amber-400 mr-3" /><span className="text-white/80">Гарантия 3 года</span></li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-semibold border-0 shadow-lg shadow-amber-500/30">Выбрать</Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-amber-500 relative bg-black/60 backdrop-blur-md shadow-2xl shadow-amber-500/25 transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-amber-500 to-yellow-600 text-black px-6 py-2 shadow-lg animate-pulse font-semibold">Популярно</Badge>
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Стандарт</h3>
                <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent mb-4">от 35 000 ₽<span className="text-lg text-white/50">/м²</span></div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-amber-400 mr-3" /><span className="text-white/80">МДФ + массив</span></li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-amber-400 mr-3" /><span className="text-white/80">Столешница из камня</span></li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-amber-400 mr-3" /><span className="text-white/80">Качественная фурнитура</span></li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-amber-400 mr-3" /><span className="text-white/80">Гарантия 5 лет</span></li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-semibold border-0 shadow-lg shadow-amber-500/30">Выбрать</Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-amber-200/20 hover:border-amber-500/50 transition-all duration-500 bg-black/60 backdrop-blur-md">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Премиум</h3>
                <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent mb-4">от 55 000 ₽<span className="text-lg text-white/50">/м²</span></div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-amber-400 mr-3" /><span className="text-white/80">Натуральный массив</span></li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-amber-400 mr-3" /><span className="text-white/80">Мраморные столешницы</span></li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-amber-400 mr-3" /><span className="text-white/80">Премиум фурнитура</span></li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-amber-400 mr-3" /><span className="text-white/80">Гарантия 7 лет</span></li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-semibold border-0 shadow-lg shadow-amber-500/30">Выбрать</Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-16">
            <p className="text-xl text-white/80 mb-6">Рассрочка 0% на 12 месяцев</p>
            <Button size="lg" className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-semibold border-0 shadow-lg shadow-amber-500/30 px-8">
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-slate-900 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Связаться с нами</h2>
              <p className="text-xl text-white/80 mb-8">
                Готовы обсудить ваш проект? Оставьте заявку, и мы свяжемся с вами в течение 30 минут.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="bg-gradient-to-r from-amber-500 to-yellow-600 p-3 rounded-xl">
                    <Icon name="Phone" size={24} className="text-black" />
                  </div>
                  <span className="text-xl text-white/80 group-hover:text-white transition-colors">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="bg-gradient-to-r from-yellow-600 to-orange-500 p-3 rounded-xl">
                    <Icon name="Mail" size={24} className="text-black" />
                  </div>
                  <span className="text-xl text-white/80 group-hover:text-white transition-colors">info@kstom-kitchen.ru</span>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-xl">
                    <Icon name="MapPin" size={24} className="text-black" />
                  </div>
                  <span className="text-xl text-white/80 group-hover:text-white transition-colors">г. Москва, ул. Примерная, 123</span>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 p-3 rounded-xl">
                    <Icon name="Clock" size={24} className="text-black" />
                  </div>
                  <span className="text-xl text-white/80 group-hover:text-white transition-colors">Пн-Сб: 9:00 - 19:00</span>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="bg-black/60 backdrop-blur-md border border-amber-200/20 text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Заказать звонок</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white/80">Имя *</label>
                      <Input placeholder="Ваше имя" className="bg-white/10 border-amber-200/30 text-white placeholder:text-white/50" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white/80">Телефон *</label>
                      <Input placeholder="+7 (999) 123-45-67" className="bg-white/10 border-amber-200/30 text-white placeholder:text-white/50" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white/80">Email</label>
                      <Input placeholder="email@example.com" className="bg-white/10 border-amber-200/30 text-white placeholder:text-white/50" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white/80">Комментарий</label>
                      <Textarea placeholder="Расскажите о своем проекте" rows={4} className="bg-white/10 border-amber-200/30 text-white placeholder:text-white/50" />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-semibold border-0 shadow-lg shadow-amber-500/30">
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
      <footer className="bg-black/80 backdrop-blur-sm text-white py-8 border-t border-amber-200/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60">© 2024 <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent font-semibold">КSTOM КУХНИ</span>. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;