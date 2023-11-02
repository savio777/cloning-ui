import { SafeAreaView } from "react-native";
import Routes from "./src/routes/index.routes";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Routes />
      <StatusBar backgroundColor="#f5f5f5" style="dark" />
    </SafeAreaView>
  );
}
