import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

function Cocktail() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.layoutBox}>
                <Text>칵테일 레시피 화면!!</Text>
                <View>
                    <Pressable android_ripple={{ color: '#dddddd' }} onPress={() => {
                        navigation.navigate('즐겨찾기')
                    }}>
                        <Ionicons name="add-circle" size={48} color="black" />
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default Cocktail;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    layoutBox : {
        margin: 16,
        alignItems : 'center'
    }
})