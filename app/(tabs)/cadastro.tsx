import React, { useState } from 'react';
import { Image, StyleSheet, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [cpf, setCPF] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#1d1638', dark: '#1d1638' }}
      headerImage={
        <Image
          source={require('@/assets/images/pickpocket.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Cadastro</ThemedText>
      </ThemedView>
      {/* TextInput para o cpf */}
      <ThemedView style={styles.stepContainer}>
      <TextInput
          style={styles.input}
          placeholder="Cpf"
          value={cpf}
          onChangeText={setCPF}
          keyboardType='numeric'
          maxLength={11} 
        />

        {/* TextInput para o email */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* TextInput para a senha */}
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        {/* Aqui será o botão para entrar na conta */}
        <ThemedText>
          {/* Campo para recuperar senha */}
          Esta deverá ser resetada através de uma codificação onde será blindado para qualquer um e enviado direto ao endereço do usuário.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Passo 2: Insira o destino que deseja visualizar</ThemedText>
        <ThemedText>
          Após o mapa carregado visualize se a região escolhida está segura para transitar ou não.
        </ThemedText>
      </ThemedView>

      <StatusBar style="light" />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 12,
    borderRadius: 4,
  },
});
