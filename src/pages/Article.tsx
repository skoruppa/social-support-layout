
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleContent from '@/components/ArticleContent';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

// This would come from an API in a real application
const articles: Record<string, {
  title: string;
  date: string;
  image: string;
  category: string;
  content: React.ReactNode;
}> = {
  'historia-dps-jaworzno': {
    title: 'Historia Domu Pomocy Społecznej w Jaworznie',
    date: '10.01.2023',
    image: 'https://images.unsplash.com/photo-1563461661024-ce984ab861fb?q=80&w=1200&auto=format&fit=crop',
    category: 'O nas',
    content: (
      <>
        <p>
          Dom Pomocy Społecznej w Jaworznie ma bogatą historię sięgającą lat 70. XX wieku. 
          Przez dekady swojej działalności placówka przeszła wiele przemian, nieustannie dostosowując 
          się do zmieniających się potrzeb mieszkańców i standardów opieki.
        </p>
        <h3>Początki (1975-1985)</h3>
        <p>
          Dom Pomocy Społecznej w Jaworznie został oficjalnie otwarty w 1975 roku jako odpowiedź 
          na rosnące potrzeby lokalnej społeczności w zakresie opieki nad osobami starszymi i niepełnosprawnymi. 
          Początkowo placówka miała charakter niewielkiego ośrodka, mogącego przyjąć około 30 mieszkańców.
        </p>
        <p>
          Pierwszy budynek DPS znajdował się przy ulicy Kolejowej i był adaptacją dawnego budynku administracyjnego. 
          Pomimo skromnych warunków, ośrodek od początku stawiał na profesjonalną opiekę i tworzenie rodzinnej atmosfery.
        </p>
        <h3>Rozbudowa i modernizacja (1985-2000)</h3>
        <p>
          W latach 80. rozpoczęto rozbudowę placówki, która pozwoliła na zwiększenie liczby miejsc dla mieszkańców. 
          W 1992 roku oddano do użytku nowy, większy budynek przy obecnej lokalizacji, co znacząco poprawiło 
          warunki bytowe pensjonariuszy.
        </p>
        <p>
          Lata 90. to okres intensywnej modernizacji i dostosowywania ośrodka do europejskich standardów. 
          Wprowadzono nowe programy terapeutyczne i rehabilitacyjne, a kadra przeszła specjalistyczne szkolenia 
          z zakresu opieki geriatrycznej i pracy z osobami niepełnosprawnymi.
        </p>
        <h3>Współczesność (2000-obecnie)</h3>
        <p>
          Początek XXI wieku przyniósł kolejne inwestycje w infrastrukturę i jakość świadczonych usług. 
          W 2008 roku zakończono kompleksową modernizację budynku, w ramach której powstały nowe sale 
          terapeutyczne, rehabilitacyjne oraz przestronne pokoje dla mieszkańców.
        </p>
        <p>
          W 2015 roku, z okazji 40-lecia istnienia placówki, otwarto nowy pawilon rekreacyjny z ogrodem 
          zimowym oraz zmodernizowano tereny zielone wokół budynku, tworząc przyjazną przestrzeń do wypoczynku 
          na świeżym powietrzu.
        </p>
        <p>
          Obecnie Dom Pomocy Społecznej w Jaworznie jest nowoczesną placówką oferującą całodobową opiekę 
          dla 80 mieszkańców. Ośrodek specjalizuje się w opiece nad osobami starszymi, przewlekle somatycznie 
          chorymi oraz niepełnosprawnymi fizycznie.
        </p>
        <h3>Misja i wartości</h3>
        <p>
          Przez wszystkie lata działalności misją DPS w Jaworznie było zapewnienie mieszkańcom godnych 
          warunków życia, profesjonalnej opieki oraz możliwości samorealizacji. Placówka niezmiennie kieruje 
          się takimi wartościami jak szacunek dla godności człowieka, empatia, profesjonalizm i indywidualne 
          podejście do każdego mieszkańca.
        </p>
        <p>
          Historia Domu Pomocy Społecznej w Jaworznie jest historią ludzi - zarówno mieszkańców, jak i personelu, 
          który z oddaniem pracuje nad tworzeniem przyjaznego i bezpiecznego miejsca dla osób wymagających wsparcia 
          i opieki.
        </p>
      </>
    )
  },
  'standardy-opieki': {
    title: 'Standardy opieki w DPS Jaworzno',
    date: '15.03.2023',
    image: 'https://images.unsplash.com/photo-1576765608866-5b51f53ade86?q=80&w=1200&auto=format&fit=crop',
    category: 'Usługi',
    content: (
      <>
        <p>
          W Domu Pomocy Społecznej w Jaworznie przykładamy ogromną wagę do jakości świadczonych usług. 
          Nasze standardy opieki opierają się na najlepszych praktykach, aktualnej wiedzy medycznej 
          oraz humanistycznym podejściu do każdego mieszkańca.
        </p>
        <h3>Indywidualne podejście</h3>
        <p>
          Podstawą naszej pracy jest indywidualne podejście do każdego mieszkańca. Dla każdej osoby 
          przebywającej w naszym domu opracowujemy indywidualny plan wsparcia, uwzględniający jej potrzeby, 
          możliwości, zainteresowania i preferencje. Plan ten jest regularnie aktualizowany i dostosowywany 
          do zmieniających się potrzeb.
        </p>
        <h3>Profesjonalna kadra</h3>
        <p>
          Nasz zespół składa się z wysoko wykwalifikowanych specjalistów z różnych dziedzin: pielęgniarek, 
          opiekunów, fizjoterapeutów, terapeutów zajęciowych, psychologów, pracowników socjalnych oraz personelu 
          pomocniczego. Wszyscy pracownicy regularnie uczestniczą w szkoleniach i kursach doskonalących, 
          aby być na bieżąco z najnowszymi standardami opieki.
        </p>
        <h3>Opieka medyczna i pielęgniarska</h3>
        <p>
          Zapewniamy całodobową opiekę pielęgniarską oraz regularne wizyty lekarzy różnych specjalności. 
          Nasz personel medyczny dba o prawidłowe przyjmowanie leków, monitorowanie stanu zdrowia, 
          realizację zaleceń lekarskich oraz profilaktykę zdrowotną.
        </p>
        <p>
          Współpracujemy z pobliskimi placówkami medycznymi, co umożliwia szybki dostęp do specjalistycznej 
          opieki w razie potrzeby. Organizujemy również regularne badania profilaktyczne dla mieszkańców.
        </p>
        <h3>Rehabilitacja i terapia zajęciowa</h3>
        <p>
          Prowadzimy szeroki zakres działań rehabilitacyjnych, dostosowanych do indywidualnych potrzeb i możliwości 
          mieszkańców. Nasz zespół fizjoterapeutów realizuje zarówno zajęcia grupowe, jak i indywidualne, 
          mające na celu utrzymanie lub poprawę sprawności fizycznej.
        </p>
        <p>
          Terapia zajęciowa w naszym domu obejmuje różnorodne formy aktywności: artystyczne, muzyczne, 
          kulinarne, ogrodnicze i wiele innych. Zajęcia te mają na celu nie tylko zagospodarowanie czasu, 
          ale przede wszystkim podtrzymywanie umiejętności, rozwijanie zainteresowań i aktywizację społeczną.
        </p>
        <h3>Wsparcie psychologiczne</h3>
        <p>
          Nasz psycholog oferuje regularne konsultacje indywidualne oraz prowadzi zajęcia grupowe, 
          które pomagają mieszkańcom w radzeniu sobie z trudnymi emocjami, adaptacją do nowej sytuacji 
          życiowej oraz podtrzymywaniem dobrego samopoczucia psychicznego.
        </p>
        <h3>Żywienie</h3>
        <p>
          Oferujemy pełne wyżywienie, uwzględniające zalecenia dietetyczne i preferencje mieszkańców. 
          Posiłki przygotowywane są w naszej kuchni, z wykorzystaniem świeżych i wysokiej jakości produktów. 
          Dbamy o to, aby dieta była zbilansowana, smaczna i dostosowana do potrzeb osób starszych.
        </p>
        <h3>Aktywizacja społeczna</h3>
        <p>
          Regularnie organizujemy różnorodne wydarzenia kulturalne, rekreacyjne i integracyjne, 
          zarówno na terenie domu, jak i poza nim. Współpracujemy z lokalnymi szkołami, organizacjami 
          i instytucjami kultury, co umożliwia mieszkańcom aktywne uczestnictwo w życiu społeczności lokalnej.
        </p>
        <h3>Bezpieczeństwo i komfort</h3>
        <p>
          Nasz obiekt jest w pełni dostosowany do potrzeb osób z niepełnosprawnościami i osób starszych. 
          Posiada wszelkie udogodnienia architektoniczne, systemy przyzywowe w pokojach, a całodobowy personel 
          zapewnia bezpieczeństwo przez całą dobę.
        </p>
        <p>
          Wszystkie standardy opieki w naszym Domu Pomocy Społecznej są zgodne z obowiązującymi przepisami 
          prawa oraz wytycznymi Ministerstwa Rodziny i Polityki Społecznej. Regularnie poddajemy się kontrolom 
          i audytom jakości, stale dążąc do podnoszenia standardów świadczonych usług.
        </p>
      </>
    )
  }
};

const Article: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articles[slug] : null;
  
  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-40">
          <div className="text-center">
            <h1 className="heading-2 mb-6">Artykuł nie został znaleziony</h1>
            <p className="paragraph mb-8">Przepraszamy, ale szukany artykuł nie istnieje lub został usunięty.</p>
            <Button>
              <Link to="/" className="flex items-center">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Powrót na stronę główną
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-white">
        {/* Breadcrumb */}
        <div className="bg-blue-50 py-4 border-b border-blue-100">
          <div className="container mx-auto px-4">
            <div className="flex items-center text-sm">
              <Link to="/" className="text-blue-700 hover:text-blue-800">Strona główna</Link>
              <span className="mx-2 text-gray-400">/</span>
              <Link to="/articles" className="text-blue-700 hover:text-blue-800">Artykuły</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-500 truncate">{article.title}</span>
            </div>
          </div>
        </div>
        
        {/* Article Content */}
        <div className="container mx-auto px-4 py-10 md:py-16">
          <div className="mb-8">
            <Button variant="outline" size="sm">
              <Link to="/articles" className="flex items-center">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Powrót do artykułów
              </Link>
            </Button>
          </div>
          
          <ArticleContent
            title={article.title}
            date={article.date}
            image={article.image}
            tags={[article.category]}
            content={article.content}
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Article;
