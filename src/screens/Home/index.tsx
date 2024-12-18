import {FlatList, Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "./styles";
import {useMemo, useState} from "react";
import {EmptyList} from "../../components/EmptyList";
import {Task} from "../../components/Task";
import uuid from "react-native-uuid"

interface Task {
    description: string;
    isConcluded: boolean;
    id: string;
}

export function Home() {
    const [isInputFocused, setIsInputFocuses] = useState<boolean>(false);
    const [inputContent, setInputContent] = useState("");
    const [tasks, setTasks] = useState<Task[]>([]);

    const tasksConcludedCount = useMemo(() => {
        return tasks.filter((task) => task.isConcluded).length
    }, [tasks]);

    const handleOnConcluded = (index: number) => {
        const copyTasks = [...tasks]

        copyTasks[index] = {
            ...copyTasks[index],
            isConcluded: !copyTasks[index].isConcluded
        }

        setTasks(copyTasks)
    }

    const handleOnRemove = (id: string) => {
        setTasks(prevState => prevState.filter((task) => task.id !== id))
    }

    const handleOnAdd = () => {
        setTasks(prevState => [{
            id: uuid.v4(),
            description: inputContent,
            isConcluded: false
        }, ...prevState])

        setInputContent("")
    }

    return (
        <View style={styles.container}>
            <View style={styles.upContainer}>
                <Image style={styles.logo} source={require("../../../assets/Logo.png")}/>
            </View>
            <View style={styles.form}>
                <TextInput
                    onChangeText={(value) => setInputContent(value)}
                    value={inputContent}
                    style={{
                        ...styles.input,
                        borderColor: isInputFocused ? "#5E60CE" : "#000",
                        borderWidth: isInputFocused ? 1 : 0
                    }}
                    onFocus={() => setIsInputFocuses(true)}
                    onBlur={() => setIsInputFocuses(false)}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#808080"/>
                <TouchableOpacity style={styles.addButton} onPress={handleOnAdd}>
                    <Image source={require("../../../assets/plus.png")} style={styles.addImage}/>
                </TouchableOpacity>
            </View>
            <View style={styles.counterContainer}>
                <View style={styles.counterTextContainer}>
                    <Text style={styles.createdText}>Criadas</Text>
                    <Text style={styles.counterText}>{tasks.length}</Text>
                </View>
                <View style={styles.counterConcludedContainer}>
                    <Text style={styles.conclusionText}>Concluídas</Text>
                    <Text style={styles.counterText}>{tasksConcludedCount}</Text>
                </View>
            </View>
            <FlatList
                data={tasks}
                style={styles.cardList}
                keyExtractor={(item, _) => item.id}
                ListEmptyComponent={() => (<EmptyList/>)}
                renderItem={(item) => (
                    <Task isChecked={item.item.isConcluded}
                          content={item.item.description}
                          onPress={() => handleOnConcluded(item.index)}
                          onRemove={() => handleOnRemove(item.item.id)}
                    />
                )}/>
        </View>
    )
}