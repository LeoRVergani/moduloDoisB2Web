import { Link, router, Stack, useLocalSearchParams } from 'expo-router'
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function Screen() {

    const { id } = useLocalSearchParams();

    const handleClick = () => {
        router.navigate('/');
    }

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: 'Perfil ' + id}}/>

            <Text>Tela do Perfil {id}</Text>

            <Link href="/">
                <Pressable onPress={handleClick} style={styles.button}>
                    <Text>Ir para Home</Text>
                </Pressable>
            </Link>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: 200,
        height: 40,
        backgroundColor: '#00FF00',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})