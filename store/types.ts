
import type { Settings, RefuelRecord, TripLog } from '../types';

export interface BikeState {
  currentSpeedKph: number;
  currentFuelL: number;
  odometerKm: number;
  estimatedRangeKm: number;
  actions: {
    setCurrentSpeed: (speed: number) => void;
    setOdometer: (distance: number) => void;
    updateFuel: (fuelUsed: number) => void;
    setEstimatedRange: (range: number) => void;
  };
}

export interface SettingsState {
  settings: Settings;
  actions: {
    setSettings: (settings: Settings) => void;
  };
}

export interface HistoryState {
  refuelRecords: RefuelRecord[];
  tripLogs: TripLog[];
  actions: {
    addRefuelRecord: (record: RefuelRecord) => void;
    addTripLog: (log: TripLog) => void;
  };
}
