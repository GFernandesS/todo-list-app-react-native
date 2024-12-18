import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E'
    },
    upContainer: {
        backgroundColor: "#0D0D0D",
        width: "100%",
        height: "25%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        zIndex: 0
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: "contain"
    },
    form: {
        width: "100%",
        flexDirection: "row",
        padding: 16,
        marginTop: -40,
        zIndex: 1000
    },
    input: {
        height: 56,
        borderRadius: 5,
        backgroundColor: "#262626",
        padding: 16,
        flex: 1,
        color: "white",
        marginRight: 5
    },
    inputWithBorder: {
        borderWidth: 1,
        borderColor: "#262626"
    },
    addButton: {
        backgroundColor: "#1E6F9F",
        height: 56,
        width: 56,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
    },
    addImage: {
        height: 16,
        width: 16
    },
    createdText: {
        color: "#4EA8DE",
        fontWeight: "bold",
    },
    counterTextContainer: {
        flexDirection: "row",
        flex: 1,
    },
    counterText: {
        backgroundColor: "#333333",
        color: "white",
        width: 20,
        paddingLeft: 6,
        borderRadius: 5,
        marginLeft: 6,
    },
    conclusionText: {
        color: "#8284FA",
        fontWeight: "bold",
    },
    counterContainer: {
        flexDirection: "row",
        padding: 16,
    },
    counterConcludedContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        flex: 1,
    },
    cardList: {
        marginTop: 5,
        padding: 16
    }
})