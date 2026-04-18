import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import logo from '@/assets/logo.png';
import navbarBg from '@/assets/navbar-bg.png';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const { itemCount, openCart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const showBackButton = !isHomePage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <header
      style={{
        backgroundImage: `url(${navbarBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'shadow-elevated'
          : 'backdrop-blur-sm'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Left Section */}
          <div className="flex items-center gap-3">
            {showBackButton && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate(-1)}
                className="text-[#5B3A29] hover:bg-[#E8D2B8]"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
            )}
            <Link to="/" className="flex items-center gap-2">
              {/* Logo Image and Text Container */}
              <img
                src={logo}
                alt="KBS Traders - Since 1970"
                className="h-10 md:h-14 w-auto"
              />
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#c1a865]">
                <span className="">K B S</span> TRADERS
              </h1>

            </Link>
          </div>

          {/* Center - Search (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <form onSubmit={handleSearch} className="w-full relative">
              <Input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 bg-[]/80 backdrop-blur-sm border border-[#E8D2B8] text-[#5A3E2B] placeholder:text-[#8B6B55] focus-visible:ring-[#C89B5E]"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#8B6B55]" />
            </form>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            {/* Mobile Search Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-[#5A3E2B] hover:bg-[#E8D2B8]"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
            </Button>

            {/* Cart Button */}
            <Button
              variant="ghost"
              size="icon"
              className="relative leading-tight hover:bg-[#E8D2B8] p-3"
              onClick={openCart}
            >
              <ShoppingBag className="h-7 w-7" />

              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-[#C89B5E] text-white text-xs font-semibold flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Button>
            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-[#5B3A29] hover:hover:bg-[#E8D2B8]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <form onSubmit={handleSearch}>
              <Input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#EADBC8] border border-[#8B6B4A] rounded-lg px-4 py-3
                text-[#5B3A29] placeholder:text-[#8B6B4A]
                          focus:outline-none focus:ring-2 focus:ring-[#8B6B4A]"
                  autoFocus
              />
            </form>
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className="px-4 py-2 text-[#5B3A29] hover:hover:bg-[#E8D2B8] rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/admin"
                className="px-4 py-2 text-[#5B3A29] hover:hover:bg-[#E8D2B8] rounded-md transition-colors text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Admin
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
