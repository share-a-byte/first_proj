import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import GoalItem from "./ components/GoalItem";

export default function App() {
  const [newGoal, setNewGoal] = useState("");
  const [allGoals, setAllGoals] = useState([]);

  function addGoalPressed() {
    setAllGoals((prevGoals) => [
      ...prevGoals,
      { text: newGoal, id: Math.random() * 100 },
    ]);
  }

  function newGoalTyped(typedText) {
    setNewGoal(typedText);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter course goals"
          onChangeText={newGoalTyped}
        />
        <Button title="Add Goal" onPress={addGoalPressed} />
      </View>
      <View style={styles.goalContainer}>
        <Text>List of goals...</Text>
        <FlatList
          data={allGoals}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: "cccccc",
    borderWidth: 2,
    padding: 15,
    width: "70%",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "cccccc",
    borderBottomWidth: 1,
    paddingBottom: 24,
    flex: 1,
  },
  appContainer: {
    paddingTop: 50,
    flex: 1,
    paddingHorizontal: 20,
  },
  goalContainer: {
    flex: 4,
  },
  listElement: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    padding: 8,
  },
  goalText: {
    color: "white",
  },
});
