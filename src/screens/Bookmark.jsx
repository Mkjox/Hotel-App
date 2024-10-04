import { View, Text, StyleSheet, FlatList, ImageBackground, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BookmarkContext from "../assets/context/BookmarkContext";
import { useContext } from "react";
import { Card } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../assets/colors/colors";
import { useNavigation } from "@react-navigation/native";

const Bookmark = () => {
    const { bookmark, removeBookmark } = useContext(BookmarkContext);
    const navigation = useNavigation();

    if (!bookmark || bookmark.length === 0) {
        return (
            <SafeAreaView style={styles.containerEmpty}>
                <Text style={styles.emptyText}>There are no added bookmarks right now.</Text>
            </SafeAreaView>
        )
    }

    const handleRemoveFromBookmark = (itemId) => {
        removeBookmark(itemId);
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* <View style={styles.titleWrapper}>
                <Text style={styles.title}>Bookmarks</Text>
            </View> */}
            <FlatList
                alwaysBounceVertical
                showsVerticalScrollIndicator={false}
                data={bookmark}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate("PostDetails", { item: item })}>

                        <Card style={styles.bookmarkWrapper}>
                            <ImageBackground src={item.thumbnail} style={styles.bookmarkImage} imageStyle={{ borderRadius: 5 }}>
                                <TouchableOpacity onPress={() => handleRemoveFromBookmark(item.id)} style={styles.removeButton}>
                                    <FontAwesome
                                        name="bookmark"
                                        size={25}
                                        color={colors.darkBlue}
                                    />
                                </TouchableOpacity>
                            </ImageBackground>
                            <Card.Content style={styles.bookmarkText}>
                                <Text style={styles.bookmarkTitle}>
                                    {item.title}
                                </Text>
                                <Text style={styles.bookmarkDescription}>
                                    {item.description}
                                </Text>
                                <Text style={styles.price}>
                                    ${item.price}<Text style={styles.priceNight}>/night</Text>
                                </Text>
                            </Card.Content>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 10
    },
    containerEmpty: {
        flex: 1,
        justifyContent: 'center'
    },
    emptyText: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
        justifyContent: 'center'
    },
    titleWrapper: {
        margin: 8
    },
    title: {
        textAlign: 'center',
        fontFamily: 'Roboto_400Regular',
        fontSize: 18
    },
    bookmarkWrapper: {
        margin: 10,
    },
    bookmarkImage: {
        height: 200,
        overflow: 'hidden',
    },
    removeButton: {
        position: 'absolute',
        right: 15,
        top: 15,
        backgroundColor: colors.white,
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: colors.darkGray
    },
    bookmarkText: {
        marginTop: 10,
    },
    bookmarkTitle: {
        fontSize: 16,
        color: colors.blue,
        fontFamily: 'Inter_500Medium',
    },
    bookmarkDescription: {
        marginBottom: 10,
        color: colors.darkGray
    },
    price: {
        color: colors.blue,
    },
    priceNight: {
        color: colors.darkGray
    }
})

export default Bookmark;