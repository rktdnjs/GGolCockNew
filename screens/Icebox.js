import { StyleSheet, View, Text } from "react-native";

function Icebox () {
    return (
        <View style={styles.container}>
            <View style={styles.layoutBox}>
                <Text>아이스박스 화면!!</Text>
            </View>
        </View>
    )
}

export default  Icebox;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    layoutBox: {
        margin: 16,
        alignItems: 'center'
    }
})