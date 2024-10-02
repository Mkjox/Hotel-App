import { Entypo, Feather, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../assets/colors/colors";

const screenHeight = Dimensions.get("screen").height;

const PostDetails = ({ route, navigation }) => {
    const { item } = route.params;


    return (
        <SafeAreaView>
            <View style={styles.top}>
                <TouchableOpacity style={styles.backIconWrapper}>
                    <Entypo name="chevron-left" size={24} style={styles.backIcon} onPress={() => navigation.goBack()} />
                </TouchableOpacity>
                <Text style={styles.mainTitle}>
                    Details
                </Text>
                <TouchableOpacity style={styles.moreIconWrapper}>
                    <MaterialCommunityIcons name="dots-horizontal" size={24} style={styles.moreIcon} />
                </TouchableOpacity>
            </View>

            <View style={{ margin: 15 }}>
                <ImageBackground
                    src="https://picsum.photos/700"
                    style={styles.postPhoto}
                    imageStyle={{ borderRadius: 10 }}>

                </ImageBackground>

                <View style={styles.details}>
                    <TouchableOpacity style={styles.detailsButtons}>
                        <Feather name="wifi" size={18} style={{ marginRight: 5 }} />
                        <Text>Free Wifi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.detailsButtons}>
                        <Feather name="coffee" size={18} style={{ marginRight: 5 }} />
                        <Text>Free Breakfast</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.detailsButtons}>
                        <FontAwesome name="star" size={18} color={colors.yellow} style={{ marginRight: 5 }} />
                        <Text>{item.rating}</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.price}>${item.price}<Text style={styles.priceNight}>/night</Text></Text>
                    <Text style={styles.location}>{item.location}</Text>
                </View>
                <View>
                    <Text style={styles.descriptionTitle}>Description</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>

                <View>
                    <Text style={styles.previewTitle}></Text>
                    <Text>THIS IS WHERE IMAGES NEED TO BE</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    top: {
        flexDirection: 'row',
        marginBottom: 15,
        justifyContent: 'space-between',
        marginTop: 15
    },
    mainTitle: {
        fontFamily: 'Inter_600SemiBold'
    },
    backIconWrapper: {
        backgroundColor: colors.white,
        width: 30,
        height: 30,
        marginLeft: 15,
        borderWidth: 1,
        borderRadius: 10,
        elevation: 10,
        borderColor: colors.slightGray
    },
    backIcon: {
        alignSelf: 'center'
    },
    moreIconWrapper: {
        backgroundColor: colors.white,
        width: 30,
        height: 30,
        marginRight: 15,
        borderWidth: 1,
        borderRadius: 10,
        elevation: 10,
        borderColor: colors.slightGray
    },
    moreIcon: {
        alignSelf: 'center'
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginTop: 5
    },
    detailsButtons: {
        marginBottom: 15,
        padding: 10,
        backgroundColor: colors.white,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.slightGray,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Inter_600SemiBold',
    },
    price: {
        position: 'absolute',
        right: 5,
        color: colors.blue,
    },
    priceNight: {
        color: colors.darkGray
    },
    location: {
        margin: 10,
        fontFamily: 'Sen_400Regular',
        color: colors.darkGray
    },
    descriptionTitle: {
        marginTop: 10,
        fontFamily: 'Inter_600SemiBold'
    },
    description: {
        margin: 10,
        color: colors.darkGray,
        fontFamily: 'Sen_400Regular'
    },
    postPhoto: {
        height: screenHeight * 0.3,
        marginBottom: 15
    },
});

export default PostDetails;