import { View, Text, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";

export default function ModalScreen() {
  const router = useRouter();

  const openCamera = async () => {
    await ImagePicker.launchCameraAsync({
      quality: 0.7,
    });
  };

  return (
    <View className="flex-1 bg-green-50 justify-center items-center px-6">
      <Text className="text-xl font-bold mb-6">
        📷 Eco Scan
      </Text>

      <TouchableOpacity
        onPress={openCamera}
        className="bg-green-600 px-6 py-3 rounded-xl mb-4"
      >
        <Text className="text-white font-semibold">
          Open Camera
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.back()}>
        <Text className="text-green-700 font-semibold">
          Close
        </Text>
      </TouchableOpacity>
    </View>
  );
}
