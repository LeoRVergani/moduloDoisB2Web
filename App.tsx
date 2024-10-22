import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const handleClick = () => {
    alert("Eita! Clicou!");
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='red'/>
      <Text>Opa tudo bem?</Text>
      <Pressable onPress={handleClick} style={styles.btn}>
        <Text style={styles.btnText}>Clique aqui</Text>
      </Pressable>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: 200,
    height: 40,
    backgroundColor: '#0000FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  btnText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16
  }
});
