import { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Modal, Image } from 'react-native';

function WriteOverlay(props) {
  const [inputText, setInputText] = useState('');

  function goalInputHandler(Text) {
    setInputText(Text);
  }

  function addGoalHandler() {
    props.onAddGoal(inputText);
    setInputText('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
      <Image style={styles.image} source={require('../assets/images/sample1.jpg')} />
        <TextInput
          style={styles.textInput}
          placeholder='목표를 입력하세요!'
          onChangeText={goalInputHandler}
          value={inputText}
        />
        <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="목표 추가하기" onPress={addGoalHandler} color="#b180f0"/>
        </View>
        <View style={styles.button}>
          <Button title="닫기" onPress={props.onCancel} color="#f31282"/>
        </View>
        </View>
      </View>
    </Modal>
  );
};

export default WriteOverlay;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  image : {
    width: 100,
    height: 100,
    margin: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 5,
    width: '100%', // 사용할 수 있는 너비의 80%를 쓸 수 있다. 
    padding: 8
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button : {
    width: 100,
    marginHorizontal: 8
  }
})