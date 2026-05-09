import React, { useState } from "react";

import { router } from "expo-router";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { addTask } from "../lib/database";

const statusOptions = ["Pending", "Ongoing", "Finished"];

export default function AddTaskScreen() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");

  const handleSave = async () => {
    try {
      if (!title.trim()) {
        throw new Error("Task title is required");
      }

      addTask(title, description, status);
      Alert.alert("Saved", `Task "${title}" added successfully.`);
      router.back();
    } catch (error) {
      Alert.alert(
        "Error",
        error instanceof Error ? error.message : "Something went wrong",
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Task</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter task title"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Enter task description"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <Text style={styles.label}>Select Status</Text>
      <View style={styles.statusContainer}>
        {statusOptions.map((option) => (
          <Pressable
            key={option}
            style={[
              styles.statusButton,
              status === option && styles.statusButtonActive,
            ]}
            onPress={() => setStatus(option)}
          >
            <Text
              style={[
                styles.statusButtonText,
                status === option && styles.statusButtonTextActive,
              ]}
            >
              {option}
            </Text>
          </Pressable>
        ))}
      </View>

      <Pressable style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Task</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  textArea: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },
  statusContainer: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 20,
  },

  statusButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 12,
    paddingVertical: 12,
    backgroundColor: "#fff",
    alignItems: "center",
    marginHorizontal: 4,
  },

  statusButtonActive: {
    backgroundColor: "#10b981",
    borderColor: "#10b981",
  },

  statusButtonText: {
    color: "#111",
    fontWeight: "600",
  },

  statusButtonTextActive: {
    color: "#fff",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#10b981",
    padding: 14,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },
});
