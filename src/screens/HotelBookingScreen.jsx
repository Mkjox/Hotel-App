import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Dimensions } from "react-native";
import { Agenda } from "react-native-calendars";
import colors from "../assets/colors/colors";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const screenHeight = Dimensions.get("screen").height;

const HotelBookingScreen = ({ route, navigation }) => {
    const { item } = route.params;
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);

    const handleDateChange = (event, date) => {
        if (event.type === "set") {
            setSelectedDate(date);
        }
        setShowPicker(false);
    }

    const handleBookNow = () => {
        const formattedDate = selectedDate.toISOString().split('T')[0];

        const newBooking = {
            date: formattedDate,
            event: {
                title: item.title,
                time: selectedDate.toLocaleDateString([], { hour: '2-digit', minute: '2-digit' }),
            },
        };

        console.log("Navigating with Booking:", newBooking);
        navigation.navigate("Schedule", { newBooking });
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.top}>
                <TouchableOpacity style={styles.backIconWrapper}>
                    <Entypo name="chevron-left" size={24} style={styles.backIcon} onPress={() => navigation.goBack()} />
                </TouchableOpacity>
                <Text style={styles.mainTitle}>
                    Booking Hotel
                </Text>
                <TouchableOpacity style={styles.moreIconWrapper}>
                    <MaterialCommunityIcons name="dots-horizontal" size={24} style={styles.moreIcon} />
                </TouchableOpacity>
            </View>

            <View style={{ margin: 15 }}>
                <ImageBackground
                    source={{ uri: item.thumbnail }}
                    style={styles.postPhoto}
                    imageStyle={{ borderRadius: 10 }}>

                </ImageBackground>

                <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.price}>${item.price}<Text style={styles.priceNight}>/night</Text></Text>
                    <Text style={styles.location}>{item.location}</Text>
                </View>
                <View>
                    <Text style={styles.descriptionTitle}>Description</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            </View>

            <View style={styles.buttonWrapper}>
                <TouchableOpacity style={styles.button} onPress={() => setShowPicker(true)}>
                    <Text style={styles.buttonText}>
                        Select Date
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handleBookNow}>
                    <Text style={styles.buttonText}>
                        Book Now
                    </Text>
                </TouchableOpacity>
            </View>


            {showPicker && (
                <DateTimePicker
                    value={selectedDate}
                    mode="date"
                    display="default"
                    onChange={handleDateChange}
                />
            )}


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        marginRight: 10,
        marginTop: 17
    },
    emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30
    },
    hotelInfo: {
        padding: 20
    },
    hotelTitle: {
        fontSize: 18,
        fontWeight: 'bold'
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
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2,
        shadowRadius: 3
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
        marginBottom: 20,
        elevation: 5
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: '20%',
        top: '60%'
    },
    button: {
        width: '40%',
        padding: 10,
        backgroundColor: colors.blue,
        borderRadius: 5
    },
    buttonText: {
        fontFamily: 'Inter_500Medium',
        color: colors.white,
        textAlign: 'center'
    },
});

export default HotelBookingScreen;