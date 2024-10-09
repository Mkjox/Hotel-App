import { useState, useContext, useEffect } from "react";
import {
    FontAwesome,
    Feather,
} from "@expo/vector-icons";
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    TouchableOpacity,
    FlatList,
    ImageBackground,
    ScrollView,
    Modal,
    Alert,
    Pressable,
    Platform,
    PermissionsAndroid
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import LikeContext from "../assets/context/LikeContext";
import BookmarkContext from "../assets/context/BookmarkContext";
import colors from "../assets/colors/colors.js";
import popularHotelsData from "../assets/data/popularHotelsData.js";
import nearLocationData from "../assets/data/nearLocationData.js";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import Geolocation from 'react-native-geolocation-service';
import axios from "axios";

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [modalVisible, setModalVisible] = useState(false);
    const [location, setLocation] = useState(null);
    const [address, setAddress] = useState({ city: '', country: '' });
    const navigation = useNavigation();

    const { like, addLike, removeLike } = useContext(LikeContext);
    const { bookmark, addBookmark, removeBookmark } = useContext(BookmarkContext);

    const categories = ["all", ...new Set(popularHotelsData.map((post) => post.category))];

    const filteredPostsPopular =
        selectedCategory === "all"
            ? popularHotelsData
            : popularHotelsData.filter(
                (post) =>
                    post.category.toLowerCase() === selectedCategory.toLowerCase()
            );

    const filteredPostsNear =
        selectedCategory === "all"
            ? nearLocationData
            : nearLocationData.filter(
                (posts) =>
                    posts.category.toLowerCase() === selectedCategory.toLowerCase()
            );

    async function requestLocationPermission() {
        if (Platform.OS === 'android') {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
                title: "Location Access Required",
                message: "This app needs to access your location",
            }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("Location permission granted");
                return true;
            }
            else {
                console.log("Location permission denied");
                return false;
            }
        }
        return true;
    }

    async function getCurrentPosition() {
        const hasPermission = await requestLocationPermission();
        if (hasPermission) {
            Geolocation.getCurrentPosition(
                position => {
                    console.log(position);
                },
                error => {
                    console.log(error.code, error.message);
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            )
        }
    }

    const reverseGeocode = async (lat, lon) => {
        try {
            const response = await axios.get(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
            );
            const { city, country } = response.data.address;
            setAddress({ city, country });
        }
        catch (error) {
            console.log('Error fetching reverse geocoding data', error);
        }
    };

    const handleMapPress = (event) => {
        const { latitude, longitude } = event.nativeEvent.coordinate;
        setLocation({ latitude, longitude });
        reverseGeocode(latitude, longitude);
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Modal
                    animationType="fade"
                    transparent={false}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Map has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.map}>
                        <MapView
                            style={styles.mapView}
                            showsUserLocation
                            provider={PROVIDER_GOOGLE}
                            customMapStyle={[]}
                            zoomControlEnabled
                            mapType="terrain"
                            showsBuildings
                            showsMyLocationButton
                            initialRegion={{
                                latitude: 37.7749,
                                longitude: -122.4194,
                                longitudeDelta: 0.01,
                                latitudeDelta: 0.01
                            }}
                            onPress={handleMapPress}
                        >
                            {location && (
                                <Marker
                                    coordinate={{ latitude: location.latitude, longitude: location.longitude }}
                                    title="You are here"
                                />
                            )}
                        </MapView>
                        <Pressable
                            style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(false)}>
                            <Text style={styles.buttonCloseText}>Hide Map</Text>
                        </Pressable>
                    </View>
                </Modal>

                <View style={styles.title}>
                    <Text style={styles.location}>Current location</Text>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <Text style={styles.locationText}>
                            {address.city ? `${address.city}, ${address.country}` : "No location selected"}
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.notificationIcon}>
                        <Feather name="bell" size={24} />
                        <Text> {/* TRY TO ADD RED DOT ON IT FOR NOTIFICATIONS */}</Text>
                    </View>
                </View>

                <View style={styles.categoryWrapper}>
                    {categories.map((category, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                styles.categoryButton,
                                selectedCategory === category && styles.selectedCategoryButton,
                            ]}
                            onPress={() => setSelectedCategory(category)}
                        >
                            <Text
                                style={[
                                    styles.categoryText,
                                    selectedCategory === category && styles.selectedCategoryText,
                                ]}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.highlightedWrapper}>
                    <Text style={styles.highlightedTitle}>Near Location</Text>
                    <Text style={styles.highlightedMoreButton}>See All</Text>
                </View>

                <View style={{ margin: 10 }}>
                    <FlatList
                        alwaysBounceVertical
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={filteredPostsNear}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => {
                            const isLiked = like.some((likeItem) => likeItem.id === item.id);
                            const isBookmarked = bookmark.some(
                                (bookmarkItem) => bookmarkItem.id === item.id
                            );

                            const toggleBookmark = () => {
                                if (isBookmarked) {
                                    removeBookmark(item.id);
                                } else {
                                    addBookmark(item);
                                }
                            };

                            const toggleLike = () => {
                                if (isLiked) {
                                    removeLike(item.id);
                                } else {
                                    addLike(item);
                                }
                            };

                            const bookmarkIcon = isBookmarked ? "bookmark" : "bookmark-o";
                            const heartIcon = isLiked ? "heart" : "heart-o";

                            return (
                                <View style={styles.nearPostContainer}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('PostDetails', { item: item })}>
                                        <View
                                            style={styles.nearPostInnerWrapper}
                                        >
                                            <ImageBackground
                                                src={item.thumbnail}
                                                style={styles.nearPostPhoto}
                                                imageStyle={{ borderRadius: 6 }}
                                            >
                                                <TouchableOpacity style={styles.nearPostHeart} onPress={toggleLike}>
                                                    <FontAwesome
                                                        name={heartIcon}
                                                        size={18}
                                                        color={colors.red}
                                                    />
                                                </TouchableOpacity>
                                            </ImageBackground>
                                            <View style={styles.nearPostWrapper}>
                                                <Text style={styles.nearPostTitle}>{item.title}</Text>
                                                <Text style={styles.nearPostLocation}>
                                                    {/* <MaterialIcons
                                                name="place"
                                                size={15}
                                                color={colors.darkGray}
                                            /> */}
                                                    {item.location}
                                                </Text>

                                                <Text style={styles.nearPostPrice}>
                                                    ${item.price}<Text style={styles.nearPostPriceNight}>/night</Text>
                                                </Text>
                                            </View>
                                            <Text style={styles.nearPostRating}>
                                                <FontAwesome
                                                    name="star"
                                                    size={16}
                                                    color={colors.yellow}
                                                />
                                                {item.rating}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            );
                        }}
                        ListEmptyComponent={
                            <Text>No posts found for the selected category.</Text>
                        }
                    />
                </View>

                <View style={styles.popularWrapper}>
                    <Text style={styles.popularTitle}>Popular Hotel</Text>
                    <Text style={styles.popularMoreButton}>See All</Text>
                </View>

                <FlatList
                    alwaysBounceVertical
                    data={filteredPostsPopular}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => {
                        const isLiked = like.some((likeItem) => likeItem.id === item.id);
                        const isBookmarked = bookmark.some(
                            (bookmarkItem) => bookmarkItem.id === item.id
                        );

                        const toggleBookmark = () => {
                            if (isBookmarked) {
                                removeBookmark(item.id);
                            } else {
                                addBookmark(item);
                            }
                        };

                        const toggleLike = () => {
                            if (isLiked) {
                                removeLike(item.id);
                            } else {
                                addLike(item);
                            }
                        };

                        const bookmarkIcon = isBookmarked ? "bookmark" : "bookmark-o";
                        const heartIcon = isLiked ? "heart" : "heart-o";

                        return (
                            <View style={styles.postContainer}>
                                <TouchableOpacity onPress={() => navigation.navigate('PostDetails', { item: item })}>
                                    <View
                                        style={styles.postInnerWrapper}
                                    >
                                        <ImageBackground
                                            source={{ uri: item.thumbnail }}
                                            style={styles.postPhoto}
                                            imageStyle={{ borderRadius: 6 }}
                                        >
                                            <TouchableOpacity style={styles.heartWrapper} onPress={toggleLike}>
                                                <FontAwesome
                                                    name={heartIcon}
                                                    size={18}
                                                    color={colors.red}
                                                />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.bookmarkWrapper} onPress={toggleBookmark}>
                                                <FontAwesome
                                                    name={bookmarkIcon}
                                                    size={18}
                                                    color={colors.darkBlue}
                                                />
                                            </TouchableOpacity>
                                        </ImageBackground>
                                        <View style={styles.postWrapper}>
                                            <Text style={styles.postTitle}>{item.title}</Text>
                                            <Text style={styles.postLocation}>
                                                {/* <MaterialIcons
                                                name="place"
                                                size={15}
                                                color={colors.darkGray}
                                            /> */}
                                                {item.location}
                                            </Text>


                                        </View>
                                        <Text style={styles.postPrice}>
                                            ${item.price}<Text style={styles.postPriceNight}>/night</Text>
                                        </Text>
                                        <Text style={styles.postRating}>
                                            <FontAwesome
                                                name="star"
                                                size={16}
                                                color={colors.yellow}
                                            />
                                            {item.rating}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        );
                    }}
                    ListEmptyComponent={
                        <Text>No posts found for the selected category.</Text>
                    }
                />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        margin: 10,
        marginTop: 15,
    },
    location: {
        marginLeft: 5,
        fontFamily: 'Inter_500Medium'
    },
    locationText: {
        marginLeft: 5,
        marginBottom: 5,
        fontFamily: 'Roboto_500Medium',
        color: colors.darkGray
    },
    map: {
        flex: 1
    },
    mapView: {
        width: '100%',
        height: '90%',
    },
    button: {

    },
    buttonOpen: {

    },
    buttonClose: {
        padding: 10,
        alignSelf: 'center',
        marginTop: '5%',
        backgroundColor: colors.blue,
        width: '45%',
        borderRadius: 5
    },
    buttonCloseText: {
        color: colors.white,
        textAlign: 'center',
        fontFamily: 'Roboto_500Medium'
    },
    categoryWrapper: {
        flexDirection: 'row',
    },
    categoryButton: {
        marginHorizontal: 10,
        padding: 10,
        backgroundColor: colors.lightGray,
        borderRadius: 5,
        elevation: 5
    },
    selectedCategoryButton: {
        backgroundColor: colors.blue
    },
    categoryText: {
        color: colors.black
    },
    selectedCategoryText: {
        color: colors.white
    },
    notificationIcon: {
        alignItems: "flex-end",
        marginTop: -30,
    },
    highlightedWrapper: {
        flexDirection: "row",
        margin: 10,
    },
    highlightedTitle: {
        fontSize: 18,
    },
    highlightedMoreButton: {
        alignSelf: "center",
        position: 'absolute',
        right: 15,
        color: colors.blue,
        fontWeight: '600'
    },
    nearPostOuterWrapper: {
        flex: 1,
    },
    nearPostContainer: {
        height: 250,
        width: 250,
        borderWidth: 0.2,
        marginHorizontal: 5,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 3,
    },
    nearPostWrapper: {
    },
    nearPostInnerWrapper: {
        margin: 10
    },
    nearPostTitle: {
        fontFamily: 'Inter_600SemiBold',
        marginTop: 5
    },
    nearPostLocation: {
        color: colors.darkGray,
        fontSize: 14,
        fontFamily: 'Roboto_400Regular'
    },
    nearPostPhoto: {
        height: 150
    },
    nearPostPrice: {
        marginTop: 10,
        color: colors.blue,
    },
    nearPostPriceNight: {
        color: colors.darkGray
    },
    nearPostRating: {
        position: 'absolute',
        right: 5,
        bottom: 30,
        fontFamily: 'Roboto_500Medium'
    },
    nearPostHeart: {
        backgroundColor: 'white',
        height: 35,
        width: 35,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        top: 10,
        right: 10,
        position: 'absolute',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderWidth: 1,
        borderColor: colors.darkGray
    },
    popularWrapper: {
        flexDirection: "row",
        margin: 10,
    },
    postInnerWrapper: {
        borderRadius: 5,
        borderWidth: 0.2,
        flexDirection: 'row',
    },
    popularTitle: {
        fontSize: 18,
    },
    popularMoreButton: {
        alignSelf: "center",
        position: 'absolute',
        right: 15,
        color: colors.blue,
        fontWeight: '600'
    },
    postContainer: {
        margin: 10
    },
    postPhoto: {
        height: 200,
        width: 150,
        margin: 10
    },
    postWrapper: {

    },
    postTitle: {
        fontSize: 16,
        marginTop: 30,
        fontFamily: 'Inter_500Medium',
        maxWidth: 170
    },
    postDescription: {
        maxWidth: 200
    },
    postLocation: {
        color: colors.darkGray,
        marginTop: 5
    },
    postRating: {
        position: 'absolute',
        right: 10,
        top: 15,
        fontSize: 16,
        fontFamily: 'Roboto_500Medium'
    },
    postPrice: {
        color: colors.blue,
        position: 'absolute',
        bottom: 20,
        left: 170
    },
    postPriceNight: {
        color: colors.darkGray
    },
    heartWrapper: {
        backgroundColor: 'white',
        height: 35,
        width: 35,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 15,
        right: 15,
        position: 'absolute',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderWidth: 1,
        borderColor: colors.darkGray
    },
    bookmarkWrapper: {
        backgroundColor: colors.white,
        height: 35,
        width: 35,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 15,
        top: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderWidth: 1,
        borderColor: colors.darkGray
    }
});

export default Home;
