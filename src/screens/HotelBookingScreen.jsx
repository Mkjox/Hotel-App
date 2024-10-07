import React, { useState } from "react";
import { View, Text, Button, Alert, StyleSheet } from "react-native";
import { Agenda } from "react-native-calendars";

const HotelBookingScreen = ({ route, navigation }) => {
    const { item } = route.params;
    const [items, setItems] = useState({});

    const handleBookNow = (selectedDate) => {
        const newItems = { ...items };

        if (!newItems[selectedDate]) {
            newItems[selectedDate] = [];
        }

        newItems[selectedDate].push({
            name: `Booking at ${item.title}`,
            description: `${item.description} - $${item.price}/night`,
            time: '12:00 PM',
            height: 100
        });

        setItems(newItems);

        navigation.navigate('Schedule', {
            newBooking: {
                date: '2024-10-08',
                event: {
                    name: `Booking at ${item.title}`,
                    time: '12:00 PM',
                }
            }
        });
    };

    return (
        <View style={{ flex: 1 }}>
            <Agenda
                items={items}
                selected={new Date().toISOString().split('T')[0]} //Today's date
                renderItem={(item) => (
                    <View style={styles.item}>
                        <Text>{item.name}</Text>
                        <Text>{item.description}</Text>
                    </View>
                )}
                renderEmptyDate={() => <View style={styles.emptyDate}><Text>No events for this date.</Text></View>}
                rowHasChanged={(r1, r2) => r1.name !== r2.name}
            />

            <View style={styles.hotelInfo}>
                <Text style={styles.hotelTitle}>{item.title}</Text>
                <Text>{item.location}</Text>
                <Text>{item.price}</Text>
                <Button title="Book Now" onPress={() => handleBookNow('2024-10-07')} />
            </View>
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