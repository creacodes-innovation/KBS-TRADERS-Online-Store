import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Product, Category } from "@/types/store";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("categories")
        .select("*")
        .order("display_order", { ascending: true });

      if (error) throw error;
      return data as Category[];
    },
  });
};

export const useProducts = (categorySlug?: string) => {
  return useQuery<Product[]>({
    queryKey: ["products", categorySlug],
    queryFn: async () => {
      let query = supabase
        .from("products")
        .select(`
          *,
          category:categories(*)
        `)
        .order("created_at", { ascending: false });

      // ✅ Normal Category Filter
      if (
        categorySlug &&
        categorySlug !== "offers" &&
        categorySlug !== "trynew"
      ) {
        const { data: category } = await supabase
          .from("categories")
          .select("id")
          .eq("slug", categorySlug)
          .single();

        if (category) {
          query = query.eq("category_id", category.id);
        }
      }

      const { data, error } = await query;

      if (error) throw error;

      const products = (data || []) as unknown as Product[];

      // ✅ Virtual Offers Category
      if (categorySlug === "offers") {
        return products.filter(
          (product) => product.is_offer === true
        );
      }

      // ✅ Virtual Try New Category
      if (categorySlug === "trynew") {
        return products.filter(
          (product) => product.is_try_new === true
        );
      }

      return products;
    },
  });
};

export const useProduct = (id: string) => {
  return useQuery<Product>({
    queryKey: ["product", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select(`
          *,
          category:categories(*)
        `)
        .eq("id", id)
        .single();

      if (error) throw error;

      return data as unknown as Product;
    },
    enabled: !!id,
  });
};

export const useSearchProducts = (searchTerm: string) => {
  return useQuery<Product[]>({
    queryKey: ["products", "search", searchTerm],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select(`
          *,
          category:categories(*)
        `)
        .ilike("title", `%${searchTerm}%`)
        .order("title", { ascending: true });

      if (error) throw error;

      return (data || []) as unknown as Product[];
    },
    enabled: searchTerm.length >= 2,
  });
};