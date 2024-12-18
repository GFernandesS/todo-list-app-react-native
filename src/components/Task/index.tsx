import {View, Text, Image, TouchableOpacity} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {styles} from "./styles";

export interface TaskProps {
    content: string;
    isChecked: boolean;
    onPress: () => void;
    onRemove: () => void;
}

export function Task({content, isChecked, onPress, onRemove}: TaskProps) {
    return (
        <View style={styles.container}>
            <BouncyCheckbox
                innerIconStyle={{borderColor: isChecked ? "#5E60CE" : "#4EA8DE"}}
                fillColor={"#5E60CE"}
                style={styles.checkbox}
                isChecked={isChecked}
                onPress={onPress}/>

            <Text style={{...styles.content, textDecorationLine: isChecked ? "line-through" : "none"}}>{content}</Text>

            <TouchableOpacity onPress={onRemove}>
                <Image source={require("../../../assets/Trash.png")} style={styles.image}/>
            </TouchableOpacity>
        </View>
    )
}