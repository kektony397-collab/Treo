
import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';

const DashboardPage = lazy(() => import('../features/dashboard/DashboardPage'));
const RefuelHistoryPage = lazy(() => import('../features/refuelHistory/RefuelHistoryPage'));
const SettingsPage = lazy(() => import('../features/settings/SettingsPage'));


const LoadingFallback = () => (
    <div className="flex justify-center items-center h-screen w-screen bg-black">
        <div className="font-orbitron text-2xl text-cyan-400 animate-pulse">LOADING INTERFACE...</div>
    </div>
)

export const AppRouter: React.FC = () => {
  return (
    <HashRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<DashboardPage />} />
            <Route path="history" element={<RefuelHistoryPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
};
