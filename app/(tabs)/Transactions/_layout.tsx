import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Expense List", headerShown: false }}
      />
      <Stack.Screen name="Details" options={{ title: "Expense Details" }} />
    </Stack>
  );
}
