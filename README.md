# Expo Better Auth Example

Example/Test authentication flow in a React Native, Expo Application using Better Auth, NeonDB PostgreSQL and Drizzle ORM.

# Run Locally

### Pre-requisites

- Node.js
- Expo CLI
- Android/iOS Emulator (A Physical Device works as well)

Considering the dependencies being used in this Expo project, you should be able to run the app using Expo Go.

### Installation

1. Clone this Repository, then change directory to the Expo-Better-Auth-Example directory.

```
git clone https://github.com/ChitrakshTarun/Expo-Better-Auth-Example.git
cd Expo-Better-Auth-Example
```

2. Install Dependencies

```
npm install
```

3. Create a `.env` file using the `.env.sample` project. Create a database project in [NeonDB](https://neon.tech/) and create a [Better Auth Secret](https://www.better-auth.com/docs/installation#set-environment-variables) to populate the `.env` items.

4. Start the application

```
npx expo start -c
```

Either scan the QR code using Expo Go on your device, or use an Android/IOS emulator with Expo Go.
