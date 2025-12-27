import { View, Text, ScrollView } from "react-native";
import { useApp } from "../../context/AppContext";

export default function DashboardScreen() {
  const { ecoScore } = useApp();

  return (
    <ScrollView className="flex-1 bg-green-50 px-4 pt-6">
      <Text className="text-2xl font-bold text-green-700 mb-4">
        🌍 Eco Dashboard
      </Text>

      <View className="bg-white p-4 rounded-xl mb-4">
        <Text className="text-gray-500">Eco Score</Text>
        <Text className="text-4xl font-bold text-green-600">
          {ecoScore}
        </Text>
      </View>

      <View className="bg-white p-4 rounded-xl mb-4">
        <Text className="font-semibold mb-2">Quick Actions</Text>
        <Text className="text-gray-600">• Scan Product</Text>
        <Text className="text-gray-600">• Log Travel</Text>
        <Text className="text-gray-600">• Waste Action</Text>
      </View>
    </ScrollView>
  );
}
