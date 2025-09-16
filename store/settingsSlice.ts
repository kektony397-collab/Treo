
import type { StateCreator } from 'zustand';
import type { SettingsState } from './types';

export const createSettingsSlice: StateCreator<SettingsState> = (set) => ({
  settings: {
    bikeModel: 'Generic 1000',
    tankCapacityL: 15,
    fuelEconomyKmPerL: 20,
  },
  actions: {
    setSettings: (settings) => set({ settings }),
  },
});
