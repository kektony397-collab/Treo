
import React from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../../lib/db';

const RefuelHistoryPage: React.FC = () => {
  const history = useLiveQuery(() => db.refuelRecords.orderBy('timestamp').reverse().toArray());

  return (
    <div className="container mx-auto p-4 text-white">
      <h1 className="font-orbitron text-3xl font-bold text-cyan-400 mb-6 text-center">Refuel History</h1>
      <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 p-4 rounded-lg shadow-lg">
        {(!history || history.length === 0) && <p className="text-center text-gray-400">No refuel records yet.</p>}
        <ul className="space-y-4">
          {history?.map(record => (
            <li key={record.id} className="bg-gray-800 p-4 rounded-md flex justify-between items-center">
              <div>
                <p className="font-bold text-lg">{new Date(record.timestamp).toLocaleString()}</p>
                <p className="text-gray-400">Odometer: {record.odometerKm} km</p>
              </div>
              <div className="text-right">
                <p className="font-orbitron text-xl text-cyan-400">+{record.litersAdded.toFixed(2)} L</p>
                {record.cost && <p className="text-gray-400">${record.cost.toFixed(2)}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RefuelHistoryPage;
