
import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { getFinancialAdvice } from '../services/geminiService';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Selam! I'm your CBE Virtual Assistant. How can I help you with your banking needs today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const response = await getFinancialAdvice([...messages, userMessage]);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="p-4 md:p-8 max-w-3xl mx-auto h-[calc(100vh-100px)] flex flex-col">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
          <span className="w-8 h-8 bg-cbe-gold text-purple-900 rounded-full flex items-center justify-center mr-3 text-sm">AI</span>
          CBE Assistant
        </h2>
        <p className="text-gray-500">Powered by Gemini - Your financial guide</p>
      </div>

      <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-4 rounded-2xl ${
                msg.role === 'user' 
                ? 'bg-cbe-purple text-white rounded-tr-none' 
                : 'bg-gray-100 text-gray-800 rounded-tl-none'
              }`}>
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 p-4 rounded-2xl rounded-tl-none flex space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <form onSubmit={handleSend} className="p-4 border-t bg-gray-50 flex gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about saving tips, account details..."
            className="flex-1 p-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-cbe-purple outline-none"
          />
          <button 
            type="submit"
            disabled={isLoading}
            className="bg-cbe-purple text-white p-3 rounded-xl font-bold hover:bg-purple-900 transition-all disabled:opacity-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </form>
      </div>
      
      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        {['Saving tips', 'Currency rates', 'How to pay EEU?'].map((tip) => (
          <button 
            key={tip}
            onClick={() => setInput(tip)}
            className="text-xs bg-white border border-gray-200 px-3 py-1 rounded-full text-gray-500 hover:border-cbe-purple hover:text-cbe-purple transition-all"
          >
            {tip}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AIAssistant;
