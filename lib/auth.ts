import { betterAuth } from "better-auth";
import { expo } from "@better-auth/expo";
import { db } from "@/db";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [expo()],
});
