
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import NewsGrid from '@/components/NewsGrid';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Users, Heart, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NewsItem } from '@/components/NewsCard';

// Sample news data (in a real app, this would come from an API)
const sampleNews: NewsItem[] = [
  {
    id: 1,
    title: 'Nowe zajęcia terapeutyczne dla seniorów',
    excerpt: 'Od września wprowadzamy nowe zajęcia terapeutyczne, które pomogą naszym podopiecznym w utrzymaniu sprawności fizycznej i umysłowej.',
    date: '28.08.2023',
    image: 'https://images.unsplash.com/photo-1573497491765-55ef24bbc541?q=80&w=800&auto=format&fit=crop',
    slug: 'nowe-zajecia-terapeutyczne'
  },
  {
    id: 2,
    title: 'Wycieczka do ogrodu botanicznego',
    excerpt: 'W zeszłym tygodniu nasi mieszkańcy mieli okazję odwiedzić ogród botaniczny w ramach programu aktywizacji społecznej.',
    date: '15.08.2023',
    image: 'https://images.unsplash.com/photo-1464272759149-9505e1b962ba?q=80&w=800&auto=format&fit=crop',
    slug: 'wycieczka-do-ogrodu-botanicznego'
  },
  {
    id: 3,
    title: 'Spotkanie z lokalnymi artystami',
    excerpt: 'Lokalni artyści odwiedzili nasz dom i poprowadzili warsztaty malarskie dla mieszkańców. Zobacz galerię powstałych prac.',
    date: '02.08.2023',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=800&auto=format&fit=crop',
    slug: 'spotkanie-z-lokalnymi-artystami'
  },
];

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6 animate-fade-up">
                <div className="inline-block">
                  <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-medium tracking-wider uppercase">
                    O nas
                  </span>
                </div>
                <h2 className="heading-2">Profesjonalna opieka w przyjaznym środowisku</h2>
                <p className="paragraph text-foreground/80">
                  Dom Pomocy Społecznej w Jaworznie to miejsce, gdzie oferujemy nie tylko profesjonalną opiekę, 
                  ale także przyjazne środowisko, w którym nasi podopieczni mogą czuć się jak w domu. 
                  Nasza wykwalifikowana kadra zapewnia całodobową opiekę, wsparcie medyczne oraz 
                  różnorodne zajęcia aktywizujące.
                </p>
                <div className="pt-2">
                  <Button className="bg-primary hover:bg-primary/90">
                    <Link to="/about" className="flex items-center">
                      Poznaj nas lepiej
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="aspect-square rounded-lg overflow-hidden transform translate-y-8">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" 
                    alt="Przyjazne środowisko" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581579438747-104c53d7fbc4?q=80&w=600&auto=format&fit=crop" 
                    alt="Profesjonalna opieka" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=600&auto=format&fit=crop" 
                    alt="Aktywizacja seniorów" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden transform translate-y--8">
                  <img 
                    src="https://images.unsplash.com/photo-1455637382628-5804b3f5a5c3?q=80&w=600&auto=format&fit=crop" 
                    alt="Komfortowe warunki" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
              <div className="inline-block">
                <span className="inline-block py-1 px-3 mb-4 rounded-full bg-blue-100 text-blue-700 text-xs font-medium tracking-wider uppercase">
                  Nasza oferta
                </span>
              </div>
              <h2 className="heading-2 mb-6">Co oferujemy naszym mieszkańcom</h2>
              <p className="paragraph text-foreground/80">
                W Domu Pomocy Społecznej w Jaworznie stawiamy na kompleksową opiekę i aktywizację 
                naszych mieszkańców, zapewniając im komfortowe warunki i wsparcie każdego dnia.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Users className="h-10 w-10 text-blue-600" />,
                  title: 'Fachowa Kadra',
                  description: 'Wykwalifikowany zespół specjalistów zapewniający całodobową opiekę.',
                  delay: 0.1
                },
                {
                  icon: <Heart className="h-10 w-10 text-blue-600" />,
                  title: 'Opieka Medyczna',
                  description: 'Regularna opieka lekarzy specjalistów oraz całodobowa opieka pielęgniarska.',
                  delay: 0.2
                },
                {
                  icon: <Calendar className="h-10 w-10 text-blue-600" />,
                  title: 'Aktywizacja',
                  description: 'Bogaty program zajęć terapeutycznych, rehabilitacyjnych i rekreacyjnych.',
                  delay: 0.3
                },
                {
                  icon: <Home className="h-10 w-10 text-blue-600" />,
                  title: 'Komfortowe warunki',
                  description: 'Przytulne pokoje, przyjazne przestrzenie wspólne i domowa atmosfera.',
                  delay: 0.4
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-8 shadow-sm border border-border/50 hover:border-blue-200 hover:shadow-md transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${feature.delay}s` }}
                >
                  <div className="mb-5 p-3 rounded-full bg-blue-50 inline-block">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-foreground/80">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Latest News Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div className="mb-6 md:mb-0 animate-fade-up">
                <div className="inline-block">
                  <span className="inline-block py-1 px-3 mb-4 rounded-full bg-blue-100 text-blue-700 text-xs font-medium tracking-wider uppercase">
                    Aktualności
                  </span>
                </div>
                <h2 className="heading-2">Ostatnie wydarzenia</h2>
              </div>
              
              <Button variant="outline" className="text-primary border-primary hover:bg-blue-50 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <Link to="/news" className="flex items-center">
                  Wszystkie aktualności
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <NewsGrid newsItems={sampleNews} itemsPerPage={3} />
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto animate-fade-up">
              <h2 className="heading-2 mb-6">Potrzebujesz więcej informacji?</h2>
              <p className="paragraph mb-8 text-blue-50">
                Skontaktuj się z nami, aby uzyskać więcej informacji o naszym Domu Pomocy Społecznej. 
                Chętnie odpowiemy na wszystkie pytania i pomożemy w podjęciu najlepszej decyzji 
                dla Ciebie lub Twoich bliskich.
              </p>
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 transition-colors">
                <Link to="/contact">Skontaktuj się z nami</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
