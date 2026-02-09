
import React, { useState } from 'react';

const Transfer: React.FC = () => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [remarks, setRemarks] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSuccess(true);
      setRecipient('');
      setAmount('');
      setRemarks('');
    }, 1000);
  };

  return (
    <div className="p-4 md:p-8 max-w-2xl mx-auto pb-24 md:pb-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Transfer Funds</h2>
        <p className="text-gray-500">Send money instantly to any CBE account or mobile wallet.</p>
      </div>

      {isSuccess && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl flex items-center justify-between">
          <span>Transfer completed successfully!</span>
          <button onClick={() => setIsSuccess(false)} className="font-bold">&times;</button>
        </div>
      )}

      <form onSubmit={handleTransfer} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-tight">Recipient Account / Phone</label>
          <input 
            type="text" 
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="e.g., 1000123456789 or 0911..."
            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cbe-purple focus:border-transparent outline-none transition-all"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-tight">Amount (ETB)</label>
          <div className="relative">
            <input 
              type="number" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cbe-purple focus:border-transparent outline-none transition-all pl-12"
              required
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">ETB</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-tight">Reason / Remarks (Optional)</label>
          <textarea 
            rows={3}
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            placeholder="What is this for?"
            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cbe-purple focus:border-transparent outline-none transition-all"
          />
        </div>

        <div className="pt-4">
          <button 
            type="submit" 
            className="w-full bg-cbe-purple text-white py-4 rounded-xl font-bold text-lg hover:bg-purple-900 transition-all shadow-lg active:scale-[0.98]"
          >
            Confirm Transfer
          </button>
        </div>
      </form>

      <div className="mt-8">
        <h3 className="font-bold text-gray-700 mb-4">Saved Beneficiaries</h3>
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {[1, 2, 3, 4].map((i) => (
            <button key={i} className="flex-shrink-0 flex flex-col items-center space-y-2 p-4 bg-white rounded-2xl border border-gray-100 hover:border-cbe-gold transition-all">
              <img src={`https://picsum.photos/seed/person${i}/80/80`} className="w-12 h-12 rounded-full" alt="Contact" />
              <span className="text-xs font-medium text-gray-600">User {i}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transfer;
