import React, { useState, useRef, useEffect } from 'react';
import { Bot } from 'lucide-react';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { generateMockingResponse } from './utils/mockingUtils';
import { MessageTypes } from './types';
import { generateStory } from './components/Ai';
function App() {
  const [response,setresponse] = useState('')
  const [messages, setMessages] = useState([
    {
      id: '1',
      content: "Go ahead, tell me something. I promise to be totally supportive... Not! 😈",
      sender: MessageTypes.BOT,
      timestamp: new Date(),
    },
  ]);
  
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content) => {
 
    generateStory(content)
    .then(story => {
      setresponse(story)
      const botMessage = {
        id: (Date.now() + 1).toString(),
        content: story,
        sender: MessageTypes.BOT,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    })
    .catch(error => {
      setresponse(generateMockingResponse(content))
    });
    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      content,
      sender: MessageTypes.USER,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);

    // Simulate typing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // // Add bot response
    // const botMessage = {
    //   id: (Date.now() + 1).toString(),
    //   content: response,
    //   sender: MessageTypes.BOT,
    //   timestamp: new Date(),
    // };
    // setMessages(prev => [...prev, botMessage]);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center gap-2 p-4 bg-white border-b border-gray-100">
        <div className="bg-purple-100 p-2 rounded-full">
          <Bot className="w-6 h-6 text-purple-600" />
        </div>
        <div>
          <h1 className="text-lg font-semibold text-gray-900">MockBot</h1>
         
        </div>
      </header>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(message => (
          <ChatMessage key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <ChatInput onSend={handleSendMessage} />
    </div>
  );
}

export default App;