import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X, Cpu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useCart } from '@/context/CartContext';
import { categories } from '@/lib/products';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const {
    getCartCount
  } = useCart();
  const cartCount = getCartCount();
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };
  return <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top bar */}
      <div className="gradient-primary">
        <div className="container flex h-8 items-center justify-center text-xs text-primary-foreground">
          <span>🚀 Free Shipping on Orders Over ₹99 | 30-Day Returns | Expert Support</span>
        </div>
      </div>

      {/* Main header */}
      <div className="container flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary shadow-glow">
            <Cpu className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="hidden font-bold text-xl tracking-tight sm:inline-block" style={{
          fontFamily: 'Orbitron, sans-serif'
        }}>BHUNIA TECH<span className="text-gradient">ZONE</span>
          </span>
        </Link>

        {/* Search bar - desktop */}
        <form onSubmit={handleSearch} className="hidden flex-1 max-w-md md:flex">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input type="search" placeholder="Search products..." className="w-full pl-10 pr-4" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
          </div>
        </form>

        {/* Navigation - desktop */}
        <nav className="hidden lg:flex items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-1">
                Products <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <Link to="/products">All Products</Link>
              </DropdownMenuItem>
              {categories.map(category => <DropdownMenuItem key={category.id} asChild>
                  <Link to={`/products?category=${category.id}`}>{category.name}</Link>
                </DropdownMenuItem>)}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/contact">
            <Button variant="ghost">Contact</Button>
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center gradient-primary border-0">
                  {cartCount}
                </Badge>}
            </Button>
          </Link>
          <Link to="/auth" className="hidden sm:block">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/admin" className="hidden sm:block">
            <Button variant="outline" size="sm">
              Admin
            </Button>
          </Link>

          {/* Mobile menu toggle */}
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && <div className="border-t border-border bg-background lg:hidden animate-slide-up">
          <div className="container py-4 space-y-4">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input type="search" placeholder="Search products..." className="w-full pl-10" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
              </div>
            </form>
            <nav className="flex flex-col gap-2">
              <Link to="/products" className="px-3 py-2 rounded-md hover:bg-secondary transition-colors" onClick={() => setIsMenuOpen(false)}>
                All Products
              </Link>
              {categories.map(category => <Link key={category.id} to={`/products?category=${category.id}`} className="px-3 py-2 rounded-md hover:bg-secondary transition-colors" onClick={() => setIsMenuOpen(false)}>
                  {category.name}
                </Link>)}
              <Link to="/contact" className="px-3 py-2 rounded-md hover:bg-secondary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              <Link to="/auth" className="px-3 py-2 rounded-md hover:bg-secondary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Login / Register
              </Link>
              <Link to="/admin" className="px-3 py-2 rounded-md hover:bg-secondary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Admin Panel
              </Link>
            </nav>
          </div>
        </div>}
    </header>;
};
export default Header;