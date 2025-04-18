import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ProductCard from '@/app/components/product/ProductCard';
import ProductHeader from '../components/product/ProductHeader';

const products = [
  {
    id: '1',
    inputDate: '22 Jan 2025',
    name: 'Kecap Asin',
    category: 'Bahan Masakan',
    stock: 11,
    buyingPrice: 'IDR 12,000',
    sellingPrice: 'IDR 15,000',
  },
  {
    id: '2',
    inputDate: '23 Jan 2025',
    name: 'Gula Pasir',
    category: 'Bahan Masakan',
    stock: 22,
    buyingPrice: 'IDR 10,000',
    sellingPrice: 'IDR 13,000',
  },
];

export default function ProductScreen() {
  const [search, setSearch] = useState('');

  const handleSearch = (text: string) => {
    setSearch(text);
  };

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product</Text>
      <ProductHeader
        onSearch={handleSearch}
        onFilterPress={() => console.log('Open filter modal')}
        onCategoryPress={() => console.log('Open category modal')}
        onAddPress={() => console.log('Open add product modal')}
      />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onEdit={() => console.log('Edit', item.id)}
            onDelete={() => console.log('Delete', item.id)}
          />
        )}
        contentContainerStyle={{ padding: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9FB',
    paddingTop: 60,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 10,
  },
});