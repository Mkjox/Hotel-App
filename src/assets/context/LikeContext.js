import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
    const [like, setLike] = useState([]);

    useEffect(() => {
        const loadLike = async () => {
            try {
                const storedLike = await AsyncStorage.getItem('like');
                if (storedLike) {
                    setLike(JSON.parse(storedLike));
                }
            }
            catch (error) {
                console.error('Failed to load likes:', error);
            }
        };
        loadLike();
    }, []);

    useEffect(() => {
        const saveLike = async () => {
            try {
                await AsyncStorage.setItem('like', JSON.stringify(like));
            }
            catch (error) {
                console.error('Failed to save likes:', error);
            }
        };
        saveLike();
    }, [like]);

    const addLike = (item) => {
        setLike([...like, item]);
    };

    const removeLike = (itemId) => {
        const updatedLike = like.filter(item => item.id !== itemId);
        setLike(updatedLike);
    };

    return (
        <LikeContext.Provider value={{ like, addLike, removeLike }}>
            {children}
        </LikeContext.Provider>
    );
};

export default LikeContext;