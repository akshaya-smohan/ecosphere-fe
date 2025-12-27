import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

export default function ScanScreen() {
  const openCamera = async () => {
    await ImagePicker.launchCameraAsync({ quality: 0.7 });
  };

  const uploadReceipt = async () => {
    await ImagePicker.launchImageLibraryAsync();
  };

  return (
    <ScrollView className="flex-1 bg-green-50 px-4 pt-6">
      {/* Title */}
      <Text className="text-xl font-bold mb-4">Scan Product</Text>

      {/* Scanner Card */}
      <View className="bg-white rounded-2xl p-4 mb-6 border border-dashed border-gray-300">
        <View className="items-center py-8">
          {/* Scan Icon */}
          <View className="mb-4">
            <Ionicons name="scan-outline" size={48} color="#9ca3af" />
          </View>

          <Text className="text-gray-600 text-center mb-6">
            Scan barcode or upload receipt to get carbon impact
          </Text>

          {/* Buttons */}
          <View className="flex-row gap-4">
            <TouchableOpacity
              onPress={openCamera}
              className="bg-green-500 px-5 py-3 rounded-xl flex-row items-center"
            >
              <Ionicons name="scan" size={18} color="white" />
              <Text className="text-white font-semibold ml-2">
                Scan Barcode
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={uploadReceipt}
              className="border border-green-500 px-5 py-3 rounded-xl flex-row items-center"
            >
              <Ionicons name="cloud-upload-outline" size={18} color="#22c55e" />
              <Text className="text-green-600 font-semibold ml-2">
                Upload Receipt
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* How it works */}
      <View className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
        <View className="flex-row items-start">
          <Ionicons
            name="information-circle-outline"
            size={20}
            color="#2563eb"
          />
          <View className="ml-3 flex-1">
            <Text className="font-semibold text-blue-700 mb-1">
              How it works
            </Text>
            <Text className="text-blue-600 text-sm">
              Scan products to see their carbon footprint, expiry dates,
              and find eco-friendly alternatives.
            </Text>
          </View>
        </View>
      </View>

      {/* Recent Scans */}
      <View>
        <Text className="text-lg font-semibold mb-3">
          Recent Scans
        </Text>

        <View className="bg-white rounded-xl p-4">
          <Text className="text-gray-500">
            No scans yet. Start scanning products 🌱
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
