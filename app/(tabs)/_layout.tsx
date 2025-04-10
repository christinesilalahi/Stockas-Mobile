import { Tabs } from 'expo-router';
import { MaterialIcons, FontAwesome5, Ionicons, AntDesign } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { router } from 'expo-router';

export default function TabLayout() {
  const handleLogout = () => {
    router.replace('/(auth)/login/login');
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#0040FF',
        tabBarInactiveTintColor: '#666',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#eee',
          height: 80,
          paddingBottom: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="dashboard" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="transaction"
        options={{
          title: 'Transaction',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="exchange-alt" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="product"
        options={{
          title: 'Product',
          tabBarIcon: ({ color }) => (
            <Ionicons name="cube-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="logout"
        options={{
          title: 'Logout',
          tabBarIcon: ({ color }) => (
            <AntDesign name="logout" size={20} color={color} />
          ),
          tabBarButton: (props) => (
            <Pressable
              {...props}
              onPress={handleLogout}
              style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            />
          ),
        }}
      />
    </Tabs>
  );
}