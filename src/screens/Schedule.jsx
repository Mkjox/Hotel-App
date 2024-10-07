import { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Agenda } from "react-native-calendars";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../assets/colors/colors";

const Schedule = ({ navigation }) => {
    const [agendaItems, setAgendaItems] = useState({
        '2024-10-06': [{ name: 'Event 1', time: '10:00 AM' }],
        '2024-10-07': [{ name: 'Event 2', time: '12:00 PM' }]
    });

    const renderEmptyDate = useCallback(() => (
        <View style={styles.emptyDate}>
            <Text>No events on this day.</Text>
        </View>
    ), []);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            const newBooking = navigation.getState().routes.slice(-1)[0]?.params?.newBooking;
            if (newBooking) {
                const { date, event } = newBooking;

                setAgendaItems((prevItems) => {
                    const updatedItems = { ...prevItems };

                    if (!updatedItems[date]) {
                        updatedItems[date] = [];
                    }

                    updatedItems[date].push(event);
                    return updatedItems;
                });

                navigation.setParams({ newBooking: null });
            }
        });

        return unsubscribe;
    }, [navigation]);

    useEffect(() => {
        setTimeout(() => {
            setAgendaItems((prevItems) => {
                const updatedItems = { ...prevItems };
                const newDate = '2024-10-08';
                const newEvent = { name: 'Test Event', time: '3:00 PM' };

                if (!updatedItems[newDate]) {
                    updatedItems[newDate] = [];
                }
                updatedItems[newDate].push(newEvent);
                return updatedItems;
            });
        }, 2000);
    }, []);

    const renderItem = useCallback((item) => (
        <View style={styles.eventContainer}>
            <Text style={styles.eventName}>{item.name}</Text>
            <Text style={styles.eventTime}>{item.time}</Text>
        </View>
    ), []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.agendaContainer}>
                <Agenda
                    items={agendaItems}
                    selected={new Date().toISOString().split('T')[0]}
                    renderItem={renderItem}
                    renderEmptyDate={renderEmptyDate}
                    pastScrollRange={12}
                    futureScrollRange={12}
                    rowHasChanged={(r1, r2) => r1.name !== r2.name}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    agendaContainer: {
        height: '100%'
    },
    eventContainer: {
        backgroundColor: colors.white,
        padding: 10,
        margin: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.lightGray
    },
    eventName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    eventTime: {
        fontSize: 14,
        color: colors.darkGray
    },

});

export default Schedule;