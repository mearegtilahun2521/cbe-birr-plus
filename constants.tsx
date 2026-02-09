
import React from 'react';
import { Transaction, BillProvider, User } from './types';

export const MOCK_USER: User = {
  id: 'u1',
  name: 'Abebe Bikila',
  accountNumber: '1000123456789',
  balance: 125430.50,
  currency: 'ETB',
  lastLogin: new Date().toLocaleDateString(),
  profilePic: 'https://picsum.photos/seed/abebe/150/150'
};

export const MOCK_TRANSACTIONS: Transaction[] = [
  { id: 't1', type: 'debit', amount: 450.00, description: 'Lunch at Kuriftu', date: '2023-11-20', category: 'Food' },
  { id: 't2', type: 'credit', amount: 50000.00, description: 'Monthly Salary', date: '2023-11-25', category: 'Salary' },
  { id: 't3', type: 'debit', amount: 1200.00, description: 'Ethio Telecom Mobile Data', date: '2023-11-26', category: 'Bills' },
  { id: 't4', type: 'debit', amount: 800.00, description: 'Electricity Bill Payment', date: '2023-11-27', category: 'Utilities' },
  { id: 't5', type: 'debit', amount: 2500.00, description: 'Transfer to Almaz Tolosa', date: '2023-11-28', category: 'Transfer' },
  { id: 't6', type: 'credit', amount: 150.00, description: 'Interest Credit', date: '2023-11-29', category: 'Salary' },
];

export const BILL_PROVIDERS: BillProvider[] = [
  { id: 'p1', name: 'Ethio Telecom', logo: 'https://picsum.photos/seed/ethiotel/100/100', category: 'Telecom' },
  { id: 'p2', name: 'Ethiopian Electric Utility', logo: 'https://picsum.photos/seed/eeu/100/100', category: 'Utility' },
  { id: 'p3', name: 'Addis Ababa Water', logo: 'https://picsum.photos/seed/water/100/100', category: 'Utility' },
  { id: 'p4', name: 'DSTV Ethiopia', logo: 'https://picsum.photos/seed/dstv/100/100', category: 'Entertainment' },
];

export const ICONS = {
  Dashboard: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  ),
  Transfer: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  ),
  Payments: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  ),
  AI: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};
