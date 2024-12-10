import { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { authClient } from "@/lib/auth-client";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onError: (ctx) => {
          alert(ctx.error.message);
        },
        onSuccess: () => {
          alert("success!");
        },
      }
    );
    console.log(res);
  };

  return (
    <View>
      <TextInput placeholder="Email" placeholderTextColor="gray" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" placeholderTextColor="gray" value={password} onChangeText={setPassword} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
