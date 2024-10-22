import { Link, router, Stack, useNavigation } from "expo-router";
import { View, Text, StyleSheet, Pressable, Button } from "react-native";

export default function Screen() {

    const navigation = useNavigation();

    const handleClick = () => {
        router.replace('/about')
    }

    const handleHideHeader = () => {
        navigation.setOptions({ headerShown: false});
    }

    const handleAddButton = () => {
        alert('Adicionado com Sucesso!')
    }

    const handleLogin = () => {
        router.navigate("auth/login")
    }

    return (
        <View style={styles.container}>
            <Stack.Screen options={{
                title: 'Inicio',
                headerRight: () => <Button onPress={handleAddButton} title="Adicionar" />
            }} />

            <Text>Tela Home</Text>

            <Button onPress={handleHideHeader} title="Sumir Header"/>

                <Pressable onPress={handleClick} style={styles.button}>
                    <Text>Ir para Sobre</Text>
                </Pressable>

                <Link href="/termos">Termos de Uso</Link>

                <Button onPress={handleLogin} title="Login"/>

                <Link href="/profile/1">Perfil 1</Link>
                <Link href="/profile/2">Perfil 2</Link>
            
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
        backgroundColor: '#FF0000',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})