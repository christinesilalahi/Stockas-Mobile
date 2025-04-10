import { View, Text, StyleSheet, FlatList } from 'react-native';

const products = [
  { id: '1', name: 'Basic T-Shirt', stock: 45, price: '$19.99' },
  { id: '2', name: 'Classic Jeans', stock: 32, price: '$39.99' },
  { id: '3', name: 'Running Shoes', stock: 18, price: '$79.99' },
];

export default function ProductScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Product Inventory</Text>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.productCard}>
              <View>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.stockText}>Stock: {item.stock}</Text>
              </View>
              <Text style={styles.priceText}>{item.price}</Text>
            </View>
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F4F1',
  },
  content: {
    flex: 1,
    margin: 20,
    marginTop: 80,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#051D63',
    marginBottom: 20,
  },
  productCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  productName: {
    fontSize: 16,
    fontWeight: '500',
  },
  stockText: {
    fontSize: 12,
    color: '#666',
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0040FF',
  },
});