
export interface User {
  id: string;
  name: string;
  accountNumber: string;
  balance: number;
  currency: string;
  lastLogin: string;
  profilePic?: string;
}

export interface Transaction {
  id: string;
  type: 'debit' | 'credit';
  amount: number;
  description: string;
  date: string;
  category: 'Food' | 'Transfer' | 'Shopping' | 'Bills' | 'Salary' | 'Utilities';
  merchant?: string;
}

export interface BillProvider {
  id: string;
  name: string;
  logo: string;
  category: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
