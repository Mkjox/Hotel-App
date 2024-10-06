import { Entypo, Ionicons, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../assets/colors/colors";
import { useNavigation } from "@react-navigation/native";

const screenWidth = Dimensions.get("screen").width;

const Profile = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <View style={styles.profileTop}>
                <Avatar.Image source={{ uri: "https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15" }} />
                <View style={styles.profileNameWrapper}>
                    <Text style={styles.profileName}>Ashley Stan</Text>
                    <Text style={styles.profileSub}>Show Profile</Text>
                </View>
                <Entypo name="chevron-right" size={24} />
            </View>

            {/* STRAIGHT LINE */}
            <View style={styles.line}></View>

            <View style={styles.options}>
                <Ionicons name="person-outline" size={24} style={styles.optionsInnerLeft} />
                <Text style={styles.optionsText}>Personal Info</Text>
                <Entypo name="chevron-right" size={24} style={styles.optionsInnerRight} />
            </View>

            <View style={styles.options}>
                <Octicons name="gear" size={24} style={styles.optionsInnerLeft} />
                <Text style={styles.optionsText}>Account</Text>
                <Entypo name="chevron-right" size={24} style={styles.optionsInnerRight} />
            </View>

            <View style={styles.line}></View>

            <TouchableOpacity onPress={() => navigation.navigate('Liked')} style={styles.options}>
                <Entypo name="heart-outlined" size={24} style={styles.optionsInnerLeft} />
                <Text style={styles.optionsText}>Liked</Text>
                <Entypo name="chevron-right" size={24} style={styles.optionsInnerRight} />
            </TouchableOpacity>

            <View style={styles.line}></View>

            <Text style={styles.supportTitle}>
                Support
            </Text>

            <View style={styles.options}>
                <MaterialCommunityIcons name="comment-question-outline" size={24} style={styles.optionsInnerLeft} />
                <Text style={styles.optionsText}>Need Help?</Text>
                <Entypo name="chevron-right" size={24} style={styles.optionsInnerRight} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontFamily: 'Arvo_700Bold',
        fontSize: 16,
        margin: 20,
    },
    profileTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 25
    },
    profileNameWrapper: {
        flexDirection: 'column',
    },
    profileName: {
        fontFamily: 'Inter_500Medium'
    },
    profileSub: {
        fontFamily: 'Inter_500Medium',
        color: colors.darkGray
    },
    line: {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: 20,
        marginHorizontal: 20,
    },
    options: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15,
        marginHorizontal: 25,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.darkGray,
        height: 40,
        alignItems: 'center',
        width: screenWidth * 0.88
    },
    optionsInnerLeft: {
        marginLeft: 15
    },
    optionsInnerRight: {
        marginRight: 15
    },
    optionsText: {
        fontFamily: 'Inter_500Medium'
    },
    supportTitle: {
        margin: 10,
        marginLeft: 15,
        fontFamily: 'Sen_700Bold'
    }
})

export default Profile