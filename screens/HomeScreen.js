import React, { useState } from "react";
import { View, TextInput, FlatList, Pressable, StyleSheet } from "react-native";
import Header from "../components/Header";
import AddTaskBar from "../components/AddTaskBar";
import TaskItem from "../components/TaskItem";

export default function HomeScreen() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  const handleTaskSubmit = () => {
    if (!newTask.trim()) return;
    const newItem = {
      id: Date.now().toString(),
      text: newTask,
      completed: false,
    };
    setTasks([newItem, ...tasks]);
    setNewTask("");
  };

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEditTask = (id, newText) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task)),
    );
  };

  return (
    <View style={styles.container}>
      <Header
        total={totalTasks}
        completed={completedTasks}
        pending={pendingTasks}
      />

      <AddTaskBar
        value={newTask}
        onChange={setNewTask}
        onSubmit={handleTaskSubmit}
      />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onToggle={handleToggleComplete}
            onDelete={handleDeleteTask}
            onEdit={handleEditTask} 
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
