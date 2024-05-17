import { StyleSheet, View, Text } from "react-native";

export default function GoalItem(props) {
  return (
    <View style={styles.listElement}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
