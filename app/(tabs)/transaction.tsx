import { View, Text, StyleSheet, FlatList } from 'react-native';

const transactions = [
  { id: '1', item: 'T-Shirt', amount: '$29.99', date: '2023-05-15' },
  { id: '2', item: 'Jeans', amount: '$59.99', date: '2023-05-14' },
  { id: '3', item: 'Sneakers', amount: '$89.99', date: '2023-05-13' },
];

export default function TransactionScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Recent Transactions</Text>
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.transactionCard}>
              <View>
                <Text style={styles.itemText}>{item.item}</Text>
                <Text style={styles.dateText}>{item.date}</Text>
              </View>
              <Text style={styles.amountText}>{item.amount}</Text>
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
    padding: 20,
    backgroundColor: '#F9F4F1',
  },
  content: {
    flex: 1,
    marginTop: 60,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#051D63',
    marginBottom: 20,
  },
  transactionCard: {
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
  itemText: {
    fontSize: 16,
    fontWeight: '500',
  },
  dateText: {
    fontSize: 12,
    color: '#666',
  },
  amountText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0040FF',
  },
});