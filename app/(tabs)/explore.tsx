import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function ExploreScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-gray-50 p-6">
      <Text className="text-xl font-bold mb-6">Explore Eco Features</Text>

      <TouchableOpacity
        onPress={() => router.push("/modal")}
        className="bg-green-600 p-4 rounded-xl mb-4"
      >
        <Text className="text-white text-center font-semibold">
          Open Eco Scan
        </Text>
      </TouchableOpacity>

      <View className="bg-white p-4 rounded-xl">
        <Text className="font-semibold">Coming Soon</Text>
        <Text className="text-gray-500">
          Inventory • Leaderboard • Badges
        </Text>
      </View>
    </View>
  );
}
