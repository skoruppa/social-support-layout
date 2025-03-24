
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import NewsGrid from '@/components/NewsGrid';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
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
            
            <NewsGrid news={sampleNews} />
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
