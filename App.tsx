
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Transfer from './components/Transfer';
import Payments from './components/Payments';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-50 min-h-screen overflow-y-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/ai" element={<AIAssistant />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
