
import Dexie, { type Table } from 'dexie';
import type { Settings, RefuelRecord, TripLog } from '../types';

export class BikeDashboardDB extends Dexie {
  settings!: Table<Settings>;
  refuelRecords!: Table<RefuelRecord>;
  tripLogs!: Table<TripLog>;

  constructor() {
    super('BikeDashboardDB');
    this.version(1).stores({
      settings: '++id, bikeModel',
      refuelRecords: '++id, timestamp',
      tripLogs: '++id, startTimestamp',
    });
  }
}

export const db = new BikeDashboardDB();
