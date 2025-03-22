
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-blue-500/5 backdrop-blur-3xl"></div>
        <div className="absolute -top-[30%] -left-[10%] w-[60%] h-[60%] rounded-full bg-blue-100/40"></div>
        <div className="absolute -bottom-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-blue-200/30"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 pt-20 pb-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block animate-fade-in">
            <span className="inline-block py-1 px-3 mb-6 rounded-full bg-blue-100 text-blue-700 text-xs font-medium tracking-wider uppercase">
              Dom Pomocy Społecznej
            </span>
          </div>
          
          <h1 className="heading-1 mb-6 animate-fade-up">
            Profesjonalna opieka <br className="hidden sm:inline" />
            <span className="text-primary">z sercem i troską</span>
          </h1>
          
          <p className="paragraph text-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Zapewniamy komfortowe warunki, fachową opiekę oraz miejsce, 
            gdzie każdy mieszkaniec czuje się jak w domu. Dowiedz się więcej o naszej placówce 
            i oferowanych usługach.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 transition-colors duration-300">
              <Link to="/about" className="flex items-center">
                O naszej placówce
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 transition-colors duration-300">
              <Link to="/contact">Skontaktuj się z nami</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
