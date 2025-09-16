
import { useEffect, useRef } from 'react';
import { useBoundStore, useBikeActions, useSettings } from '../../../store';

export const useFuelCalculator = () => {
    const odometerKm = useBoundStore((state) => state.odometerKm);
    const currentFuelL = useBoundStore((state) => state.currentFuelL);
    const { fuelEconomyKmPerL } = useSettings();
    const { updateFuel, setEstimatedRange } = useBikeActions();
    
    const lastOdometerRef = useRef(odometerKm);

    useEffect(() => {
        const distanceTraveled = odometerKm - lastOdometerRef.current;

        if (distanceTraveled > 0) {
            // TODO: Implement a Kalman filter here for smoothing distance and fuel consumption calculations.
            const fuelUsed = distanceTraveled / fuelEconomyKmPerL;
            updateFuel(fuelUsed);
        }

        lastOdometerRef.current = odometerKm;
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [odometerKm, fuelEconomyKmPerL]);


    useEffect(() => {
        const range = currentFuelL * fuelEconomyKmPerL;
        setEstimatedRange(range);
    }, [currentFuelL, fuelEconomyKmPerL, setEstimatedRange]);
};
