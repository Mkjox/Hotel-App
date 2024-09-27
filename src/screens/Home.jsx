import { Feather, Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.location}>Current location</Text>
                <View style={styles.locationIconWrapper}>
                    <Ionicons name='location' size={24} />
                    <Text>DYNAMIC LOCATION</Text>
                </View>
                <View style={styles.notificationIcon}>
                    <Feather name='bell' size={24} />
                    <Text> {/* TRY TO ADD RED DOT ON IT FOR NOTIFICATIONS */}</Text>
                </View>
            </View>


            {/* FLATLIST FOR BUTTONS GOES HERE */}

            <View style={styles.highlightedWrapper}>
                <Text style={styles.highlightedTitle}>Near Location</Text>
                <Text style={styles.highlightedMoreButton}>See All</Text>
            </View>

            <Text>{/* FLATLIST FOR HORIZONTAL HOTELS GOES HERE */}</Text>

            <View style={styles.popularWrapper}>
                <Text style={styles.popularTitle}>Popular Hotel</Text>
                <Text style={styles.popularMoreButton}>See All</Text>
            </View>

            <Text>{/* FLATLIST FOR VERTICAL HOTELS GOES HERE */}</Text>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        margin: 10,
        marginTop: 15
    },
    location: {
        marginLeft: 5
    },
    locationIconWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    notificationIcon: {
        alignItems: 'flex-end',
        marginTop: -30
    },
    highlightedWrapper: {
        flexDirection: 'row',
        margin: 10
    },
    highlightedTitle: {
        fontSize: 18
    },
    highlightedMoreButton: {
        alignSelf: 'center',
        marginLeft: 220
    },
    popularWrapper: {
        flexDirection: 'row',
        margin: 10
    },
    popularTitle: {
        fontSize: 18
    },
    popularMoreButton: {
        alignSelf: 'center',
        marginLeft: 222,
    }
})

export default Home;