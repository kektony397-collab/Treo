
import { useState, useEffect } from 'react';

interface GeolocationState {
  position: GeolocationPosition | null;
  speedKph: number | null;
  error: GeolocationPositionError | null;
}

const metersPerSecondToKph = (mps: number | null) => {
    if (mps === null) return 0;
    return mps * 3.6;
}

export const useGeolocation = () => {
  const [state, setState] = useState<GeolocationState>({
    position: null,
    speedKph: 0,
    error: null,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported by your browser.");
      return;
    }

    const watcher = navigator.geolocation.watchPosition(
      (position) => {
        setState({
          position,
          speedKph: metersPerSecondToKph(position.coords.speed),
          error: null,
        });
      },
      (error) => {
        setState((prevState) => ({ ...prevState, error }));
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );

    return () => {
      navigator.geolocation.clearWatch(watcher);
    };
  }, []);

  return state;
};
