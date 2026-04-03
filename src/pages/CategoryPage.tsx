
import { useParams } from 'react-router-dom';
import { useProducts, useCategories } from '@/hooks/useProducts';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartSidebar from '@/components/cart/CartSidebar';
import ProductCard from '@/components/products/ProductCard';
import { Skeleton } from '@/components/ui/skeleton';
import { useEffect } from 'react';

const CategoryPage = () => {

  const { slug } = useParams<{ slug: string }>();

  const { data: products, isLoading: productsLoading } = useProducts(slug);
  const { data: categories } = useCategories();

  // Offer products filter
  const offerProducts = products?.filter((product) => product.is_offer === true);

  // If slug = offers show offerProducts otherwise show normal products
  const displayProducts = slug === "offers" ? offerProducts : products;

  const currentCategory = categories?.find((c) => c.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="min-h-screen flex flex-col">

      <Header />

      <main className="flex-1 bg-background">

        {/* Category Header */}
        <section
          className="relative text-primary-foreground py-12"
          style={{
            backgroundImage: "url('/footer-bg.png')", // put image in public folder
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: '0.90'
          }}
        >
          {/* Overlay for readability */}
          <div className="absolute inset-0 "></div>

          <div className="relative container mx-auto px-4">

            <h1 className="font-display text-3xl text-[#5B3A29] md:text-4xl font-bold mb-2 leading-tight">
              {slug === "offers"
                ? "🔥 Special Offers"
                : currentCategory?.name || "Products"}
            </h1>

            <p className="text-[#5B3A32] leading-tight">
              {slug === "offers"
                ? "Best discounted products available now"
                : `Explore our premium selection of ${currentCategory?.name?.toLowerCase() || "products"}`}
            </p>

          </div>
        </section>


        {/* Products Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">

            {productsLoading ? (

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="space-y-3">
                    <Skeleton className="aspect-square rounded-lg" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                ))}
              </div>

            ) : displayProducts && displayProducts.length > 0 ? (

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 stagger-children">
                {displayProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

            ) : (

              <div className="text-center py-16">
                <p className="text-[#5B3A29] text-lg">
                  No products found in this category.
                </p>
              </div>

            )}

          </div>
        </section>

      </main>

      <Footer />
      <CartSidebar />

    </div>
  );
};

export default CategoryPage;
