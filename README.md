🚗 Car Rental App

This project is a React Native mobile application for a car rental system.
We follow a modular folder architecture to keep the code clean, scalable, and easy to collaborate on.

📂 Project Architecture

Each screen or component has its own folder, containing:

index.tsx → logic + JSX

styles.ts → styles (StyleSheet)

types.ts → TypeScript types/interfaces (only when needed)

📁 Folder Structure
src/
│
├── components/              # Reusable UI components
│   ├── CarItem/
│   │   ├── index.tsx
│   │   ├── styles.ts
│   │   └── types.ts
│   └── ...
│
├── screens/                 # App screens
│   ├── AuthScreen/
│   │   ├── index.tsx
│   │   └── types.ts
│   ├── BookingConfirmation/
│   │   ├── index.tsx
│   │   └── styles.ts
│   ├── CarCardPage/
│   │   ├── index.tsx
│   │   ├── styles.ts
│   │   └── types.ts
│   ├── CarDetails/
│   │   ├── index.tsx
│   │   ├── styles.ts
│   │   └── types.ts
│   ├── CarList/
│   │   ├── index.tsx
│   │   ├── styles.ts
│   │   └── types.ts
│   ├── LoginSignupGuest/
│   │   ├── index.tsx
│   │   ├── styles.ts
│   │   └── types.ts
│   └── ...
│
├── navigation/              # Navigation and routes
│   └── types.ts             # RootStackParamList
│
├── mocks/                   # Mock data for testing/demo
│   ├── cars.ts
│   └── carsList.ts│
├── services/                # API calls, auth, data fetch
│
├── utils/                   # Utility functions/helpers
│
└── App.tsx                  # Main entry

📌 Guidelines

New screen → create a folder in screens/ with index.tsx, styles.ts, and types.ts if props are needed.

New component → create a folder in components/ with the same structure.

Mock data → keep all mock/fake data in mocks/.

Navigation types → always define RootStackParamList in navigation/types.ts, never inside App.tsx.

Imports:

// styles
import { styles } from "./styles";

// component or screen
import CarItem from "../components/CarItem";
