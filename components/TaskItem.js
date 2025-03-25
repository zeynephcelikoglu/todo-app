import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TaskItem({
  task,
  onToggle,
  onDelete,
  onEdit,
  onSubmitEdit,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEditPress = () => {
    setIsEditing(true);
  };

  const handleEditSubmit = () => {
    if (editedText.trim() !== "") {
      onEdit(task.id, editedText);
    }
    setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => onToggle(task.id)}
        style={[styles.checkCircle, task.completed && styles.checked]}
      >
        {task.completed && <Ionicons name="checkmark" size={14} color="#fff" />}
      </Pressable>

      {isEditing ? (
        <TextInput
          value={editedText}
          onChangeText={setEditedText}
          onSubmitEditing={handleEditSubmit}
          onBlur={handleEditSubmit}
          style={styles.input}
          autoFocus
        />
      ) : (
        <Text style={[styles.text, task.completed && styles.textCompleted]}>
          {task.text}
        </Text>
      )}

      <View style={styles.buttonGroup}>
        {!isEditing && (
          <Pressable onPress={handleEditPress} style={styles.editButton}>
            <Ionicons name="create-outline" size={18} color="#f97316" />
          </Pressable>
        )}

        <Pressable
          onPress={() => onDelete(task.id)}
          style={styles.deleteButton}
        >
          <Ionicons name="trash" size={18} color="#fb7185" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 14,
    marginHorizontal: 20,
    marginVertical: 6,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  checkCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#f97316",
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  checked: {
    backgroundColor: "#22c55e",
    borderColor: "#22c55e",
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: "#111",
  },
  textCompleted: {
    textDecorationLine: "line-through",
    color: "#9ca3af",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#111",
    padding: 4,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 10,
  },
  editButton: {
    backgroundColor: "rgba(251, 146, 60, 0.2)",
    padding: 8,
    borderRadius: 12,
    marginRight: 6,
  },
  deleteButton: {
    backgroundColor: "rgba(252, 165, 165, 0.2)",
    padding: 8,
    borderRadius: 12,
  },
});
