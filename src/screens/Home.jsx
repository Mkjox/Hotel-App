import { useState, useContext, useEffect } from 'react';
import { FontAwesome, Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, FlatList, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import LikeContext from '../assets/context/LikeContext';
import BookmarkContext from '../assets/context/BookmarkContext';
import { BASE_URL, POSTS_URL } from '../assets/services/urls';
import colors from '../assets/colors/colors.js';
import postData from '../assets/data/postData.js';
import { Card } from 'react-native-paper';

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();
    const { like, addLike, removeLike } = useContext(LikeContext);
    const { bookmark, addBookmark, removeBookmark } = useContext(BookmarkContext);

    const categories = ['all', ...new Set(postData.map(post => post.category))];

    const filteredPosts = selectedCategory === 'all'
        ? postData
        : postData.filter(post => post.category.toLowerCase() === selectedCategory.toLowerCase());

    if (loading) {
        return <ActivityIndicator size="large" color={colors.yellow} />;
    }

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

            <View>
                {categories.map((category, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.categoryButton,
                            selectedCategory === category && styles.selectedCategoryButton
                        ]}
                        onPress={() => setSelectedCategory(category)}
                    >
                        <Text style={[
                            styles.categoryText,
                            setSelectedCategory === category && styles.selectedCategoryText
                        ]}>
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>


            <View style={styles.highlightedWrapper}>
                <Text style={styles.highlightedTitle}>Near Location</Text>
                <Text style={styles.highlightedMoreButton}>See All</Text>
            </View>

            <Text>{/* FLATLIST FOR HORIZONTAL HOTELS GOES HERE */}</Text>

            <View style={styles.popularWrapper}>
                <Text style={styles.popularTitle}>Popular Hotel</Text>
                <Text style={styles.popularMoreButton}>See All</Text>
            </View>

            <FlatList
                data={filteredPosts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {

                    const isLiked = like.some(likeItem => likeItem.id === item.id);
                    const isBookmarked = bookmark.some(bookmarkItem => bookmarkItem.id === item.id);


                    const toggleBookmark = () => {
                        if (isBookmarked) {
                            removeBookmark(item.id);
                        }
                        else {
                            addBookmark(item);
                        }
                    };

                    const toggleLike = () => {
                        if (isLiked) {
                            removeLike(item.id);
                        }
                        else {
                            addLike(item);
                        }
                    };

                    const bookmarkIcon = isBookmarked ? 'bookmark' : 'bookmark-o';
                    const heartIcon = isLiked ? 'heart' : 'heart-o'

                    return (
                        <View style={styles.postContainer}>
                            <TouchableOpacity>
                                <Card
                                    style={styles.postInnerWrapper}
                                    onPress={() => navigation.navigate("PostDetails", { item: item })}
                                >
                                    <ImageBackground>
                                        <TouchableOpacity style={styles.heart} onPress={toggleLike}>
                                            <FontAwesome name={heartIcon} size={28} color={colors.red} />
                                        </TouchableOpacity>
                                    </ImageBackground>
                                    <CardCover>
                                        <Text style={styles.postTitle}>{item.title}</Text>
                                        <Text style={styles.postLocation}>
                                            <MaterialIcons
                                                name='place' size={15} color={colors.darkGray}
                                            />
                                            {item.location}
                                        </Text>
                                        <Text style={styles.postDescription}>{item.description}</Text>
                                    </CardCover>
                                </Card>
                            </TouchableOpacity>
                        </View>
                    );
                }}
                ListEmptyComponent={<Text>No posts found for the selected category.</Text>}
            />


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
    },
    postContainer: {

    },
    postTitle: {

    },
    postDescription: {

    },
    postLocation: {

    },
    postPrice: {

    },
    postRating: {

    }
})

export default Home;