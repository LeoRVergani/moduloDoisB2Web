import { Stack } from "expo-router";

export default function RootLayout() {
    return (
    <Stack screenOptions={{
        headerShown: false,
        headerStyle: {
            backgroundColor: '#000'
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30
        }
    }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(aux)/termos" options={{title: 'Termos', headerShown: true}}/>
        <Stack.Screen name="auth/login" options={{title: 'Login'}}/>
        <Stack.Screen name="profile/[id]"/>      
    </Stack>
    );
}
