import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Details = () => {
    return (
        <SafeAreaView>
            <Text>This is Details</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Details;