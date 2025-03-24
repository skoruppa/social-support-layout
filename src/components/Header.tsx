
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Search, CalendarDays, Archive, Contact, FileText, Folder, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface NavigationSubItem {
  name: string;
  href: string;
  icon?: React.ElementType;
}

interface NavigationItem {
  name: string;
  href?: string;
  icon?: React.ElementType;
  children?: NavigationSubItem[];
}

const navigation: NavigationItem[] = [
  { name: 'Strona główna', href: '/' },
  { 
    name: 'Wydarzenia', 
    children: [
      { name: 'Wydarzenia 2025', href: '/events-2025', icon: CalendarDays },
      { name: 'Archiwum', href: '/archive', icon: Archive },
    ]
  },
  { name: 'Kontakt', href: '/contact', icon: Contact },
  { name: 'RODO', href: '/rodo', icon: FileText },
  { 
    name: 'Projekty', 
    children: [
      { name: 'Projekty', href: '/projects', icon: Folder },
      { name: 'Projekty EU', href: '/projects-eu', icon: Folder },
    ]
  },
  { name: 'Deklaracja Dostępności Cyfrowej', href: '/accessibility-declaration', icon: FileText },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const isActive = (href: string): boolean => {
    return location.pathname === href;
  };

  return (
    <header
      className={cn(
        'fixed w-full z-40 transition-all duration-300 ease-in-out',
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="animate-fade-in flex items-center"
        >
          <img 
            src="/lovable-uploads/8e266038-de0c-4b24-8846-2eccb6dd5ba7.png" 
            alt="Dom Pomocy Społecznej w Jaworznie" 
            className="h-14"
          />
        </Link>

        {/* Desktop Navigation with Search */}
        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList className="space-x-4">
              {navigation.map((item, index) => (
                <NavigationMenuItem key={item.name}>
                  {item.children ? (
                    <>
                      <NavigationMenuTrigger 
                        className={cn(
                          'text-sm font-medium transition-all duration-200',
                          'hover:text-primary',
                          item.children.some(child => isActive(child.href)) ? 'text-primary' : 'text-foreground/80'
                        )}
                      >
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[220px] gap-2 p-2">
                          {item.children.map((child) => (
                            <li key={child.name}>
                              <Link
                                to={child.href}
                                className={cn(
                                  'flex items-center rounded-md px-3 py-2 text-sm transition-colors',
                                  isActive(child.href)
                                    ? 'bg-blue-50 text-primary'
                                    : 'text-foreground/80 hover:bg-blue-50/50 hover:text-primary'
                                )}
                              >
                                {child.icon && <child.icon className="mr-2 h-4 w-4" />}
                                {child.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link
                      to={item.href!}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        'text-sm font-medium transition-all duration-200',
                        isActive(item.href!) ? 'text-primary' : 'text-foreground/80'
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="search"
              placeholder="Szukaj..."
              className="w-[200px] pr-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              type="submit" 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-foreground/70 hover:text-primary transition-colors"
              aria-label="Szukaj"
            >
              <Search size={16} />
            </button>
          </form>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-foreground/90 hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 py-4 shadow-md animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="relative mb-2">
              <Input
                type="search"
                placeholder="Szukaj..."
                className="w-full pr-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-foreground/70 hover:text-primary transition-colors"
                aria-label="Szukaj"
              >
                <Search size={16} />
              </button>
            </form>

            {/* Mobile Menu Items */}
            {navigation.map((item, index) => (
              <div key={item.name} className="py-1">
                {item.children ? (
                  <div className="space-y-2">
                    <div className="font-medium text-foreground/90 px-3 py-1">
                      {item.name}
                    </div>
                    <div className="pl-6 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className={cn(
                            'flex items-center py-2 px-3 text-sm font-medium transition-colors duration-200 rounded-md',
                            isActive(child.href)
                              ? 'text-primary bg-blue-50'
                              : 'text-foreground/80 hover:text-primary hover:bg-blue-50/50'
                          )}
                        >
                          {child.icon && <child.icon className="mr-2 h-4 w-4" />}
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href!}
                    className={cn(
                      'py-2 px-3 text-base font-medium transition-colors duration-200 block rounded-md',
                      isActive(item.href!)
                        ? 'text-primary bg-blue-50'
                        : 'text-foreground/80 hover:text-primary hover:bg-blue-50/50'
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
