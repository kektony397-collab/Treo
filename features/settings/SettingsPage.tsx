
import React, { useState } from 'react';
import { useSettings, useBikeActions } from '../../store';

// FIX: Added 'name' prop to InputField's props type and passed it to the underlying input element. This allows the handleChange function to identify which field is being updated.
const InputField: React.FC<{ label: string; name: string; value: string | number; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; type?: string; step?: string }> = 
({ label, name, value, onChange, type = 'text', step }) => (
    <div>
        <label className="block mb-2 font-orbitron text-sm font-medium text-cyan-300">{label}</label>
        <input 
            type={type}
            step={step}
            name={name}
            value={value}
            onChange={onChange}
            className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5" 
        />
    </div>
);


const SettingsPage: React.FC = () => {
    const currentSettings = useSettings();
    const { setSettings } = useBikeActions();
    const [localSettings, setLocalSettings] = useState(currentSettings);
    const [saved, setSaved] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target;
        setLocalSettings(prev => ({
            ...prev,
            [name]: type === 'number' ? parseFloat(value) : value
        }));
    };

    const handleSave = () => {
        setSettings(localSettings);
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    return (
        <div className="container mx-auto p-4 text-white max-w-lg">
            <h1 className="font-orbitron text-3xl font-bold text-cyan-400 mb-6 text-center">Settings</h1>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 p-6 rounded-lg shadow-lg space-y-6">
                <InputField 
                    label="Bike Model"
                    name="bikeModel"
                    value={localSettings.bikeModel}
                    onChange={handleChange}
                />
                <InputField 
                    label="Tank Capacity (Liters)"
                    name="tankCapacityL"
                    type="number"
                    step="0.1"
                    value={localSettings.tankCapacityL}
                    onChange={handleChange}
                />
                <InputField 
                    label="Fuel Economy (km/L)"
                    name="fuelEconomyKmPerL"
                    type="number"
                    step="0.1"
                    value={localSettings.fuelEconomyKmPerL}
                    onChange={handleChange}
                />

                <button 
                    onClick={handleSave}
                    className="w-full font-orbitron uppercase tracking-widest px-6 py-3 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 bg-cyan-600 hover:bg-cyan-500 text-black shadow-lg shadow-cyan-500/50"
                >
                    {saved ? 'Saved!' : 'Save Settings'}
                </button>
            </div>
        </div>
    );
};

export default SettingsPage;
