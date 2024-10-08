import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { View, Text, Button, Alert, StyleSheet } from "react-native";
import { Agenda } from "react-native-calendars";

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
        <View style={{ flex: 1 }}>
            <Text>{item.title}</Text>
            <Button title="Select Date" onPress={() => setShowPicker(true)} />
            {showPicker && (
                <DateTimePicker
                    value={selectedDate}
                    mode="date"
                    display="default"
                    onChange={handleDateChange}
                />
            )}

            <Button title="Book Now" onPress={handleBookNow} />
        </View>
    )
}

const styles = StyleSheet.create({
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
    }
});

export default HotelBookingScreen;