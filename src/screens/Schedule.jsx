import { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Agenda } from "react-native-calendars";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../assets/colors/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Entypo } from "@expo/vector-icons";

const Schedule = ({ navigation, route }) => {
  const [agendaItems, setAgendaItems] = useState({});

  const saveAgendaItems = async (items) => {
    try {
      await AsyncStorage.setItem('agendaItems', JSON.stringify(items));
      console.log("Agenda items saved successfully.");
    }
    catch (error) {
      console.error("Error saving agenda items:", error);
    }
  };

  const loadAgendaItems = async () => {
    try {
      const savedItems = await AsyncStorage.getItem('agendaItems');
      if (savedItems) {
        setAgendaItems(JSON.parse(savedItems));
        console.log("Loaded agenda items:")
      }
    }
    catch (error) {
      console.error("Error loading agenda items:", error);
    }
  };

  const removeAgendaItem = async (items) => {
    try {
      await AsyncStorage.removeItem('agendaItems');
      console.log("Agenda item has been deleted succesfully.");
    }
    catch (error) {
      console.error("Error deleting agenda item:", error);
    }
  };

  useEffect(() => {
    loadAgendaItems();

    const unsubscribe = navigation.addListener('focus', () => {
      const newBooking = route.params?.newBooking;

      if (newBooking) {
        const { date, event } = newBooking;
        setAgendaItems((prevItems) => {
          const updatedItems = { ...prevItems };

          if (!updatedItems[date]) {
            updatedItems[date] = [];
          }

          updatedItems[date].push(event);

          saveAgendaItems(updatedItems);

          return updatedItems;
        });
      }
    });

    return unsubscribe;
  }, [navigation, route]);

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
            <View style={{ margin: 20 }}>
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
  },
});

export default Schedule;