
import React from 'react';
import { useBoundStore } from '../../../store';

const Gauge: React.FC<{ value: number; maxValue: number; label: string; unit: string }> = ({ value, maxValue, label, unit }) => {
    const percentage = Math.min(Math.max(value / maxValue, 0), 1);
    const circumference = 2 * Math.PI * 90; // 90 is radius
    const strokeDashoffset = circumference - percentage * circumference;

    return (
        <div className="relative flex flex-col items-center justify-center bg-gray-900/50 backdrop-blur-sm rounded-full w-64 h-64 border-4 border-cyan-500/30 shadow-2xl shadow-cyan-900/50">
            <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="90" strokeWidth="10" stroke="#1f2937" fill="none" />
                <circle
                    cx="100"
                    cy="100"
                    r="90"
                    strokeWidth="10"
                    stroke="url(#speedGradient)"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    style={{ transition: 'stroke-dashoffset 0.3s ease' }}
                />
                <defs>
                    <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#22d3ee" />
                        <stop offset="100%" stopColor="#0891b2" />
                    </linearGradient>
                </defs>
            </svg>
            <div className="text-center">
                <span className="font-orbitron text-7xl font-bold text-white tracking-tighter">{Math.round(value)}</span>
                <span className="font-orbitron text-xl text-cyan-400 ml-1">{unit}</span>
                <div className="font-sans text-lg text-gray-400 uppercase tracking-widest">{label}</div>
            </div>
        </div>
    );
};

export const Speedometer: React.FC = () => {
    const currentSpeedKph = useBoundStore((state) => state.currentSpeedKph);

    return (
        <Gauge value={currentSpeedKph} maxValue={250} label="Speed" unit="km/h" />
    );
};
