import create from "zustand";
import { devtools } from "zustand/middleware";

interface BearStore {
  bears: number;
  increasePopulation: () => void;
  reducePopulation: () => void;
  removeAllBears: () => void;
}

export const useBearStore = create<BearStore>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  reducePopulation: () => set((state) => ({ bears: state.bears - 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
