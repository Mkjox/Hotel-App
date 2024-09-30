import { View,Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PostDetails = () => {
    return (
        <SafeAreaView>
            <Text>
                This is PostDetails
            </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default PostDetails;