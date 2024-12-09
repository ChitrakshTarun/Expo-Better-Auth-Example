import { createAuthClient } from "better-auth/react";
import { expoClient } from "@better-auth/expo/client";

const authClient = createAuthClient({
  baseURL: "http://localhost:8081" /* base url of your Better Auth backend. */,
  plugins: [
    expoClient({
      scheme: "myapp",
      storagePrefix: "myapp",
    }),
  ],
});
