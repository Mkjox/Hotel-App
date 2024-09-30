import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
    const [bookmark, setBookmark] = useState([]);

    useEffect(() => {
        const loadBookmark = async () => {
            try {
                const storedBookmark = await AsyncStorage.getItem('bookmark');
                if (storedBookmark) {
                    setBookmark(JSON.parse(storedBookmark));
                }
            }
            catch (error) {
                console.error('Failed to load bookmark:', error);
            }
        };
        loadBookmark();
    }, []);

    useEffect(() => {
        const addBookmark = async () => {
            try {
                await AsyncStorage.setItem('bookmark', JSON.stringify(bookmark));
            }
            catch (error) {
                console.error('Failed to add to bookmark', error);
            }
        }
        addBookmark();
    }, [cart]);

    const addBookmark = (item) => {
        setBookmark([...bookmark, item]);
    };

    const removeBookmark = (itemId) => {
        const updatedLike = cart.filter(item => item.id !== itemId);
        setBookmark(updatedLike);
    };

    return (
        <BookmarkContext.Provider value={{ bookmark, addBookmark, removeBookmark }}>
            {children}
        </BookmarkContext.Provider>
    )
}

export default BookmarkContext;