import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function TaskDetailScreen() {
  const { id, title, description, status } = useLocalSearchParams<{
    id: string;
    title: string;
    description: string;
    status: string;
  }>();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Note Details</Text>

      <View style={styles.card}>
        <Text style={styles.label}>ID</Text>
        <Text style={styles.value}>{id}</Text>

        <Text style={styles.label}>Title</Text>
        <Text style={styles.value}>{title}</Text>

        <Text style={styles.label}>Description</Text>
        <Text style={styles.value}>{description}</Text>

        <Text style={styles.label}>Status</Text>
        <Text style={styles.value}>{status}</Text>

        <Pressable
          style={styles.editButton}
          onPress={() =>
            router.push({
              pathname: "/(tabs)/tasks/edit-task",
              params: { id, title, description, status },
            })
          }
        >
          <Text style={styles.editButtonText}>Edit Note</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9fafb",
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 20,
    color: "#111",
  },

  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    elevation: 3,
  },

  label: {
    fontSize: 13,
    color: "#6b7280",
    marginTop: 14,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },

  value: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
    marginTop: 4,
  },

  description: {
    fontSize: 16,
    color: "#374151",
    marginTop: 6,
    lineHeight: 22,
  },

  // 🔥 Status badge
  statusBadge: {
    marginTop: 8,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    alignSelf: "flex-start",
  },

  statusText: {
    color: "#fff",
    fontWeight: "600",
  },

  pending: {
    backgroundColor: "#f59e0b",
  },

  ongoing: {
    backgroundColor: "#3b82f6",
  },

  finished: {
    backgroundColor: "#10b981",
  },
  editButton: {
    backgroundColor: "#10b981",
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  editButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },

  idText: {
    marginTop: 20,
    fontSize: 12,
    color: "#9ca3af",
  },
});
