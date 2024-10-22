import { Stack } from "expo-router";

export default function RootLayout() {
    return (
    <Stack screenOptions={{
        headerStyle: {
            backgroundColor: '#000'
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30
        }
    }}>
        <Stack.Screen name="index" options={{title: 'Home', headerShown: true}}/>
        <Stack.Screen name="about" options={{title: 'Sobre'}}/>
        <Stack.Screen name="(aux)/termos" options={{title: 'Termos'}}/>
        <Stack.Screen name="auth/login" options={{title: 'Login'}}/>
        <Stack.Screen name="profile/[id]"/>
    </Stack>
    );
}
