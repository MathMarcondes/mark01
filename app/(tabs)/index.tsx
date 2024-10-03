import { Image, StyleSheet, Platform, Alert, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable, Text } from 'react-native';
import { Link } from 'expo-router';
import { Button } from 'react-native';




export default function HomeScreen() {
  return (

    
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#1d1638', dark: '#1d1638' }}
      headerImage={
        <Image
          source={require('@/assets/images/logo02.png')}
          style={styles.reactLogo}
        />
      }
      ImageBackground={
      <Image
        source={require('@/assets/images/logo02.png')}
        style={styles.stepContainer}
      />
      }
      
      >
      
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem vindo ao PickPocket</ThemedText>

      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">
          Nosso app foi criado para ajudar você a se sentir mais segura ao caminhar pelas ruas da cidade. Através dele, você poderá consultar, em tempo real, as áreas de risco ao seu redor, baseadas em relatos de outros usuários e em dados oficiais de boletins de ocorrência da polícia.
          Ao acessar o app, você verá um mapa da sua cidade com cores que indicam o nível de risco de cada região. A classificação vai de 1 a 5, sendo 1 para áreas de baixo risco e 5 para áreas de maior perigo. Essa informação é atualizada constantemente, graças às denúncias anônimas feitas pelos usuários e aos dados da polícia.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Passo 1: Realize seu Cadastro</ThemedText>
        <ThemedText>
          Clique em "Cadastro" para começar a sua experiência.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Passo 2: Insira o destino que deseja visualizar</ThemedText>
        <ThemedText>
          Após o mapa carregado visualize se a região escolhida está segura para transitar ou não.
        </ThemedText>

      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <Button
        title="Cadastro"  
        onPress={() => console.log('tela de cadastro')}
        />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Button
        title="something"
        onPress={() => Alert.alert('somenthing')}
        />
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
  SafeAreaView:{
    flex: 1
  }
});
