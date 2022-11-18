import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Home() {
  return (
    <View style={styles.container}>
        <View style={styles.layoutBox}>
          <Text>홈 화면!!</Text>
        </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layoutBox: {
    margin: 16,
    alignItems: "center",
  },
});
