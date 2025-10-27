import { Stack } from "expo-router";
export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="read" options={{ title: "Read Screen" }} />
      <Stack.Screen name="explore" options={{ title: "Explore Screen" }} />
      <Stack.Screen name="grow" options={{title:"Grow Sceen"}} />
    </Stack>
  )
}