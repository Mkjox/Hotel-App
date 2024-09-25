import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
    return (
        <SafeAreaView>
            <Text>
                This is Homepage
            </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Home;