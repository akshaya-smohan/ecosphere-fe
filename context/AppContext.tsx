import { createContext, useContext, useState } from "react";

type AppContextType = {
  ecoScore: number;
  addScore: (value: number) => void;
};

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [ecoScore, setEcoScore] = useState(120);

  const addScore = (value: number) => {
    setEcoScore((prev) => prev + value);
  };

  return (
    <AppContext.Provider value={{ ecoScore, addScore }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used inside AppProvider");
  }
  return context;
}
