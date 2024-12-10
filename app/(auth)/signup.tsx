import { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { authClient } from "@/lib/auth-client";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    const res = await authClient.signUp.email(
      {
        email,
        password,
        name,
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
      <TextInput placeholder="Name" placeholderTextColor="gray" value={name} onChangeText={setName} />
      <TextInput placeholder="Email" placeholderTextColor="gray" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" placeholderTextColor="gray" value={password} onChangeText={setPassword} />
      <Button title="SignUp" onPress={handleSignUp} />
    </View>
  );
}
