
export interface Settings {
  id?: number;
  bikeModel: string;
  tankCapacityL: number;
  fuelEconomyKmPerL: number;
}

export interface RefuelRecord {
  id?: number;
  timestamp: number;
  litersAdded: number;
  cost?: number;
  odometerKm: number;
}

export interface TripLog {
  id?: number;
  startTimestamp: number;
  endTimestamp: number;
  distanceKm: number;
  maxSpeedKph: number;
}
