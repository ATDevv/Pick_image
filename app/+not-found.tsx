import { View, StyleSheet } from "react-native";
import { Stack, Link } from 'expo-router'

const NotFoundScreen = () => {
    return (
        <>
            <Stack.Screen options={{ title: 'Oops! Not Found' }} />
            <View style={styles.container}>
                <Link href={'/'} style={styles.button}>
                    Go to Home
                </Link>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    },
});

export default NotFoundScreen