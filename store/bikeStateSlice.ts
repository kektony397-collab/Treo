
import type { StateCreator } from 'zustand';
import type { BikeState } from './types';

export const createBikeStateSlice: StateCreator<BikeState> = (set) => ({
  currentSpeedKph: 0,
  currentFuelL: 10,
  odometerKm: 12345,
  estimatedRangeKm: 0,
  actions: {
    setCurrentSpeed: (speed) => set({ currentSpeedKph: speed }),
    setOdometer: (distance) => set({ odometerKm: distance }),
    updateFuel: (fuelUsed) => set((state) => ({ currentFuelL: state.currentFuelL - fuelUsed })),
    setEstimatedRange: (range) => set({ estimatedRangeKm: range }),
  },
});
