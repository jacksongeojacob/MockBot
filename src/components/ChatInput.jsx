import React, { useState } from 'react';
import { SendHorizontal } from 'lucide-react';
import { generateStory } from './Ai';
export const ChatInput = ({ onSend }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    
   


    e.preventDefault();
    if (input.trim()) {
      onSend(input.trim());
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-4 bg-white border-t border-gray-100">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something to be mocked..."
        className="flex-1 px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-colors"
      />
      <button
        type="submit"
        className="p-2 rounded-full bg-purple-500 text-white hover:bg-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-100"
      >
        <SendHorizontal className="w-5 h-5" />
      </button>
    </form>
  );
};