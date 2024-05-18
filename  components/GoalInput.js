import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
  Pressable,
  Keyboard,
} from "react-native";

export default function GoalInput(props) {
  const [newGoal, setNewGoal] = useState("");

  function newGoalTyped(typedText) {
    setNewGoal(typedText);
  }

  function addGoalPressed() {
    props.addGoalPressed(newGoal);
    setNewGoal("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Pressable onPress={() => Keyboard.dismiss()}>
          <Image
            source={require("../assets/images/goal.png")}
            style={styles.imageStyle}
          />
        </Pressable>
        <TextInput
          style={styles.textInput}
          placeholder="Enter goals"
          onChangeText={newGoalTyped}
          value={newGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonStyle}>
            <Button title="Add Goal" onPress={addGoalPressed} color="white" />
          </View>
          <View style={styles.buttonStyle}>
            <Button title="Cancel" onPress={props.closeModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: "#DDDDDD",
    borderWidth: 2,
    padding: 15,
    width: "80%",
    borderRadius: 10,
    backgroundColor: "#e4d0ff",
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 24,
    flex: 1,
    backgroundColor: "#311b6b",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  buttonStyle: {
    padding: 10,
  },
  imageStyle: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
