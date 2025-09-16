
import React, { useEffect } from 'react';
import { useGeolocation } from '../../hooks/useGeolocation';
import { useFuelCalculator } from './hooks/useFuelCalculator';
import { useBikeActions } from '../../store';
import { Speedometer } from './components/Speedometer';
import { FuelGauge } from './components/FuelGauge';
import { Odometer } from './components/Odometer';

const DashboardPage: React.FC = () => {
    const { speedKph, error } = useGeolocation();
    const { setCurrentSpeed } = useBikeActions();
    
    useFuelCalculator();

    useEffect(() => {
        if (speedKph !== null) {
            setCurrentSpeed(speedKph);
        }
    }, [speedKph, setCurrentSpeed]);

    return (
        <div className="container mx-auto max-w-4xl h-full flex flex-col items-center justify-center gap-8">
            {error && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-red-800/80 border border-red-500 text-white px-4 py-2 rounded-lg z-10">
                    Geolocation Error: {error.message}
                </div>
            )}
            
            <div className="flex justify-center w-full">
                <Speedometer />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-4 md:px-0">
                <FuelGauge />
                <Odometer />
            </div>
        </div>
    );
};

export default DashboardPage;
