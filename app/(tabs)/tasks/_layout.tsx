import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#10b981" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen name="tasks" options={{ title: "Tasks" }} />
      <Stack.Screen name="add-task" options={{ title: "Add Task" }} />
      <Stack.Screen name="task-detail" options={{ title: "Task Details" }} />
      <Stack.Screen name="edit-task" options={{ title: "Edit Task" }} />
    </Stack>
  );
}
