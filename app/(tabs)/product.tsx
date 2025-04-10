import { View, Text, FlatList } from 'react-native';
import ProductCard from '@/app/components/product/ProductCard';
import { useEffect, useState } from 'react';
import { ProductType } from '@/app/types/product';

// import { getProducts } from '@/services/productService';

export default function ProductScreen() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    // Simulasi dummy data biar UI-nya kelihatan
  const dummyProducts: ProductType[] = [
  {
    id: 1,
    name: 'Kemeja Lengan Panjang',
    categoryId: 1,
    categoryName: 'Pakaian',
    stock: 10,
    buyingPrice: 50000,
    sellingPrice: 75000,
    inputDate: '2024-04-01',
  },
  {
    id: 2,
    name: 'Celana Jeans',
    categoryId: 1,
    categoryName: 'Pakaian',
    stock: 5,
    buyingPrice: 100000,
    sellingPrice: 150000,
    inputDate: '2024-04-03',
  },
  {
    id: 3,
    name: 'Sneakers Pria',
    categoryId: 2,
    categoryName: 'Sepatu',
    stock: 8,
    buyingPrice: 200000,
    sellingPrice: 300000,
    inputDate: '2024-04-05',
  },
];

    setProducts(dummyProducts);

    // Kalau nanti service-nya udah siap tinggal uncomment ini:
    /*
    const fetchProducts = async () => {
      try {
        const res = await getProducts();
        setProducts(res.items); // atau sesuaikan dengan struktur responsenya
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
    */
  }, []);

  return (
    <View className="flex-1 bg-[#F9F4F1] px-4 pt-16">
      <Text className="text-2xl font-bold text-[#051D63] mb-4">Product</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onEdit={() => console.log('edit', item.id)}
            onDelete={() => console.log('delete', item.id)}
            onStockUpdate={() => console.log('update stock', item.id)}
          />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}
