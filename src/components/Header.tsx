
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Search, CalendarDays, Archive, Contact, FileText, Folder, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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

  const isActive = (item: NavigationItem): boolean => {
    if (item.href && location.pathname === item.href) return true;
    if (item.children) {
      return item.children.some(child => location.pathname === child.href);
    }
    return false;
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
            src="/lovable-uploads/d76d6e5d-b109-4ebb-b8c9-fc742973cfd5.png" 
            alt="Dom Pomocy Społecznej w Jaworznie" 
            className="h-14"
          />
        </Link>

        {/* Desktop Navigation with Search */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-6">
            {navigation.map((item, index) => (
              <React.Fragment key={item.name}>
                {item.children ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className={cn(
                      'flex items-center text-sm font-medium transition-all duration-200 py-2',
                      'hover:text-primary',
                      isActive(item) ? 'text-primary' : 'text-foreground/80',
                      'animate-slide-in'
                    )}
                    style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="w-48 bg-white shadow-md">
                      {item.children.map((child) => (
                        <DropdownMenuItem key={child.name} asChild>
                          <Link
                            to={child.href}
                            className={cn(
                              'flex w-full items-center px-3 py-2 text-sm transition-colors',
                              location.pathname === child.href
                                ? 'bg-blue-50 text-primary'
                                : 'hover:bg-blue-50/50 hover:text-primary'
                            )}
                          >
                            {child.icon && <child.icon className="mr-2 h-4 w-4" />}
                            {child.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    to={item.href!}
                    className={cn(
                      'text-sm font-medium transition-all duration-200 hover:text-primary relative py-2',
                      'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:scale-x-0 after:transition-transform after:duration-300',
                      'hover:after:scale-x-100',
                      location.pathname === item.href ? 'text-primary after:scale-x-100' : 'text-foreground/80',
                      'animate-slide-in'
                    )}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {item.name}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </nav>
          
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
                            location.pathname === child.href
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
                      location.pathname === item.href
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
