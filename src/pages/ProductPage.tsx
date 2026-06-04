import { useParams } from "react-router-dom";
import { useProduct } from "@/hooks/useProducts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/products/ProductCard";
import CartSidebar from "@/components/cart/CartSidebar";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data: product, isLoading, error } = useProduct(id || "");

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Product not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 py-6 px-4">
        <div className="max-w-sm mx-auto">
          <ProductCard product={product} />
        </div>
      </main>

      <Footer />
      <CartSidebar />
    </div>
  );
};

export default ProductPage;