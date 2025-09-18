import { View, Text } from "react-native";

type Props = { message: string };

export default function MyComponent({ message }: Props) {
  return (
    <View style={{ padding: 20, backgroundColor: "#eee", borderRadius: 10 }}>
      <Text style={{ fontSize: 18 }}>Hello World!</Text>
      <Text>{message}</Text>
    </View>
  );
}
