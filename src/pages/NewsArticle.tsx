
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleContent from '@/components/ArticleContent';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ArrowRight } from 'lucide-react';
import { NewsItem } from '@/components/NewsCard';

// This would come from an API in a real application
const articles: Record<string, {
  title: string;
  date: string;
  readingTime: string;
  image: string;
  tags: string[];
  content: React.ReactNode;
}> = {
  'nowe-zajecia-terapeutyczne': {
    title: 'Nowe zajęcia terapeutyczne dla seniorów',
    date: '28.08.2023',
    readingTime: '4 min czytania',
    image: 'https://images.unsplash.com/photo-1573497491765-55ef24bbc541?q=80&w=1200&auto=format&fit=crop',
    tags: ['Terapia', 'Aktywizacja', 'Zdrowie'],
    content: (
      <>
        <p>
          Z przyjemnością informujemy, że od września w naszym Domu Pomocy Społecznej wprowadzamy nowe zajęcia terapeutyczne, 
          które pomogą naszym podopiecznym w utrzymaniu sprawności fizycznej i umysłowej. Program zajęć został opracowany 
          przez zespół specjalistów z dziedziny geriatrii, psychologii i fizjoterapii.
        </p>
        <p>
          Nowe zajęcia będą obejmować:
        </p>
        <ul>
          <li>Treningi pamięci i koncentracji</li>
          <li>Warsztaty kreatywne (malarstwo, ceramika, robótki ręczne)</li>
          <li>Zajęcia muzyczne i taneczne</li>
          <li>Ćwiczenia ogólnousprawniające dostosowane do możliwości seniorów</li>
          <li>Spotkania z psychologiem (indywidualne i grupowe)</li>
        </ul>
        <p>
          Wszystkie zajęcia będą prowadzone przez wykwalifikowanych terapeutów i instruktorów, którzy posiadają wieloletnie 
          doświadczenie w pracy z osobami starszymi. Zajęcia będą odbywać się w małych grupach, aby zapewnić indywidualne 
          podejście do każdego uczestnika.
        </p>
        <h3>Korzyści z udziału w zajęciach</h3>
        <p>
          Regularne uczestnictwo w zajęciach terapeutycznych przynosi wiele korzyści dla seniorów:
        </p>
        <ul>
          <li>Poprawa sprawności fizycznej i koordynacji ruchowej</li>
          <li>Stymulacja funkcji poznawczych i pamięci</li>
          <li>Redukcja stresu i poprawa nastroju</li>
          <li>Integracja społeczna i zapobieganie poczuciu osamotnienia</li>
          <li>Zwiększenie samodzielności w codziennym funkcjonowaniu</li>
        </ul>
        <p>
          Zachęcamy wszystkich mieszkańców do aktywnego udziału w zajęciach. Szczegółowy harmonogram będzie dostępny 
          na tablicach informacyjnych oraz u opiekunów. W przypadku pytań prosimy o kontakt z koordynatorem terapii zajęciowej.
        </p>
      </>
    )
  },
  'wycieczka-do-ogrodu-botanicznego': {
    title: 'Wycieczka do ogrodu botanicznego',
    date: '15.08.2023',
    readingTime: '3 min czytania',
    image: 'https://images.unsplash.com/photo-1464272759149-9505e1b962ba?q=80&w=1200&auto=format&fit=crop',
    tags: ['Wycieczka', 'Rekreacja', 'Integracja'],
    content: (
      <>
        <p>
          W zeszłym tygodniu nasi mieszkańcy mieli okazję odwiedzić ogród botaniczny w ramach programu aktywizacji społecznej. 
          Wycieczka okazała się wspaniałym doświadczeniem dla wszystkich uczestników i przyniosła wiele radości oraz nowych wrażeń.
        </p>
        <p>
          Podczas wizyty w ogrodzie botanicznym nasi podopieczni mogli podziwiać różnorodne gatunki roślin, 
          piękne kompozycje kwiatowe oraz egzotyczne okazy z różnych stron świata. Szczególnym zainteresowaniem 
          cieszyła się palmiarnia oraz ekspozycja roślin wodnych.
        </p>
        <p>
          Spacer alejkami ogrodu był nie tylko przyjemną formą spędzenia czasu, ale również doskonałą okazją 
          do aktywności fizycznej na świeżym powietrzu. Łagodny wysiłek w otoczeniu przyrody pozytywnie wpłynął 
          na samopoczucie uczestników wycieczki.
        </p>
        <h3>Integracja i wspomnienia</h3>
        <p>
          Wspólny wyjazd sprzyjał integracji mieszkańców i pogłębianiu relacji międzyludzkich. Podczas spaceru 
          seniorzy dzielili się wspomnieniami związanymi z ogrodnictwem, opowiadali o roślinach, które uprawiali 
          w swoich ogrodach, wymieniali się wiedzą i doświadczeniami.
        </p>
        <p>
          Po zwiedzaniu ogrodu wszyscy uczestnicy zostali zaproszeni na piknik, podczas którego mogli odpocząć 
          i porozmawiać przy kawie i domowym cieście. Ten wspólny posiłek na świeżym powietrzu był doskonałym 
          zwieńczeniem udanej wycieczki.
        </p>
        <p>
          Dziękujemy wszystkim opiekunom i wolontariuszom, którzy pomogli w organizacji wycieczki. 
          W najbliższym czasie planujemy kolejne wyjazdy i atrakcje dla naszych mieszkańców.
        </p>
      </>
    )
  },
  'spotkanie-z-lokalnymi-artystami': {
    title: 'Spotkanie z lokalnymi artystami',
    date: '02.08.2023',
    readingTime: '5 min czytania',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200&auto=format&fit=crop',
    tags: ['Sztuka', 'Warsztaty', 'Kultura'],
    content: (
      <>
        <p>
          Lokalni artyści odwiedzili nasz dom i poprowadzili warsztaty malarskie dla mieszkańców. 
          Spotkanie artystyczne okazało się niezwykłym wydarzeniem, które pozwoliło naszym podopiecznym 
          odkryć nowe talenty i wyrazić siebie poprzez sztukę.
        </p>
        <p>
          Warsztaty poprowadziło trzech uznanych artystów z Jaworzna: Maria Kowalska (malarstwo akwarelowe), 
          Jan Nowak (techniki mieszane) oraz Anna Wiśniewska (malarstwo olejne). Każdy z artystów przygotował 
          krótką prezentację swojej twórczości, a następnie poprowadził praktyczne zajęcia dla uczestników.
        </p>
        <h3>Twórczość bez granic</h3>
        <p>
          Podczas warsztatów nasi mieszkańcy mieli możliwość wypróbowania różnych technik malarskich 
          i stworzenia własnych dzieł sztuki. Artyści wprowadzili uczestników w podstawy kompozycji, 
          mieszania kolorów oraz technik nakładania farby. Co najważniejsze, zachęcali do swobodnej 
          ekspresji i czerpania radości z procesu tworzenia.
        </p>
        <p>
          Wielu uczestników warsztatów odkryło w sobie nieznane wcześniej talenty i pasje. 
          Niektórzy z nich malowali po raz pierwszy od wielu lat, inni po raz pierwszy w życiu. 
          Powstałe prace zachwycały różnorodnością, kreatywnością i emocjonalnym przekazem.
        </p>
        <h3>Wystawa prac</h3>
        <p>
          Wszystkie prace stworzone podczas warsztatów zostały zaprezentowane na wystawie w holu głównym 
          naszego Domu Pomocy Społecznej. Wernisaż odbył się tydzień po warsztatach i zgromadził nie tylko 
          mieszkańców i personel, ale również rodziny podopiecznych oraz przedstawicieli lokalnej społeczności.
        </p>
        <p>
          Wystawa będzie dostępna dla zwiedzających przez miesiąc. Zachęcamy wszystkich do obejrzenia 
          powstałych dzieł i docenienia kreatywności naszych mieszkańców. Planujemy kontynuować współpracę 
          z lokalnymi artystami i organizować regularne warsztaty artystyczne.
        </p>
        <p>
          Dziękujemy artystom za poświęcony czas, pasję i zaangażowanie w prowadzenie warsztatów. 
          Szczególne podziękowania kierujemy również do lokalnego sklepu artystycznego za przekazanie 
          materiałów plastycznych.
        </p>
      </>
    )
  }
};

// Sample related news
const relatedNews: NewsItem[] = [
  {
    id: 4,
    title: 'Koncert chóru seniorów z okazji Dnia Babci i Dziadka',
    excerpt: 'Nasz chór seniorów wystąpił z wyjątkowym koncertem z okazji Dnia Babci i Dziadka. Zobacz relację z tego wyjątkowego wydarzenia.',
    date: '22.01.2023',
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=800&auto=format&fit=crop',
    slug: 'koncert-choru-seniorow'
  },
  {
    id: 5,
    title: 'Warsztaty kulinarne - tradycyjne przepisy',
    excerpt: 'W ramach cotygodniowych zajęć kulinarnych nasi mieszkańcy dzielili się tradycyjnymi przepisami i wspólnie przygotowywali potrawy.',
    date: '10.07.2023',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop',
    slug: 'warsztaty-kulinarne'
  }
];

const NewsArticle: React.FC = () => {
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
              <Link to="/news" className="flex items-center">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Powrót do aktualności
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
              <Link to="/news" className="text-blue-700 hover:text-blue-800">Aktualności</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-500 truncate">{article.title}</span>
            </div>
          </div>
        </div>
        
        {/* Article Content */}
        <div className="container mx-auto px-4 py-10 md:py-16">
          <div className="mb-8">
            <Button variant="outline" size="sm">
              <Link to="/news" className="flex items-center">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Powrót do aktualności
              </Link>
            </Button>
          </div>
          
          <ArticleContent
            title={article.title}
            date={article.date}
            readingTime={article.readingTime}
            image={article.image}
            tags={article.tags}
            content={article.content}
          />
          
          {/* Related Articles */}
          <div className="mt-20 border-t border-border pt-16">
            <h3 className="heading-3 mb-10">Podobne artykuły</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedNews.map((item) => (
                <article key={item.id} className="flex bg-white rounded-lg overflow-hidden border border-border/50 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                  <div className="w-1/3 aspect-square">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-2/3 p-4">
                    <div className="text-xs text-muted-foreground mb-2">{item.date}</div>
                    <h4 className="font-heading font-semibold text-lg mb-2 line-clamp-2">
                      <Link to={`/news/${item.slug}`} className="hover:text-primary transition-colors">
                        {item.title}
                      </Link>
                    </h4>
                    <Link 
                      to={`/news/${item.slug}`}
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      Czytaj więcej
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NewsArticle;
