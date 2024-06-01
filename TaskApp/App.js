import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from "./components/header"
import SearchBar from "./components/searchBar"

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f0e8',
    padding: 20,
  },
});
