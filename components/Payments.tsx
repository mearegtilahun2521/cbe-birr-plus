
import React from 'react';
import { BILL_PROVIDERS } from '../constants';

const Payments: React.FC = () => {
  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto pb-24 md:pb-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Utility Payments</h2>
        <p className="text-gray-500">Pay your bills easily without leaving home.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {BILL_PROVIDERS.map((provider) => (
          <div key={provider.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-all cursor-pointer group">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gray-50 border p-1 group-hover:border-cbe-purple transition-all">
                <img src={provider.logo} alt={provider.name} className="w-full h-full object-contain" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">{provider.name}</h4>
                <p className="text-xs text-gray-400 uppercase tracking-widest">{provider.category}</p>
              </div>
            </div>
            <button className="bg-gray-50 text-cbe-purple p-3 rounded-xl group-hover:bg-cbe-purple group-hover:text-white transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-cbe-gold/10 border border-cbe-gold p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-gray-800">Telebirr Integration</h4>
          <p className="text-sm text-gray-600">Connect your Telebirr wallet for seamless multi-wallet transfers.</p>
        </div>
        <button className="bg-cbe-gold text-cbe-purple px-6 py-2 rounded-xl font-bold shadow-sm">
          Link Now
        </button>
      </div>
    </div>
  );
};

export default Payments;
