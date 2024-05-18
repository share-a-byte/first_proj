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
import GoalInput from "./ components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [allGoals, setAllGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function modalHandler() {
    setModalVisible(true);
  }

  function closeModal() {
    setModalVisible(false);
  }

  function addGoalPressed(newGoal) {
    console.log(newGoal);
    setAllGoals((prevGoals) => [
      ...prevGoals,
      { text: newGoal, id: Math.random() * 100 },
    ]);
    closeModal();
  }

  function deleteGoal(goal_id) {
    setAllGoals((currGoals) => {
      return currGoals.filter((goal) => goal.id !== goal_id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add new goal!" color="white" onPress={modalHandler} />
        <GoalInput
          addGoalPressed={addGoalPressed}
          visible={modalVisible}
          closeModal={closeModal}
        />
        <View style={styles.goalContainer}>
          <FlatList
            data={allGoals}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  deleteGoal={deleteGoal}
                  id={itemData.item.id}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    flex: 1,
    paddingHorizontal: 20,
  },
  goalContainer: {
    flex: 5,
    marginTop: 10,
  },
});
