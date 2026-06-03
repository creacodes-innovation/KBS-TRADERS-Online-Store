import { Link } from "react-router-dom";
import { useCategories } from "@/hooks/useProducts";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect } from "react";
// Import Lucide Icons
import { Star, Package, Gift, Tag, LayoutGrid } from "lucide-react";


const CategoryGrid = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: categories, isLoading, error } = useCategories();

  // Mapping names to React Icons
  const categoryIcons: Record<string, React.ElementType> = {
    "TRY NEW ": Star, // Updated from EXCLUSIVE
    COMBOS: Package,
    GIFTING: Gift,
    OFFERS: Tag,
  };

  if (error) {
    return (
      <section id="categories" className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-destructive">
            Failed to load categories
          </p>
        </div>
      </section>
    );
  }

  // Updated EXCLUSIVE to TRY NEW in the priority list
  const priorityNames = ["COMBOS", "GIFTING"];

  const priorityCategories = categories
    ?.filter((cat) => priorityNames.includes(cat.name.toUpperCase()))
    .sort(
      (a, b) =>
        priorityNames.indexOf(a.name.toUpperCase()) -
        priorityNames.indexOf(b.name.toUpperCase()),
    );

  const mainCategories = categories
    ?.filter(
      (cat) =>
        !priorityNames.includes(cat.name.toUpperCase()) &&
        cat.slug !== "offers" &&
        cat.slug !== "trynew" &&
        cat.slug !== "try-new",
    )
    .sort((a, b) => (a.display_order || 0) - (b.display_order || 0));
  return (
    <section id="categories" className="py-6 bg-white">
      {/* 1. NAVBAR UI SECTION (With X-Axis Scroll Support) */}
<div className="grid grid-cols-4 gap-2 mb-6">
  {/* TRY NEW */}
  <Link
    to="/category/trynew"
    className="
      bg-[#F6F1EA]
      rounded-lg
      h-[68px]
      md:h-[78px]
      lg:h-[110px]
      flex
      flex-col
      items-center
      justify-center
      shadow-sm
      hover:shadow-md
      transition-all
    "
  >
    <Star
      size={22}
      className="text-[#8B5E34] mb-1 md:mb-1 lg:mb-3"
    />
    <span className="text-[10px] md:text-[11px] lg:text-sm font-medium text-[#5B3A29]">
      Try New
    </span>
  </Link>

  {/* OFFERS */}
  <Link
    to="/category/offers"
    className="
      bg-[#F6F1EA]
      rounded-lg
      h-[68px]
      md:h-[78px]
      lg:h-[110px]
      flex
      flex-col
      items-center
      justify-center
      shadow-sm
      hover:shadow-md
      transition-all
    "
  >
    <Tag
      size={22}
      className="text-[#8B5E34] mb-1 md:mb-1 lg:mb-3"
    />
    <span className="text-[10px] md:text-[11px] lg:text-sm font-medium text-[#5B3A29]">
      Offers
    </span>
  </Link>

  {/* COMBOS */}
  <Link
    to="/category/combos"
    className="
      bg-[#F6F1EA]
      rounded-lg
      h-[68px]
      md:h-[78px]
      lg:h-[110px]
      flex
      flex-col
      items-center
      justify-center
      shadow-sm
      hover:shadow-md
      transition-all
    "
  >
    <Package
      size={22}
      className="text-[#8B5E34] mb-1 md:mb-1 lg:mb-3"
    />
    <span className="text-[10px] md:text-[11px] lg:text-sm font-medium text-[#5B3A29]">
      Combos
    </span>
  </Link>

  {/* GIFTING */}
  <Link
    to="/category/gifting"
    className="
      bg-[#F6F1EA]
      rounded-lg
      h-[68px]
      md:h-[78px]
      lg:h-[110px]
      flex
      flex-col
      items-center
      justify-center
      shadow-sm
      hover:shadow-md
      transition-all
    "
  >
    <Gift
      size={22}
      className="text-[#8B5E34] mb-1 md:mb-1 lg:mb-3"
    />
    <span className="text-[10px] md:text-[11px] lg:text-sm font-medium text-[#5B3A29]">
      Gifting
    </span>
  </Link>
</div>

      {/* --- Full Width Border Line --- */}
      <div className="w-full border-b border-gray-100 mb-10"></div>

      <div className="container mx-auto px-4">
        {/* 2. SECTION HEADER */}
        <div className="text-left mb-8 border-l-4 border-[#0a231b] pl-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Shop by Category
          </h2>
          <p className="text-[#5B3A29] text-sm mt-1">
            Explore our premium collection
          </p>
        </div>

        {/* 3. MAIN CATEGORY GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 stagger-children">
          {isLoading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex flex-col items-center">
                  <Skeleton className="w-40 h-35 md:w-36 md:h-36 rounded-xl" />
                  <Skeleton className="w-30 h-14 mt-4" />
                </div>
              ))
            : mainCategories?.map((category) => (
                <Link
                  key={category.id}
                  to={`/category/${category.slug}`}
                  className="group flex flex-col items-center transition-all duration-300"
                >
                  <div className="aspect-square w-full overflow-hidden rounded-2xl">
                    <img
                      src={category.image_url}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="mt-3 text-center">
                   <h3 className="font-display text-lg md:text-xl font-bold text-gray-800 tracking-tight group-hover:text-[#5B3A29]">
  {category.name}
</h3>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;