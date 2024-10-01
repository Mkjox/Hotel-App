import { useState, useContext, useEffect } from "react";
import {
    FontAwesome,
    Feather,
    Ionicons,
    MaterialIcons
} from "@expo/vector-icons";
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    TouchableOpacity,
    FlatList,
    ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import LikeContext from "../assets/context/LikeContext";
import BookmarkContext from "../assets/context/BookmarkContext";
import colors from "../assets/colors/colors.js";
import postData from "../assets/data/postData.js";
import { Card } from "react-native-paper";

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const navigation = useNavigation();
    const { like, addLike, removeLike } = useContext(LikeContext);
    const { bookmark, addBookmark, removeBookmark } = useContext(BookmarkContext);

    const categories = ["all", ...new Set(postData.map((post) => post.category))];

    const filteredPosts =
        selectedCategory === "all"
            ? postData
            : postData.filter(
                (post) =>
                    post.category.toLowerCase() === selectedCategory.toLowerCase()
            );


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.location}>Current location</Text>
                <View style={styles.locationIconWrapper}>
                    <Ionicons name="location" size={24} />
                    <Text>DYNAMIC LOCATION</Text>
                </View>
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

            <View>
                <FlatList
                    alwaysBounceVertical
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={filteredPosts}
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
                                <TouchableOpacity>
                                    <View
                                        style={styles.nearPostInnerWrapper}
                                        onPress={() =>
                                            navigation.navigate("PostDetails", { item: item })
                                        }
                                    >
                                        <ImageBackground
                                            src="https://picsum.photos/700"
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
                                                ${item.price}<Text style={styles.nearPostPriceDay}>/night</Text>
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
                data={filteredPosts}
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
                            <TouchableOpacity>
                                <View
                                    style={styles.postInnerWrapper}
                                    onPress={() =>
                                        navigation.navigate("PostDetails", { item: item })
                                    }
                                >
                                    <ImageBackground
                                        src="https://picsum.photos/700"
                                        style={styles.postPhoto}
                                        imageStyle={{ borderRadius: 6 }}
                                    >
                                        <TouchableOpacity style={styles.heart} onPress={toggleLike}>
                                            <FontAwesome
                                                name={heartIcon}
                                                size={18}
                                                color={colors.red}
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
                                        ${item.price}<Text style={styles.postPriceDay}>/night</Text>
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
    },
    locationIconWrapper: {
        flexDirection: "row",
        alignItems: "center",
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
        width: 160,
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

    },
    nearPostPriceDay: {

    },
    nearPostRating: {
        position: 'absolute',
        right: 5,
        bottom: 35,
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
        elevation: 5
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
    postPriceDay: {
        color: colors.darkGray
    },
    heart: {
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
        elevation: 5
    }
});

export default Home;
