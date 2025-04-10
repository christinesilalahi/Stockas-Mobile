import { View, Text, StyleSheet } from 'react-native';

export default function DashboardScreen() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Dashboard Overview</Text>
          <View style={styles.card}>
            <Text style={styles.cardText}>Total Sales: $1,240</Text>
            <Text style={styles.cardText}>Active Products: 24</Text>
            <Text style={styles.cardText}>Recent Transactions: 5</Text>
          </View>
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
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardText: {
    fontSize: 16,
    marginVertical: 5,
    color: '#333',
  },
});