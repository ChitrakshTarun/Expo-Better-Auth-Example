import { createAuthClient } from "better-auth/react";
import { expoClient } from "@better-auth/expo/client";
import * as Constants from "expo-constants";

export const authClient = createAuthClient({
  baseURL: `http://${Constants.default.expoConfig?.hostUri ?? `localhost:8081`}`,
  plugins: [
    expoClient({
      scheme: "myapp",
      storagePrefix: "myapp",
    }),
  ],
});
