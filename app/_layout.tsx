import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="(auth)/login/login" 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="(auth)/register/register" 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="(tabs)" 
        options={{ 
          headerShown: false,
          // This prevents going back to auth after login
          gestureEnabled: false 
        }} 
      />
    </Stack>
  );
}