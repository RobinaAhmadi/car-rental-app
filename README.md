# 🚗 Car Rental App

Go to ApiClient.ts and change to your ipv4 address

This project is a **React Native mobile application** for a car rental system.  
We follow a **modular folder architecture** to keep the code clean, scalable, and easy to collaborate on.  

---

## 📂 Project Architecture

Each **screen** or **component** has its own folder, containing:  

- `CarDetailsScreen.tsx` → logic + JSX  
- `styles.ts` → styles (StyleSheet)  
- `types.ts` → TypeScript types/interfaces (only when needed)  

---

## 📁 Folder Structure
```
src/
│
├── components/ # Reusable UI components
│ └── CarItem/
│ ├── CarDetailsScreen.tsx
│ ├── styles.ts
│ └── types.ts
│
├── screens/ # App screens
│ ├── AuthScreen/
│ │ ├── CarDetailsScreen.tsx
│ │ └── types.ts
│ ├── BookingConfirmation/
│ │ ├── CarDetailsScreen.tsx
│ │ └── styles.ts
│ ├── CarCardPage/
│ │ ├── CarDetailsScreen.tsx
│ │ ├── styles.ts
│ │ └── types.ts
│ ├── CarDetails/
│ │ ├── CarDetailsScreen.tsx
│ │ ├── styles.ts
│ │ └── types.ts
│ ├── CarList/
│ │ ├── CarDetailsScreen.tsx
│ │ ├── styles.ts
│ │ └── types.ts
│ └── LoginSignupGuest/
│ ├── CarDetailsScreen.tsx
│ ├── styles.ts
│ └── types.ts
│
├── navigation/ # Navigation and routes
│ └── types.ts # RootStackParamList
│
├── mocks/ # Mock data for testing/demo
│ ├── cars.ts
│ └── carsList.ts
│
├── services/ # API calls, auth, data fetch
│
├── utils/ # Utility functions/helpers
│
└── App.tsx # Main entry
```


---

## 📌 Guidelines

### 🆕 Creating a new screen
- Create a new folder inside `screens/`
- Always split into:
  - `CarDetailsScreen.tsx` (logic + JSX)
  - `styles.ts` (StyleSheet)
  - `types.ts` (only if props are needed)

### 🧩 Creating a new component
- Create a folder inside `components/`
- Same rule: `CarDetailsScreen.tsx`, `styles.ts`, `types.ts`

### 📑 Mock data
- Keep all mock/fake data inside `mocks/`

### 🧭 Navigation
- Always define `RootStackParamList` inside `navigation/types.ts`
- Never define it inside `App.tsx`

### 📥 Imports
```ts
// styles
import { styles } from "./styles";

// component or screen
import CarItem from "../components/CarItem";
