import React from 'react';
import { Bot, User } from 'lucide-react';
import { MessageTypes } from '../types';

export const ChatMessage = ({ message }) => {
  const isBot = message.sender === MessageTypes.BOT;
  
  return (
    <div className={`flex items-start gap-4 ${isBot ? 'flex-row' : 'flex-row-reverse'}`}>
      <div className={`flex-shrink-0 rounded-full p-2 ${isBot ? 'bg-purple-100' : 'bg-blue-100'}`}>
        {isBot ? <Bot className="w-6 h-6 text-purple-600" /> : <User className="w-6 h-6 text-blue-600" />}
      </div>
      <div className={`flex flex-col max-w-[80%] ${isBot ? 'items-start' : 'items-end'}`}>
        <div className={`rounded-2xl px-4 py-2 ${
          isBot ? 'bg-purple-50 text-purple-900' : 'bg-blue-50 text-blue-900'
        }`}>
          <p className="text-sm md:text-base">{message.content}</p>
        </div>
        <span className="text-xs text-gray-400 mt-1">
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
};