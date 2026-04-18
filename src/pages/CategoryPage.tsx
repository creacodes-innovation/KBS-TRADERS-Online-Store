import { useParams } from "react-router-dom";
import { useProducts, useCategories } from "@/hooks/useProducts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartSidebar from "@/components/cart/CartSidebar";
import ProductCard from "@/components/products/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect } from "react";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();

  // ✅ offers + trynew => all products fetch cheyyum
  const { data: products, isLoading: productsLoading } = useProducts(
    slug === "offers" || slug === "trynew" ? undefined : slug
  );

  const { data: categories } = useCategories();

  // ✅ Offers filter
  const offerProducts = products?.filter(
    (product) => product.is_offer === true
  );

  // ✅ Try New filter
  const tryNewProducts = products?.filter(
    (product) => product.is_try_new === true
  );

  // ✅ Final Display Products
  const displayProducts =
    slug === "offers"
      ? offerProducts
      : slug === "trynew"
      ? tryNewProducts
      : products;

  const currentCategory = categories?.find((c) => c.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-background">
        {/* Header */}
        <section
          className="relative text-primary-foreground py-12"
          style={{
            backgroundImage: "url('/footer-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: "0.90",
          }}
        >
          <div className="relative container mx-auto px-4">
            <h1 className="font-display text-3xl text-[#5B3A29] md:text-4xl font-bold mb-2 leading-tight">
              {slug === "offers"
                ? "Special Offers"
                : slug === "trynew"
                ? "TRY NEW"
                : currentCategory?.name || "Products"}
            </h1>

            <p className="text-[#5B3A32] leading-tight">
              {slug === "offers"
                ? "Best discounted products from all categories"
                : slug === "trynew"
                ? "Discover our latest collection"
                : `Explore our premium selection of ${
                    currentCategory?.name?.toLowerCase() || "products"
                  }`}
            </p>
          </div>
        </section>

        {/* Products */}
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
                  {slug === "offers"
                    ? "No offer products available."
                    : slug === "trynew"
                    ? "No Try New products available."
                    : "No products found in this category."}
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