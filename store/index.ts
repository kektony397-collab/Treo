
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { createBikeStateSlice } from './bikeStateSlice';
import { createSettingsSlice } from './settingsSlice';
import { createHistorySlice } from './historySlice';
import type { BikeState, SettingsState, HistoryState } from './types';

// TODO: Implement createIndexedDBStorage helper to connect Zustand persist with Dexie.js
const tempStorage = createJSONStorage(() => localStorage);

type BoundState = BikeState & SettingsState & HistoryState;

export const useBoundStore = create<BoundState>()(
  persist(
    (...a) => ({
      ...createBikeStateSlice(...a),
      ...createSettingsSlice(...a),
      ...createHistorySlice(...a),
    }),
    {
      name: 'bike-dashboard-storage',
      storage: tempStorage,
      // Persist only settings and history, not the volatile bike state
      partialize: (state) => ({
        settings: state.settings,
        refuelRecords: state.refuelRecords,
        tripLogs: state.tripLogs,
      }),
    }
  )
);

// Export actions separately to avoid unnecessary re-renders in components
export const useBikeActions = () => useBoundStore((state) => state.actions);
export const useSettings = () => useBoundStore((state) => state.settings);
export const useHistory = () => useBoundStore((state) => ({
    refuelRecords: state.refuelRecords,
    tripLogs: state.tripLogs,
}));
