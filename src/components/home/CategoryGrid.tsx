import { Link } from 'react-router-dom';
import { useCategories } from '@/hooks/useProducts';
import { Skeleton } from '@/components/ui/skeleton';
import { useEffect } from 'react';

const CategoryGrid = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: categories, isLoading, error } = useCategories();

  if (error) {
    return (
      <section id="categories" className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-destructive">Failed to load categories</p>
        </div>
      </section>
    );
  }

  // Categories filter cheyyunnu
  const priorityNames = ['EXCLUSIVE', 'COMBOS', 'GIFTING', 'OFFERS'];
  
  const priorityCategories = categories?.filter(cat => 
    priorityNames.includes(cat.name.toUpperCase())
  ).sort((a, b) => priorityNames.indexOf(a.name.toUpperCase()) - priorityNames.indexOf(b.name.toUpperCase()));

  const mainCategories = categories?.filter(cat => 
    !priorityNames.includes(cat.name.toUpperCase())
  ).sort((a, b) => (a.display_order || 0) - (b.display_order || 0));

  return (
    <section id="categories" className="py-6 bg-white">
      {/* 1. NAVBAR UI SECTION */}
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center gap-3 mb-6 overflow-x-auto pb-2 no-scrollbar">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-10 w-28 rounded-full" />
            ))
          ) : (
            priorityCategories?.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.slug}`}
                className="flex items-center gap-2 px-4 py-2 bg-[#f4f6f5] hover:bg-gray-200 text-[#2d5a50] rounded-full text-sm font-semibold transition-all whitespace-nowrap shadow-sm"
              >
                <div className="w-6 h-6 rounded-full overflow-hidden bg-white border border-gray-100">
                  <img 
                    src={category.image_url || '/placeholder.svg'} 
                    alt="" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {category.name}
              </Link>
            ))
          )}
        </div>
      </div>

      <div className="w-full border-b border-gray-100 mb-10"></div>

      <div className="container mx-auto px-4">
        {/* 2. SECTION HEADER */}
        <div className="text-left mb-8 border-l-4 border-[#0a231b] pl-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Shop by Category
          </h2>
          <p className="text-muted-foreground text-sm mt-1">Explore our premium collection</p>
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
                    <h3 className="text-xs md:text-sm font-bold text-gray-800 uppercase tracking-tight group-hover:text-[#2d5a50]">
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