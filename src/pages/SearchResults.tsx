
import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { NewsItem } from '@/components/NewsCard';
import NewsGrid from '@/components/NewsGrid';
import { Search } from 'lucide-react';

// Sample news data (in a real app, this would come from an API)
const allContent: NewsItem[] = [
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
  {
    id: 4,
    title: 'Rozszerzenie oferty rehabilitacyjnej',
    excerpt: 'Nasza placówka rozszerzyła ofertę rehabilitacyjną o nowe zabiegi i terapie dla seniorów.',
    date: '10.07.2023',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop',
    slug: 'rozszerzenie-oferty-rehabilitacyjnej'
  },
  {
    id: 5,
    title: 'Spacery po parku miejskim',
    excerpt: 'Organizujemy cykliczne spacery po parku miejskim dla naszych podopiecznych.',
    date: '05.07.2023',
    image: 'https://images.unsplash.com/photo-1536329058839-1afec6355426?q=80&w=800&auto=format&fit=crop',
    slug: 'spacery-po-parku-miejskim'
  },
];

const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<NewsItem[]>([]);

  useEffect(() => {
    if (query) {
      const lowerCaseQuery = query.toLowerCase();
      // Simulate search from "database"
      const filteredResults = allContent.filter(item => 
        item.title.toLowerCase().includes(lowerCaseQuery) || 
        item.excerpt.toLowerCase().includes(lowerCaseQuery)
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-10">
            <h1 className="text-3xl font-heading font-bold mb-4 flex items-center gap-2">
              <Search className="h-6 w-6 text-primary" />
              Wyniki wyszukiwania: <span className="text-primary">"{query}"</span>
            </h1>
            <p className="text-foreground/80">
              {results.length 
                ? `Znaleziono ${results.length} ${results.length === 1 ? 'wynik' : results.length < 5 ? 'wyniki' : 'wyników'}`
                : 'Nie znaleziono żadnych wyników'}
            </p>
          </div>
          
          {results.length > 0 ? (
            <NewsGrid newsItems={results} />
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-foreground/70 mb-4">Niestety, nie znaleźliśmy żadnych treści pasujących do Twojego wyszukiwania.</p>
              <p className="text-foreground/60">Spróbuj użyć innych słów kluczowych lub przejdź do sekcji <Link to="/news" className="text-primary hover:underline">Aktualności</Link>.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchResults;
