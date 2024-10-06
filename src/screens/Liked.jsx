import { View, Text, StyleSheet, FlatList, TouchableOpacity, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LikeContext from "../assets/context/LikeContext";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { Card } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../assets/colors/colors";

const Liked = () => {
    const { like, removeLike } = useContext(LikeContext);
    const navigation = useNavigation();

    if (!like || like.length === 0) {
        return (
            <SafeAreaView style={styles.containerEmpty}>
                <Text style={styles.emptyText}>There is no liked posts right now.</Text>
            </SafeAreaView>
        )
    }

    const handleRemoveFromLike = (itemId) => {
        removeLike(itemId);
    }

    // It does indeed has same codes as bookmark page

    return (
        <SafeAreaView>
            <FlatList
                alwaysBounceVertical
                showsVerticalScrollIndicator={false}
                data={like}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate("PostDetails", { item: item })}>
                        <Card style={styles.likeWrapper}>
                            <ImageBackground src={item.thumbnail} style={styles.likeImage} imageStyle={{ borderRadius: 5 }}>
                                <TouchableOpacity onPress={() => handleRemoveFromLike(item.id)} style={styles.removeLike}>
                                    <FontAwesome
                                        name="heart"
                                        size={22}
                                        color={colors.red}
                                    />
                                </TouchableOpacity>
                            </ImageBackground>
                            <Card.Content style={styles.likeText}>
                                <Text style={styles.likeTitle}>
                                    {item.title}
                                </Text>
                                <Text style={styles.likeDescription}>
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
    likeWrapper: {
        margin: 10
    },
    likeImage:{
        height: 200,
        overflow: 'hidden'
    },
    removeLike: {
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
    likeText: {
        marginTop: 10
    },
    likeTitle: {
        fontSize: 16,
        color: colors.blue,
        fontFamily: 'Inter_500Medium'
    },
    likeDescription: {
        marginBottom: 10,
        color: colors.darkGray
    },
    price:{
        color: colors.blue
    },
    priceNight: {
        color: colors.darkGray
    }
})

export default Liked;