import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Calendar, CalendarList, Agenda, AgendaList } from "react-native-calendars";
import { SafeAreaView } from "react-native-safe-area-context";

const Schedule = () => {
    const [selected, setSelected] = useState('');

    return (
        <SafeAreaView>
            <Calendar
                onDayPress={day => {
                    setSelected(day.dateString)
                }}
                markedDates={{
                    [selected]: {selected: true, disableTouchEvent: true, selectedColor: 'orange'}
                }}
                enableSwipeMonths
            >
            <AgendaList />
            </Calendar>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    calendar: {
    },
})

export default Schedule;