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
      <Stack.Screen name="tasks" options={{ title: "Notes" }} />
      <Stack.Screen name="add-task" options={{ title: "Add Note" }} />
      <Stack.Screen name="task-detail" options={{ title: "Note Details" }} />
      <Stack.Screen name="edit-task" options={{ title: "Edit Note" }} />
    </Stack>
  );
}
