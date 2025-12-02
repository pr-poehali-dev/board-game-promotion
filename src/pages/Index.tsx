import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <Icon name="Sparkles" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-black">Truth or Knowledge</span>
            </div>
            <div className="hidden md:flex gap-6">
              <button
                onClick={() => scrollToSection('home')}
                className={`font-medium transition-colors hover:text-primary ${
                  activeSection === 'home' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('rules')}
                className={`font-medium transition-colors hover:text-primary ${
                  activeSection === 'rules' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Правила
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className={`font-medium transition-colors hover:text-primary ${
                  activeSection === 'gallery' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Галерея
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white border-0 text-lg px-4 py-2">
                Образовательная игра 🎓
              </Badge>
              <h1 className="md:text-7xl leading-tight text-emerald-400 text-5xl font-black text-center mx-0">The game of 
«knowledge or action»

</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">Learn subjects in a fun and effective way! A game that turns learning into an adventure.</p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 bg-card border-2 border-primary/20 rounded-xl px-6 py-3">
                  <Icon name="Users" size={24} className="text-primary" />
                  <div>
                    <div className="font-bold text-lg">от 2-х игроков</div>
                    <div className="text-sm text-muted-foreground">Для компании</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-card border-2 border-secondary/20 rounded-xl px-6 py-3">
                  <Icon name="Star" size={24} className="text-secondary" />
                  <div>
                    <div className="font-bold text-lg">99+ </div>
                    <div className="text-sm text-muted-foreground">Возраст</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:opacity-90 text-white font-bold text-lg px-8"
                  onClick={() => scrollToSection('rules')}
                >
                  Узнать правила
                  <Icon name="ArrowRight" size={20} />
                </Button>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img
                src="https://cdn.poehali.dev/files/8643bde8-6a6e-4c56-9066-2ed36574767e.PNG"
                alt="Карточки Knowledge и Action"
                className="relative rounded-3xl shadow-2xl w-full animate-float py-[134px] px-0 mx-[33px] my-[238px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-gradient-to-r from-accent to-primary text-white border-0 text-lg px-4 py-2">
              Почему это работает
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black">Проблема и решение</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-xl">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center">
                  <Icon name="Frown" size={32} className="text-destructive" />
                </div>
                <h3 className="text-2xl font-bold">Проблема</h3>
                <p className="text-muted-foreground">
                  Традиционное обучение скучное. Сложно удерживать мотивацию студентов.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary/50 transition-all hover:shadow-xl">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center">
                  <Icon name="Target" size={32} className="text-secondary" />
                </div>
                <h3 className="text-2xl font-bold">Цель</h3>
                <p className="text-muted-foreground">
                  Создать игру, которая повышает мотивацию и помогает изучать новую информацию.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent/50 transition-all hover:shadow-xl">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                  <Icon name="Trophy" size={32} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold">Результат</h3>
                <p className="text-muted-foreground">
                  90% игроков считают игру интересной. 80% лучше запоминают слова!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="rules" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-gradient-to-r from-primary to-accent text-white border-0 text-lg px-4 py-2">
              Как играть
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black">Правила игры</h2>
            <p className="text-xl text-muted-foreground">
              Простые правила для максимального веселья
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-2 border-primary/20 overflow-hidden">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Состав игры</h3>
                    <p className="text-muted-foreground text-lg">
                      100 карт: 50 карт Knowledge (знание) и 50 карт Action (действие)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Ход игры</h3>
                    <p className="text-muted-foreground text-lg">
                      Игрок выбирает тип карты: Knowledge (ответить на вопрос) или Action (выполнить задание)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Цель игры</h3>
                    <p className="text-muted-foreground text-lg">
                      Первый игрок, который соберёт 7 карт, побеждает! 🏆
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center">
                    <Icon name="Brain" size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Knowledge карты</h3>
                  <p className="text-muted-foreground">Ответьте на вопрос </p>
                  <div className="bg-background/80 rounded-xl p-4 italic border-l-4 border-primary">
                    "Переведи слово apple"
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/30 bg-gradient-to-br from-secondary/5 to-transparent">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center">
                    <Icon name="Zap" size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Action карты</h3>
                  <p className="text-muted-foreground">Выполните задание </p>
                  <div className="bg-background/80 rounded-xl p-4 italic border-l-4 border-secondary">
                    "Name 3 objects in your room"
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Часто задаваемые вопросы</h3>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border-2 rounded-xl px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Сколько длится одна игра?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  В среднем игра длится 20-30 минут, в зависимости от количества игроков и их уровня английского.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-2 rounded-xl px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">Нужен ли высокий уровень знаний?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Нет! Игра подходит для среднего уровня (A2-B1). Карты разной сложности, поэтому каждый найдёт подходящие задания.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-2 rounded-xl px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Можно играть в классе?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да! Игра отлично подходит для уроков английского. Она повышает активность студентов и делает обучение интерактивным.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-gradient-to-r from-secondary to-accent text-white border-0 text-lg px-4 py-2">
              Галерея
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black">Игра в действии</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all hover:shadow-xl group">
              <div className="relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/89ab895b-bf11-4ad9-87ec-56974a48062c/files/04125e76-a78a-4803-afaf-e1b17f3f7f61.jpg"
                  alt="Карты игры"
                  className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-2xl font-bold">Карты Knowledge и Action</h3>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden border-2 hover:border-secondary/50 transition-all hover:shadow-xl group">
              <div className="relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/89ab895b-bf11-4ad9-87ec-56974a48062c/files/0b8640b4-31f2-49d8-99f2-6d183af6c47a.jpg"
                  alt="Игроки за игрой"
                  className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-2xl font-bold">Веселье в процессе</h3>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
              <CardContent className="p-8 md:p-12 text-center space-y-6">
                <Icon name="BarChart3" size={48} className="text-primary mx-auto" />
                <h3 className="text-3xl font-black">Результаты тестирования</h3>
                <div className="grid md:grid-cols-3 gap-6 pt-4">
                  <div className="space-y-2">
                    <div className="text-5xl font-black text-primary">90%</div>
                    <div className="text-sm text-muted-foreground">Считают игру интересной</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-5xl font-black text-secondary">80%</div>
                    <div className="text-sm text-muted-foreground">Лучше запоминают слова</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-5xl font-black text-accent">100%</div>
                    <div className="text-sm text-muted-foreground">Хотят играть ещё!</div>
                  </div>
                </div>
                <p className="text-muted-foreground text-lg pt-4">Протестировано на 20 студентах. 
Повышенная активность на занятии и лучшее запоминание материала.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t">
        <div className="container mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <Icon name="Sparkles" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-black">Truth or Knowledge</span>
          </div>
          <p className="text-muted-foreground">
            Игра повышает мотивацию, помогает учить новые слова и делает обучение интересным и эффективным.
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 Truth or Knowledge. Образовательный проект.
          </p>
        </div>
      </footer>
    </div>
  );
}