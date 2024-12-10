import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const IndexPage = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>Index Page</Text>
      <Button title="Sign In" onPress={() => router.push("/(auth)/signin")} />
      <Button title="Sign Up" onPress={() => router.push("/(auth)/signup")} />
    </View>
  );
};

export default IndexPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
