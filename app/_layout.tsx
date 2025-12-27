// // import "../global.css";
// // import { Stack } from "expo-router";
// // import { AppProvider } from "../context/AppContext";

// // export default function RootLayout() {
// //   return (
// //     <AppProvider>
// //       <Stack screenOptions={{ headerShown: false }}>
// //         <Stack.Screen name="(tabs)" />
// //         <Stack.Screen name="modal" options={{ presentation: "modal" }} />
// //       </Stack>
// //     </AppProvider>
// //   );
// // }
// import "../global.css";
// import { Stack } from "expo-router";
// // import { AppProvider } from "../context/AppContext";

// export default function RootLayout() {
//   return (
//     <AppProvider>
//       <Stack screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="(tabs)" />
//         <Stack.Screen name="modal" options={{ presentation: "modal" }} />
//       </Stack>
//     </AppProvider>
//   );
// }
import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack />;
}
