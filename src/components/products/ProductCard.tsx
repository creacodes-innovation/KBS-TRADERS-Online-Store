import { useEffect, useState } from 'react';
import { Product, WeightOption } from '@/types/store';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

const weightOptions: { value: WeightOption; label: string }[] = [
  { value: '250g', label: '250g' },
  { value: '500g', label: '500g' },
  { value: '1kg', label: '1kg' },
];

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  // Helper function to get price
  const getPrice = (weight: WeightOption): number | null => {
    switch (weight) {
      case '250g': return product.price_250g;
      case '500g': return product.price_500g;
      case '1kg': return product.price_1kg;
      default: return null;
    }
  };

  const availableWeights = weightOptions.filter(
    (opt) => getPrice(opt.value) !== null
  );

  const [selectedWeight, setSelectedWeight] = useState<WeightOption>(() => {
    return availableWeights.length > 0 ? availableWeights[0].value : '250g';
  });

  const currentPrice = getPrice(selectedWeight);
  
  // Fake MRP calculation for "vetti ezhuthal" effect
  // currentPrice-നേക്കാൾ 20% കൂടുതൽ കാണിക്കാൻ (നിങ്ങൾക്ക് ഡാറ്റയിൽ MRP ഉണ്ടെങ്കിൽ അത് ഉപയോഗിക്കാം)
  const mrpPrice = currentPrice ? Math.round(currentPrice * 1.2) : null;

  const handleAddToCart = () => {
    if (!product.is_sold_out && currentPrice) {
      addToCart(product, selectedWeight);
      setJustAdded(true);
      setTimeout(() => setJustAdded(false), 1500);
    }
  };

  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300">
      {/* Image Section */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image_url || '/placeholder.svg'}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {product.is_sold_out && (
          <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
            <span className="bg-destructive text-destructive-foreground px-4 py-2 rounded-full text-sm font-semibold">
              Sold Out
            </span>
          </div>
        )}

        {product.is_featured && !product.is_sold_out && (
          <div className="absolute top-3 left-3">
            <span className="bg-gold text-gold-foreground px-3 py-1 rounded-full text-xs font-semibold">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Product Title - Normal Style & Capitalized */}
        <h3 className="text-[15px] font-normal text-foreground mt-1 mb-3 line-clamp-1 tracking-tight capitalize">
          {product.title.toLowerCase()}
        </h3>

        {/* Weight Selector */}
        <div className="flex flex-wrap gap-2 mb-4">
          {availableWeights.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setSelectedWeight(opt.value)}
              disabled={product.is_sold_out}
              className={cn(
                'px-3 py-1.5 text-xs font-medium rounded-full border transition-all',
                selectedWeight === opt.value
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-background text-foreground border-border hover:border-primary',
                product.is_sold_out && 'opacity-50 cursor-not-allowed'
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Price & Add to Cart Section */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            {/* MRP - Vetti ezhuthal style */}
            {mrpPrice && (
              <span className="text-xs text-muted-foreground line-through">
                ₹{mrpPrice.toLocaleString('en-IN')}
              </span>
            )}
            {/* Discounted Price */}
            {currentPrice && (
              <span className="text-lg font-bold text-foreground">
                ₹{currentPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          <Button
            onClick={handleAddToCart}
            disabled={product.is_sold_out || !currentPrice}
            variant={justAdded ? 'default' : 'gold'}
            size="sm"
            className={cn(
              'transition-all px-4',
              justAdded && 'bg-emerald text-primary-foreground'
            )}
          >
            {justAdded ? (
              <>
                <Check className="h-4 w-4 mr-1" />
                Added
              </>
            ) : (
              <>
                <ShoppingBag className="h-4 w-4 mr-1" />
                Add
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;