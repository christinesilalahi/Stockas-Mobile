import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

interface ProductHeaderProps {
  onSearch: (text: string) => void;
  onFilterPress: () => void;
  onCategoryPress: () => void;
  onAddPress: () => void;
}

export default function ProductHeader({
  onSearch,
  onFilterPress,
  onCategoryPress,
  onAddPress,
}: ProductHeaderProps) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Category or Product Name"
        placeholderTextColor="#999"
        onChangeText={onSearch}
        style={styles.input}
      />
      <TouchableOpacity style={styles.iconButton} onPress={onFilterPress}>
        <Feather name="sliders" size={18} color="#666" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButtonBlue} onPress={onCategoryPress}>
        <Feather name="edit" size={18} color="#1D1D1F" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButtonPurple} onPress={onAddPress}>
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 44,
    backgroundColor: '#F3F3F5',
    borderRadius: 12,
    paddingHorizontal: 12,
    fontSize: 14,
  },
  iconButton: {
    height: 44,
    width: 44,
    backgroundColor: '#F3F3F5',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconButtonBlue: {
    height: 44,
    width: 44,
    backgroundColor: '#E5ECFF',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconButtonPurple: {
    height: 44,
    width: 44,
    backgroundColor: '#5B37F3',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});