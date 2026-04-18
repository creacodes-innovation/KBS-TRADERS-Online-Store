import { useState } from "react";
import { Product, WeightOption } from "@/types/store";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

const weightOptions: { value: WeightOption; label: string }[] = [
  { value: "250g", label: "250g" },
  { value: "500g", label: "500g" },
  { value: "1kg", label: "1kg" },
  { value: "pcs", label: "Pcs" },
  { value: "nos", label: "Nos" },
  { value: "pac", label: "Pac" },
];

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  // ✅ check admin auto/manual toggle
  const isAutoPrice = product.is_auto_price ?? false;

  // ✅ Main Price Logic
  const getPrice = (weight: WeightOption): number | null => {
    const base1kg = product.price_1kg;

    // ✅ AUTO MODE
    if (isAutoPrice && base1kg) {
      switch (weight) {
        case "1kg":
          return Math.round(base1kg);
        case "500g":
          return Math.round(base1kg / 2);
        case "250g":
          return Math.round(base1kg / 4);
        default:
          return null;
      }
    }

    // ✅ MANUAL MODE
    switch (weight) {
      case "1kg":
        return product.price_1kg ?? null;
      case "500g":
        return product.price_500g ?? null;
      case "250g":
        return product.price_250g ?? null;
      case "pcs":
        return product.price_pcs ?? null;
      case "nos":
        return product.price_nos ?? null;
      case "pac":
        return product.price_pac ?? null;
      default:
        return null;
    }
  };

  const availableWeights = weightOptions.filter(
    (opt) => getPrice(opt.value) !== null,
  );

  const [selectedWeight, setSelectedWeight] = useState<WeightOption>(
    availableWeights.length > 0 ? availableWeights[0].value : "250g",
  );

  const currentPrice = getPrice(selectedWeight);

  // ✅ MRP proportional split
  const getMrpByWeight = () => {
    if (!product.mrp_price) return null;

    const mrp = product.mrp_price;

    switch (selectedWeight) {
      case "1kg":
        return Math.round(mrp);
      case "500g":
        return Math.round(mrp / 2);
      case "250g":
        return Math.round(mrp / 4);
      case "pcs":
      case "nos":
      case "pac":
        return Math.round(mrp);
      default:
        return null;
    }
  };

  const mrpPrice = getMrpByWeight();

  const handleAddToCart = () => {
    if (!product.is_sold_out && currentPrice) {
      addToCart(product, selectedWeight);
      setJustAdded(true);

      setTimeout(() => {
        setJustAdded(false);
      }, 1500);
    }
  };

  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image_url || "/placeholder.svg"}
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

        {/* ✅ Offer Badge → Top Right */}
        {product.is_offer && !product.is_sold_out && (
          <div className="absolute top-3 right-3 z-10">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
              OFFER
            </span>
          </div>
        )}
      </div>
      {/* Content */}
      <div className="p-4 flex flex-col flex-1">

        {/* 🔼 TOP CONTENT */}
        <div>
          <h3 className="text-[15px] font-normal text-foreground mt-1 mb-3 line-clamp-2 min-h-[40px] tracking-tight capitalize">
            {product.title.toLowerCase()}
          </h3>

          {/* Weight Buttons */}
          <div className="flex flex-wrap gap-2 mb-3">
            {availableWeights.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setSelectedWeight(opt.value)}
                disabled={product.is_sold_out}
                className={cn(
                  "px-3 py-1.5 text-xs font-medium rounded-full border transition-all",
                  selectedWeight === opt.value
                    ? "bg-[#E6D3B3] text-[#5B3A29] border-[#5B3A29]"
                    : "bg-background text-[#5B3A29] border-border hover:border-[#5B3A29]",
                  product.is_sold_out && "opacity-50 cursor-not-allowed"
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* 🔽 BOTTOM (ALWAYS SAME POSITION) */}
        <div className="mt-auto flex items-center justify-between gap-2">

          {/* PRICE */}
          <div className="flex flex-col leading-tight">
            {mrpPrice && currentPrice && mrpPrice > currentPrice && (
              <span className="text-[10px] sm:text-xs text-[#5B3A29] line-through">
                ₹{mrpPrice.toLocaleString("en-IN")}
              </span>
            )}

            {currentPrice && (
              <span className="text-sm sm:text-base font-bold text-foreground">
                ₹{currentPrice.toLocaleString("en-IN")}
              </span>
            )}
          </div>

          {/* BUTTON */}
          <Button
            onClick={handleAddToCart}
            disabled={product.is_sold_out || !currentPrice}
            variant={justAdded ? "default" : "gold"}
            size="sm"
            className={cn(
              "flex items-center justify-center gap-1",
              "px-2 sm:px-3 md:px-4 py-2",
              "text-xs sm:text-sm",
              "shrink-0 rounded-lg",
              "transition-all",
              justAdded && "bg-[#5B3A29] text-white"
            )}
          >
            {justAdded ? (
              <>
                <Check className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Add</span>
              </>
            )}
          </Button>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;
