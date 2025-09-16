
import React from 'react';
import { useBoundStore, useSettings } from '../../../store';

const FuelIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
    </svg>
);

export const FuelGauge: React.FC = () => {
    const currentFuelL = useBoundStore((state) => state.currentFuelL);
    const estimatedRangeKm = useBoundStore((state) => state.estimatedRangeKm);
    const { tankCapacityL } = useSettings();

    const fuelPercentage = (currentFuelL / tankCapacityL) * 100;
    const barColor = fuelPercentage > 20 ? 'bg-cyan-500' : 'bg-red-500';

    return (
        <div className="w-full bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 p-4 rounded-lg shadow-lg shadow-cyan-900/30">
            <div className="flex justify-between items-center mb-2 font-orbitron text-cyan-300">
                <h3 className="text-lg font-bold uppercase tracking-wider"><FuelIcon />Fuel Level</h3>
                <span className="text-lg">{currentFuelL.toFixed(1)} / {tankCapacityL} L</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden border-2 border-gray-600">
                <div 
                    className={`h-full rounded-full transition-all duration-500 ease-out ${barColor}`} 
                    style={{ width: `${fuelPercentage}%` }}
                ></div>
            </div>
             <div className="text-center mt-3 font-orbitron text-gray-300">
                <span className="text-xl font-bold">{Math.round(estimatedRangeKm)}</span>
                <span className="text-sm ml-1">km estimated range</span>
            </div>
        </div>
    );
};
