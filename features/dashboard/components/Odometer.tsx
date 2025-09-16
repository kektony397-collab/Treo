
import React from 'react';
import { useBoundStore } from '../../../store';

export const Odometer: React.FC = () => {
    const odometerKm = useBoundStore((state) => state.odometerKm);
    const formattedOdometer = Math.floor(odometerKm).toString().padStart(6, '0');

    return (
        <div className="w-full bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 p-4 rounded-lg shadow-lg shadow-cyan-900/30 text-center">
            <h3 className="font-orbitron text-lg font-bold uppercase tracking-wider text-cyan-300 mb-2">Odometer</h3>
            <div className="flex justify-center items-center space-x-1 bg-black p-3 rounded-md">
                {formattedOdometer.split('').map((digit, index) => (
                    <span key={index} className="font-orbitron text-4xl font-black text-white bg-gray-800 px-3 py-1 rounded">
                        {digit}
                    </span>
                ))}
                <span className="font-orbitron text-2xl font-bold text-gray-400 pl-2">km</span>
            </div>
        </div>
    );
};
