import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ProductCardProps {
  product: {
    id: string;
    inputDate: string;
    name: string;
    category: string;
    stock: number;
    buyingPrice: string;
    sellingPrice: string;
  };
  onEdit: () => void;
  onDelete: () => void;
}

export default function ProductCard({ product, onEdit, onDelete }: ProductCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.label}>Buying Price</Text>
        <Text style={styles.label}>Selling Price</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.value}>{product.buyingPrice}</Text>
        <Text style={styles.value}>{product.sellingPrice}</Text>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>Product ID</Text>
        <Text style={styles.detailValue}>{product.id}</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>Input Date</Text>
        <Text style={styles.detailValue}>{product.inputDate}</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>Product Name</Text>
        <Text style={styles.detailValue}>{product.name}</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>Category</Text>
        <Text style={styles.detailValue}>{product.category}</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>Stock</Text>
        <Text style={styles.detailValue}>{product.stock}</Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity onPress={onEdit}>
          <Ionicons name="pencil-outline" size={20} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete}>
          <Ionicons name="trash-outline" size={20} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontWeight: '500',
    fontSize: 12,
    color: '#555',
  },
  value: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
    color: '#000',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  detailLabel: {
    fontSize: 13,
    color: '#777',
  },
  detailValue: {
    fontSize: 13,
    fontWeight: '500',
    color: '#222',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 12,
    gap: 12,
  },
});
