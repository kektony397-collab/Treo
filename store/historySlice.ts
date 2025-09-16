
import type { StateCreator } from 'zustand';
import type { HistoryState } from './types';

export const createHistorySlice: StateCreator<HistoryState> = (set) => ({
  refuelRecords: [],
  tripLogs: [],
  actions: {
    addRefuelRecord: (record) => set((state) => ({ refuelRecords: [...state.refuelRecords, record] })),
    addTripLog: (log) => set((state) => ({ tripLogs: [...state.tripLogs, log] })),
  },
});
