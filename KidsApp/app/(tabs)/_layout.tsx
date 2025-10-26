import { Stack } from "expo-router";
export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="screenApp/read" options={{ title: "Read Screen" }} />
      <Stack.Screen name="screenApp/explore" options={{ title: "Explore Screen" }} />
    </Stack>
  )
}