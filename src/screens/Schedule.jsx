import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Schedule = () => {
    return (
        <SafeAreaView>
            <Text>This is Schedule Page</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Schedule;