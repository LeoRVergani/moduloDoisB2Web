import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{headerShown: true, tabBarActiveTintColor: '#FF0000'}}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={35} name='home' color={color}/>
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: 'Sobre',
                    tabBarIcon: ({ color }) => <FontAwesome size={35} name='user' color={color}/>
                }}
            />
        </Tabs>
    )
}