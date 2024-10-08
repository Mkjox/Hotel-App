import { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Agenda } from "react-native-calendars";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../assets/colors/colors";

const Schedule = ({ navigation, route }) => {
    const [agendaItems, setAgendaItems] = useState({
        '2024-10-06': [{ title: 'Event 1', time: '10:00 AM' }],
        '2024-10-07': [{ title: 'Event 2', time: '12:00 PM' }]
    });

      const newBooking = route.params?.newBooking;
      console.log("Booking Params:", newBooking);
    
      useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
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
          }
        });
    
        return unsubscribe;
      }, [navigation, newBooking]);
    
      const renderEmptyDate = useCallback(() => {
        return (
          <View style={{ backgroundColor: colors.white, padding: 10, margin: 10 }}>
            <Text>No events on this day.</Text>
          </View>
        );
      }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.agendaContainer}>
                <Agenda
                    items={agendaItems}
                    selected={new Date().toISOString().split('T')[0]}
                    renderItem={(item) => (
                        <View style={{margin: 20}}>
                            <Text>{item.title}</Text>
                            <Text>{item.time}</Text>
                        </View>
                    )}
                    renderEmptyDate={renderEmptyDate}
                    pastScrollRange={12}
                    futureScrollRange={12}
                    rowHasChanged={(r1, r2) => r1.title !== r2.title}
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
    emptyDate: {
        backgroundColor: colors.white,
        padding: 10,
        margin: 10
    }
});

export default Schedule;