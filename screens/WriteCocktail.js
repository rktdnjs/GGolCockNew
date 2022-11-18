import { useState } from "react";
import { Image, Text, View, StyleSheet, TextInput, Pressable } from "react-native";

function WriteCocktail() {
  // 사용자 측 이미지 업로드는 연구 필요
  const [cocktailname, setCocktailname] = useState("");
  const [comment, setComment] = useState("");
  const [flavor, setFlavor] = useState("");
  const [alcohol, setAlcohol] = useState("");
  const [recipe, setRecipe] = useState("");

  const cocktailnameHandler = (text) => {
    setCocktailname(text);
  };
  const commentHandler = (text) => {
    setComment(text);
  };
  const flavorHandler = (text) => {
    setFlavor(text);
  };
  const alcoholHandler = (text) => {
    setAlcohol(text);
  };
  const recipeHanlder = (text) => {
    setRecipe(text);
  };

  // SafeAreaView : 적절하게 배치
  // 글쓰기 버튼 -> 서버로 보내는거
  // 이미지 업로드 기능
  // 이전 화면이랑 연결되는 내비게이터
  // onPress -> navigation에 연결 -> 나중에 한꺼번에 연결하는걸로!

  return ( 
    <View style={styles.Container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/sample1.jpg")}
        />
      </View>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.textStyle}
          maxLength={50}
          onChangeText={cocktailnameHandler}
          placeholder="칵테일의 이름은 무엇인가요?"
        />
      </View>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.textStyle}
          maxLength={10}
          onChangeText={commentHandler}
          placeholder="칵테일에 대한 한 줄 평을 작성해주세요! :)"
        />
      </View>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.textStyle}
          maxLength={20}
          onChangeText={flavorHandler}
          placeholder="칵테일은 어떤 맛이 나나요?"
        />
      </View>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.textStyle}
          maxLength={10}
          onChangeText={alcoholHandler}
          placeholder="칵테일의 도수가 어느정도 인가요?"
        />
      </View>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.textStyle}
          maxLength={50}
          onChangeText={recipeHanlder}
          placeholder="칵테일을 만드는데 들어가는 재료를 알려주세요!"
        />
      </View>
      
      <Pressable/>
    </View>
  );
}

export default WriteCocktail;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 2, // 경계선
    elevation: 4,
    borderColor: "#3b021f",
    overflow: "hidden", // 이미지의 사각형 모서리를 숨김
    margin: 36,
  },
  image: {
    width: "100%", // %값을 설정한 요소의 컨테이너에 비례함
    height: "100%",
  },
  textContainer: {
    marginHorizontal: 20,
    marginVertical : 10,
    paddingBottom : 5,
    borderBottomColor: "#808080",
    borderBottomWidth: 0.5,
  },
  textStyle: {
    fontSize: 20,
  },
});
