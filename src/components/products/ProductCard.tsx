import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Star, Eye, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@/lib/products';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, isInCart } = useCart();
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="group relative overflow-hidden border-border bg-card transition-all duration-300 hover:shadow-hover hover:border-primary/30">
      {/* Badges */}
      <div className="absolute left-3 top-3 z-10 flex flex-col gap-2">
        {product.isNew && (
          <Badge className="gradient-primary border-0">New</Badge>
        )}
        {product.onSale && discount > 0 && (
          <Badge variant="destructive" className="gap-1">
            <Tag className="h-3 w-3" />
            -{discount}%
          </Badge>
        )}
        {product.stock < 5 && product.stock > 0 && (
          <Badge variant="secondary" className="text-destructive">
            Low Stock
          </Badge>
        )}
      </div>

      {/* Quick actions */}
      <div className="absolute right-3 top-3 z-10 flex flex-col gap-2 opacity-0 transition-opacity group-hover:opacity-100">
        <Button
          variant="secondary"
          size="icon"
          className="h-8 w-8 rounded-full shadow-md"
        >
          <Heart className="h-4 w-4" />
        </Button>
        <Link to={`/products/${product.id}`}>
          <Button
            variant="secondary"
            size="icon"
            className="h-8 w-8 rounded-full shadow-md"
          >
            <Eye className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      {/* Image */}
      <Link to={`/products/${product.id}`}>
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {product.stock === 0 && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/80">
              <Badge variant="secondary" className="text-lg">Out of Stock</Badge>
            </div>
          )}
        </div>
      </Link>

      <CardContent className="p-4 space-y-3">
        {/* Category & Brand */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="uppercase tracking-wide">{product.brand}</span>
          <span className="capitalize">{product.category}</span>
        </div>

        {/* Name */}
        <Link to={`/products/${product.id}`}>
          <h3 className="font-semibold text-foreground line-clamp-2 transition-colors hover:text-primary">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${
                  i < Math.floor(product.rating)
                    ? 'fill-primary text-primary'
                    : 'fill-muted text-muted'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-foreground">
            ₹{product.price.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{product.originalPrice.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <Button
          className="w-full gap-2 gradient-primary transition-all hover:shadow-glow"
          onClick={() => addToCart(product)}
          disabled={product.stock === 0}
        >
          <ShoppingCart className="h-4 w-4" />
          {isInCart(product.id) ? 'Add More' : 'Add to Cart'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
