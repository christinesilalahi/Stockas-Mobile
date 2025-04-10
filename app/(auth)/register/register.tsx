import { View, Text, TextInput, Pressable, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

export default function RegisterScreen() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('@/assets/images/Logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Tagline */}
      <Text style={styles.tagline}>Simplify Your Finances, Streamline Your Stock</Text>
      <Text style={styles.subTagline}>
        Stockas helps small businesses streamline their finances and effortlessly manage product stock.
      </Text>

      {/* Form */}
      <View style={styles.formContainer}>
        {/* Name Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            placeholderTextColor="#999"
            value={formData.name}
            onChangeText={(text) => handleChange('name', text)}
          />
        </View>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            value={formData.email}
            onChangeText={(text) => handleChange('email', text)}
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
              secureTextEntry={!showPassword}
              value={formData.password}
              onChangeText={(text) => handleChange('password', text)}
            />
            <Pressable 
              style={styles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}
            >
              <MaterialIcons 
                name={showPassword ? "visibility" : "visibility-off"} 
                size={24} 
                color="#666" 
              />
            </Pressable>
          </View>
        </View>

        {/* Sign Up Button */}
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>

        {/* Terms and Privacy */}
        <Text style={styles.termsText}>
          By continuing, you agree to our{' '}
          <Link href="/" style={styles.link}>Terms</Link> and{' '}
          <Link href="/" style={styles.link}>Privacy Policy</Link>
        </Text>

        {/* Login Link */}
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <Link href="/login/login" style={styles.loginLink}>Sign in</Link>
        </View>
      </View>
    </View>
  );
}

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
  tagline: {
    fontSize: 16,
    color: '#051D63',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8,
  },
  subTagline: {
    fontSize: 12,
    color: '#676767',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
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
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  loginText: {
    color: '#666',
    fontSize: 14,
  },
  loginLink: {
    color: '#0040FF',
    fontWeight: '600',
    fontSize: 14,
  },
});