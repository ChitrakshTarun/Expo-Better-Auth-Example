import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SignInPage = () => {
  return (
    <View style={styles.container}>
      <Text>Sign In Page</Text>
    </View>
  );
};

export default SignInPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
