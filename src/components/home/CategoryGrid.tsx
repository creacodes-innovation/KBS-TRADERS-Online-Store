import { Link } from 'react-router-dom';
import { useCategories } from '@/hooks/useProducts';
import { Skeleton } from '@/components/ui/skeleton';
import { useEffect } from 'react';
// Import Lucide Icons
import { Star, Package, Gift, Tag, LayoutGrid } from 'lucide-react';

const CategoryGrid = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: categories, isLoading, error } = useCategories();

  // Mapping names to React Icons
  const categoryIcons: Record<string, React.ElementType> = {
    'TRY NEW ': Star, // Updated from EXCLUSIVE
    COMBOS: Package,
    GIFTING: Gift,
    OFFERS: Tag,
  };

  if (error) {
    return (
      <section id="categories" className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-destructive">Failed to load categories</p>
        </div>
      </section>
    );
  }

  // Updated EXCLUSIVE to TRY NEW in the priority list
  const priorityNames = ['COMBOS', 'GIFTING'];
  
  const priorityCategories = categories?.filter(cat => 
    priorityNames.includes(cat.name.toUpperCase())
  ).sort((a, b) => priorityNames.indexOf(a.name.toUpperCase()) - priorityNames.indexOf(b.name.toUpperCase()));

 const mainCategories = categories
  ?.filter(
    (cat) =>
      !priorityNames.includes(cat.name.toUpperCase()) &&
      cat.slug !== "offers" &&
      cat.slug !== "trynew" &&
      cat.slug !== "try-new"
  )
  .sort(
    (a, b) => (a.display_order || 0) - (b.display_order || 0)
  );
  return (
    <section id="categories" className="py-6 bg-white">
      
      {/* 1. NAVBAR UI SECTION (With X-Axis Scroll Support) */}
      <div className="container mx-auto px-4">
       <div
  className="flex items-center gap-3 mb-6 overflow-x-auto pb-4 no-scrollbar scroll-smooth antialiased"
  style={{ WebkitOverflowScrolling: "touch" }}
>
  {isLoading ? (
    Array.from({ length: 4 }).map((_, i) => (
      <Skeleton key={i} className="h-10 w-28 rounded-full flex-shrink-0" />
    ))
  ) : (
   <>
  {/* TRY NEW */}
  <Link
    to="/category/trynew"
    className="flex items-center gap-2 px-4 py-2 bg-[#E6D3B3] hover:bg-gray-200 text-[#5B3A29] rounded-full text-sm font-semibold transition-all whitespace-nowrap shadow-sm flex-shrink-0 group"
  >
    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white border border-gray-100">
      <Star size={14} strokeWidth={2.5} />
    </div>
    TRY NEW
  </Link>

  {/* OFFERS */}
  <Link
    to="/category/offers"
    className="flex items-center gap-2 px-4 py-2 bg-[#E6D3B3] hover:bg-gray-200 text-[#5B3A29] rounded-full text-sm font-semibold transition-all whitespace-nowrap shadow-sm flex-shrink-0 group"
  >
    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white border border-gray-100">
      <Tag size={14} strokeWidth={2.5} />
    </div>
    OFFERS
  </Link>

  {/* COMBOS + GIFTING */}
  {priorityCategories?.map((category) => {
    const IconComponent =
      categoryIcons[category.name.toUpperCase()] || LayoutGrid;

    return (
      <Link
        key={category.id}
        to={`/category/${category.slug}`}
        className="flex items-center gap-2 px-4 py-2 bg-[#E6D3B3] hover:bg-gray-200 text-[#5B3A29] rounded-full text-sm font-semibold transition-all whitespace-nowrap shadow-sm flex-shrink-0 group"
      >
        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white border border-gray-100">
          <IconComponent size={14} strokeWidth={2.5} />
        </div>
        {category.name}
      </Link>
    );
  })}
</>
  )}
</div>
      </div>

      {/* --- Full Width Border Line --- */}
      <div className="w-full border-b border-gray-100 mb-10"></div>

      <div className="container mx-auto px-4">
        {/* 2. SECTION HEADER */}
        <div className="text-left mb-8 border-l-4 border-[#0a231b] pl-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Shop by Category
          </h2>
          <p className="text-[#5B3A29] text-sm mt-1">Explore our premium collection</p>
        </div>

        {/* 3. MAIN CATEGORY GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 stagger-children">
          {isLoading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex flex-col items-center">
                  <Skeleton className="w-28 h-28 md:w-36 md:h-36 rounded-xl" />
                  <Skeleton className="w-20 h-4 mt-4" />
                </div>
              ))
            : mainCategories?.map((category) => (
                <Link
                  key={category.id}
                  to={`/category/${category.slug}`}
                  className="group flex flex-col items-center transition-all duration-300"
                >
                  <div className="relative w-28 h-28 md:w-36 md:h-36 flex items-center justify-center bg-gray-50 rounded-2xl overflow-hidden group-hover:shadow-lg transition-all border border-gray-100">
                    <img
                      src={category.image_url || '/placeholder.svg'}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <h3 className="text-xs md:text-sm font-bold text-gray-800 uppercase tracking-tight group-hover:text-[#5B3A29]">
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