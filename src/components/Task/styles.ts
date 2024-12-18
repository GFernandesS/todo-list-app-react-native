import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#333333",
        borderRadius: 5,
        borderWidth: 0.5,
        height: 75,
        flexDirection: "row",
        padding: 16,
        alignItems: "center",
        marginBottom: 10
    },
    image: {
        height: 20,
        width: 20,
        resizeMode: "contain",
    },
    content: {
        flex: 1,
        color: "white",
        fontSize: 16,
        marginLeft: 10,
        marginBottom: 5,
        flexWrap: "wrap",
    },
    checkbox: {
        width: 30
    }
})