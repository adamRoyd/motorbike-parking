import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width - 20;

const Card = () => {
    return (
        <View style={styles.scrollView}>
            <View style={styles.card}>
                <Image
                    source={require("../assets/banners/food-banner1.jpg")}
                    style={styles.cardImage}
                    resizeMode="cover"
                />
                <View style={styles.textContent}>
                    <Text numberOfLines={1} style={styles.cardtitle}>Title</Text>
                    <Text numberOfLines={1} style={styles.cardDescription}>Description</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        position: "absolute",
        bottom: 0,
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    card: {
        elevation: 2,
        backgroundColor: "#FFF",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        shadowColor: "#000",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
        height: CARD_HEIGHT,
        width: CARD_WIDTH,
        overflow: "hidden",
    },
    cardImage: {
        flex: 3,
        width: "100%",
        height: "100%",
        alignSelf: "center",
    },
    textContent: {
        flex: 2,
        padding: 10,
    },
    cardtitle: {
        fontSize: 13,
        // marginTop: 5,
        fontWeight: "bold",
    },
    cardDescription: {
        fontSize: 12,
        color: "#444",
    },
});

export default Card;