import { Feather } from '@expo/vector-icons';
import colors from '../assets/colors/colors';
import { TouchableOpacity, View, Text } from 'react-native';

const CustomTabBar = ({ state, descriptors, navigation }) => {
    return (
        <View style={{ flexDirection: 'row', height: 80, backgroundColor: colors.white }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                let iconName;
                if (route.name === 'Home') {
                    iconName = 'home';
                }
                else if (route.name === 'Schedule') {
                    iconName = 'calendar'
                }
                else if (route.name === 'Bookmark') {
                    iconName = 'bookmark'
                }
                else if (route.name === 'Profile') {
                    iconName = 'user'
                }

                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole='button'
                        accessibilityStates={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestId}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                    >
                        <View style={{
                            position: 'absolute',
                            paddingBottom: 5,
                            borderRadius: 20,
                            flexDirection: 'row',
                            height: 30
                        }}>
                            <Feather name={iconName} size={22} color={isFocused ? colors.blue : colors.darkGray} />
                            <Text style={{ color: isFocused ? colors.blue : 'transparent', fontSize: 12, marginTop: 3, marginLeft: 5, fontWeight: '700' }}>{label}</Text>
                        </View>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

export default CustomTabBar;