import { View, Text, TouchableOpacity } from 'react-native';
import { ProductType } from '@/app/types/product';
import Feather from 'react-native-vector-icons/Feather';

type Props = {
  product: ProductType;
  onEdit: () => void;
  onDelete: () => void;
  onStockUpdate: () => void;
};

export default function ProductCard({ product, onEdit, onDelete, onStockUpdate }: Props) {
  return (
    <View className="bg-white p-4 rounded-2xl shadow-md mb-4">
      <View className="flex-row justify-between mb-2">
        <View>
          <Text className="text-sm text-gray-500">Buying Price</Text>
          <Text className="text-base font-semibold">IDR {product.buyingPrice.toLocaleString('id-ID')}</Text>
        </View>
        <View className="items-end">
          <Text className="text-sm text-gray-500">Selling Price</Text>
          <Text className="text-base font-semibold text-black">IDR {product.sellingPrice.toLocaleString('id-ID')}</Text>
        </View>
      </View>

      <View className="mt-2 space-y-1">
        <Text className="text-sm text-gray-500">
          Product ID: <Text className="text-black">{product.id}</Text>
        </Text>
        <Text className="text-sm text-gray-500">
          Input Date: <Text className="text-black">{product.inputDate}</Text>
        </Text>
        <Text className="text-sm text-gray-500">
          Product Name: <Text className="text-black">{product.name}</Text>
        </Text>
        <Text className="text-sm text-gray-500">
          Category: <Text className="text-black">{product.categoryName}</Text>
        </Text>
        <Text className="text-sm text-gray-500">
          Stock: <Text className="text-black">{product.quantity}</Text>
        </Text>
      </View>

      <View className="flex-row justify-end space-x-4 mt-4">
        <TouchableOpacity onPress={onStockUpdate}>
          <Feather name="box" size={20} color="#3B82F6" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onEdit}>
          <Feather name="edit" size={20} color="#3B82F6" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete}>
          <Feather name="trash-2" size={20} color="#EF4444" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
