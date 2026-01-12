import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Headphones, CreditCard, Star, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import ProductCard from '@/components/products/ProductCard';
import { categories, getFeaturedProducts, getNewProducts, getOnSaleProducts } from '@/lib/products';
import heroSetup from '@/assets/hero-setup.jpg';

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  const newProducts = getNewProducts();
  const saleProducts = getOnSaleProducts();

  const features = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'Free delivery on orders over ₹99',
    },
    {
      icon: Shield,
      title: 'Secure Payment',
      description: '100% secure payment processing',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Expert help whenever you need it',
    },
    {
      icon: CreditCard,
      title: 'Easy Returns',
      description: '30-day hassle-free returns',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 gradient-glow opacity-50" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroSetup})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container relative py-20 lg:py-32">
          <div className="max-w-3xl space-y-6">
            <Badge className="gradient-primary border-0 text-sm px-4 py-1">
              🔥 New Arrivals Just Dropped
            </Badge>
            <h1
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              Level Up Your
              <span className="block text-gradient">Gaming Experience</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Discover premium gaming laptops, desktops, and components. 
              Unleash your potential with cutting-edge technology from world-renowned brands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button size="lg" className="gradient-primary shadow-glow gap-2 text-primary-foreground">
                  Shop Now
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/products?category=laptops">
                <Button size="lg" variant="outline" className="gap-2">
                  View Laptops
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="border-y border-border bg-card">
        <div className="container py-6">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2
                className="text-2xl font-bold sm:text-3xl"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                Shop by Category
              </h2>
              <p className="text-muted-foreground mt-1">Find exactly what you need</p>
            </div>
            <Link to="/products">
              <Button variant="ghost" className="gap-1">
                View All <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {categories.map((category) => (
              <Link key={category.id} to={`/products?category=${category.id}`}>
                <Card className="group cursor-pointer border-border transition-all hover:shadow-hover hover:border-primary/30">
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                    <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <span className="text-primary text-2xl">
                        {category.id === 'laptops' && '💻'}
                        {category.id === 'desktops' && '🖥️'}
                        {category.id === 'components' && '⚡'}
                        {category.id === 'peripherals' && '⌨️'}
                        {category.id === 'monitors' && '🖥'}
                        {category.id === 'accessories' && '🎧'}
                      </span>
                    </div>
                    <h3 className="font-semibold transition-colors group-hover:text-primary">
                      {category.name}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-secondary/50">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <Badge className="mb-2 gradient-primary border-0">Featured</Badge>
              <h2
                className="text-2xl font-bold sm:text-3xl"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                Top Picks for Gamers
              </h2>
            </div>
            <Link to="/products?featured=true">
              <Button variant="ghost" className="gap-1">
                View All <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Sale Banner */}
      <section className="py-16">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl gradient-primary p-8 lg:p-12">
            <div className="absolute right-0 top-0 h-full w-1/2 opacity-20">
              <img
                src={heroSetup}
                alt="Gaming setup"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative z-10 max-w-xl">
              <Badge variant="secondary" className="mb-4">Limited Time Offer</Badge>
              <h2
                className="text-3xl font-bold text-primary-foreground sm:text-4xl"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                Up to 30% Off
                <span className="block">Gaming Essentials</span>
              </h2>
              <p className="mt-4 text-primary-foreground/80">
                Upgrade your setup with incredible savings on select gaming laptops, 
                graphics cards, and peripherals. Don't miss out!
              </p>
              <Link to="/products?sale=true">
                <Button size="lg" variant="secondary" className="mt-6 gap-2">
                  Shop the Sale
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <Badge className="mb-2" variant="secondary">Just Arrived</Badge>
              <h2
                className="text-2xl font-bold sm:text-3xl"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                New Products
              </h2>
            </div>
            <Link to="/products?new=true">
              <Button variant="ghost" className="gap-1">
                View All <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {newProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-secondary/50">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4 gradient-primary border-0">Reviews</Badge>
            <h2
              className="text-2xl font-bold sm:text-3xl"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              What Our Customers Say
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: 'Alex Chen',
                review: 'Best gaming laptop I\'ve ever owned! Fast shipping and excellent customer service.',
                rating: 5,
              },
              {
                name: 'Sarah Martinez',
                review: 'TechZone has the best prices and selection. My go-to store for all PC components.',
                rating: 5,
              },
              {
                name: 'Mike Johnson',
                review: 'Great experience from start to finish. The RTX 4080 I bought runs like a dream!',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.review}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="container">
          <Card className="border-border overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-12 space-y-4">
                  <h2
                    className="text-2xl font-bold sm:text-3xl"
                    style={{ fontFamily: 'Orbitron, sans-serif' }}
                  >
                    Stay Updated
                  </h2>
                  <p className="text-muted-foreground">
                    Subscribe to our newsletter for exclusive deals, new product launches, 
                    and tech tips delivered straight to your inbox.
                  </p>
                  <div className="flex gap-3 max-w-md">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 rounded-md border border-input bg-background px-4 py-2"
                    />
                    <Button className="gradient-primary">Subscribe</Button>
                  </div>
                </div>
                <div
                  className="hidden lg:block bg-cover bg-center"
                  style={{ backgroundImage: `url(${heroSetup})` }}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
