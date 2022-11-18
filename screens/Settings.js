import { StyleSheet, View, Text } from "react-native";

function Settings () {
    return (
        <View style={styles.container}>
            <View style={styles.layoutBox}>
                <Text>설정 화면!!</Text>
            </View>
        </View>
    )
}

export default Settings;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    layoutBox: {
        margin: 16,
        alignItems: 'center'
    }
})