import { StyleSheet, View, Text } from "react-native";

function Favorite() {
    return (
        <View style={styles.container}>
            <View style={styles.layoutBox}>
                <Text>즐겨찾기 화면!!</Text>
            </View>
        </View>
    )
}

export default Favorite;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    layoutBox: {
        margin: 16,
        alignItems: 'center'
    }
})