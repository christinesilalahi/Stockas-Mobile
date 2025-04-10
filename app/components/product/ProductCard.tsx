import { View, Text, TouchableOpacity } from 'react-native';
import { Pencil, Trash, PackagePlus } from 'lucide-react-native'; 
import React from 'react';
import { ProductType } from '@/app/types/product';

type Props = {
    product: ProductType;
    onEdit: () => void;
    onDelete: () => void;
    onStockUpdate: () => void;
  };

export default function ProductCard({ product, onEdit, onStockUpdate, onDelete }: Props) {
  return (
    <View className="bg-white rounded-xl p-4 mb-4 shadow">
      <View className="flex-row justify-between mb-2">
        <View>
          <Text className="text-xs text-gray-500">Buying Price</Text>
          <Text className="font-bold text-base text-black">IDR {product.buyingPrice.toLocaleString()}</Text>
        </View>
        <View className="items-end">
          <Text className="text-xs text-gray-500">Selling Price</Text>
          <Text className="font-bold text-base text-black">IDR {product.sellingPrice.toLocaleString()}</Text>
        </View>
      </View>

      <View className="gap-y-1">
        <Text className="text-sm">Product ID: {product.id}</Text>
        <Text className="text-sm">Input Date: {new Date(product.inputDate).toLocaleDateString()}</Text>
        <Text className="text-sm">Product Name: {product.name}</Text>
        <Text className="text-sm">Category: {product.categoryName}</Text>
        <Text className="text-sm">Stock: {product.stock}</Text>
      </View>

      <View className="flex-row justify-start mt-3 space-x-4">
        <TouchableOpacity onPress={onEdit}>
          <Pencil size={18} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onStockUpdate}>
          <PackagePlus size={18} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete}>
          <Trash size={18} color="#D11A2A" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
