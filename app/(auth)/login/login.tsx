import { View, Text, TextInput, Pressable, Image, StyleSheet } from 'react-native';
import { Link, router } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function LoginScreen() {
  const handleSignIn = () => {
    router.replace('/(tabs)/dashboard');
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('@/assets/images/Logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Register Form */}
      <View style={styles.formContainer}>
        <Text style={styles.title}>Sign In</Text>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#999"
            keyboardType="email-address"
          />
        </View>
        
        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="Create a password"
              placeholderTextColor="#999"
              secureTextEntry
            />
            <Pressable style={styles.eyeIcon}>
              <MaterialIcons 
                name="visibility-off" 
                size={24} 
                color="#666" 
              />
            </Pressable>
          </View>
        </View>
        
        {/* Register Button */}
        <Pressable style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>
        
        {/* Terms and Privacy */}
        <Text style={styles.termsText}>
          By registering, you agree to our{' '}
          <Link href="/" style={styles.link}>Terms</Link> and{' '}
          <Link href="/" style={styles.link}>Privacy Policy</Link>
        </Text>
        
        {/* Login Link */}
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Already have an account? </Text>
          <Link href="/register/register" style={styles.registerLink}>
            Sign up now
          </Link>
        </View>
      </View>
    </View>
  );
}

// Reuse the same styles from login.tsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F4F1',
    padding: 20,
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  formContainer: {
    backgroundColor: '#D2E8FD',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    color: '#051D63',
    fontWeight: '600',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    color: '#051D63',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 5,
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#B4CCE4',
    borderRadius: 5,
    padding: 12,
    fontSize: 14,
    color: '#333',
  },
  passwordContainer: {
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 12,
  },
  button: {
    backgroundColor: '#0040FF',
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  termsText: {
    color: '#666',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
  },
  link: {
    color: '#0040FF',
    fontWeight: '600',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  registerText: {
    color: '#666',
    fontSize: 14,
  },
  registerLink: {
    color: '#0040FF',
    fontWeight: '600',
    fontSize: 14,
  },
});
