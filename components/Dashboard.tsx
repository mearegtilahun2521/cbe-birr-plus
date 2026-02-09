
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MOCK_USER, MOCK_TRANSACTIONS } from '../constants';

const Dashboard: React.FC = () => {
  // Simple chart data from transactions
  const chartData = MOCK_TRANSACTIONS.slice(0, 5).map(t => ({
    name: t.date,
    amount: t.type === 'credit' ? t.amount : -t.amount
  }));

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto pb-24 md:pb-8">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Selam, {MOCK_USER.name}!</h2>
          <p className="text-gray-500">Welcome back to your mobile banking.</p>
        </div>
        <div className="flex items-center space-x-4 bg-white p-2 rounded-full shadow-sm border">
          <img src={MOCK_USER.profilePic} alt="Profile" className="w-10 h-10 rounded-full object-cover" />
          <div className="pr-4">
            <p className="text-xs font-semibold text-gray-400">ACCOUNT</p>
            <p className="text-sm font-medium text-gray-800">{MOCK_USER.accountNumber}</p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Balance Card */}
        <div className="md:col-span-2 relative overflow-hidden bg-gradient-to-br from-cbe-purple to-purple-900 rounded-2xl p-8 text-white shadow-xl">
          <div className="relative z-10">
            <p className="text-purple-200 text-sm font-medium uppercase tracking-widest mb-2">Total Balance</p>
            <h3 className="text-4xl md:text-5xl font-bold flex items-baseline">
              {MOCK_USER.balance.toLocaleString()} 
              <span className="text-xl ml-2 text-cbe-gold font-normal">ETB</span>
            </h3>
            <div className="mt-8 flex gap-4">
              <button className="bg-cbe-gold text-purple-900 px-6 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-all">
                Send Money
              </button>
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-2 rounded-lg font-bold text-sm hover:bg-white/20 transition-all">
                Add Cash
              </button>
            </div>
          </div>
          {/* Decorative Circle */}
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-cbe-gold opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute -left-10 -top-10 w-48 h-48 bg-white opacity-5 rounded-full blur-2xl"></div>
        </div>

        {/* Quick Actions Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h4 className="font-bold text-gray-700 mb-4">Quick Stats</h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-green-50 rounded-xl">
              <span className="text-sm text-green-700 font-medium">Monthly Income</span>
              <span className="font-bold text-green-700">+50,000</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-red-50 rounded-xl">
              <span className="text-sm text-red-700 font-medium">Monthly Spending</span>
              <span className="font-bold text-red-700">-12,450</span>
            </div>
            <div className="pt-4 border-t">
              <p className="text-xs text-gray-400 mb-1">Savings Progress (65%)</p>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-cbe-gold h-2 rounded-full w-[65%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Spending Analysis */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h4 className="font-bold text-gray-700 mb-6">Cash Flow Overview</h4>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4a148c" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#4a148c" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" hide />
                <Tooltip />
                <Area type="monotone" dataKey="amount" stroke="#4a148c" strokeWidth={3} fillOpacity={1} fill="url(#colorAmt)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h4 className="font-bold text-gray-700">Recent Transactions</h4>
            <button className="text-cbe-purple text-sm font-semibold hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {MOCK_TRANSACTIONS.slice(0, 4).map((tx) => (
              <div key={tx.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer group">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    tx.type === 'credit' ? 'bg-green-100 text-green-600' : 'bg-purple-100 text-purple-600'
                  }`}>
                    {tx.type === 'credit' ? '↓' : '↑'}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm group-hover:text-cbe-purple transition-colors">{tx.description}</p>
                    <p className="text-xs text-gray-400">{tx.date} • {tx.category}</p>
                  </div>
                </div>
                <p className={`font-bold text-sm ${tx.type === 'credit' ? 'text-green-600' : 'text-gray-800'}`}>
                  {tx.type === 'credit' ? '+' : '-'}{tx.amount.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
