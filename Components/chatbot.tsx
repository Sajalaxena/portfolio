"use client"

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image'


interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false); // Manages whether the chatbot is open or closed

  const botName = 'Sajal'; // Your bot's name
  const responses: { [key: string]: string } = {
    experience: 'I have extensive experience in both front-end and back-end development, including Angular, React, and Java.',
    education: 'I graduated from the National Institute of Technology Patna with a Master\'s in Computer Applications in 2023.',
    projects: 'I have worked on several Projects including a banking dashboard, a clinic interface, and a portfolio website using Next.js.',
    skills: 'My key Skills include Angular, React, TypeScript, Java, and API development with Spring Boot.',
  };

  // Ref for the chat message container
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Scroll to the bottom whenever messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Send a message
  const handleSendMessage = (text: string, fromUser: boolean = true) => {
    if (text.trim()) {
      if (fromUser) {
        const userMessage: Message = { text, sender: 'user' };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
      }

      let botReply = 'I\'m not sure how to answer that. Can you ask something else?';

      Object.keys(responses).forEach((keyword) => {
        if (text.toLowerCase().includes(keyword)) {
          botReply = responses[keyword];
        }
      });

      const botMessage: Message = { text: botReply, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setInput(''); // Reset input field
    }
  };

  const handleUserInput = () => {
    handleSendMessage(input, true);
  };

  const handleOptionClick = (option: string) => {
    handleSendMessage(option, true); // Send the predefined message as a user message
  };

  const toggleChatBot = () => {
    setIsOpen(!isOpen); // Toggles the chatbot open or closed
  };

  return (
    <div className="fixed bottom-10 right-20 z-50 ">
      {!isOpen ? (
        <div className="bg-white border border-cyan-500 p-2 rounded-full cursor-pointer shadow-lg" onClick={toggleChatBot}>
          💬 Chat with me
        </div>
      ) : (
        <div className="flex flex-col w-80 max-h-[80vh] bg-gray-100 shadow-lg rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-white p-4 border-b flex justify-between items-center">
            <div className="flex items-center space-x-2">
                   <Image src="/me.gif" alt="logo" width={59} height={29}    />            
                     <div>
                <div className="font-bold text-sm">{botName}</div>
                <div className="text-xs text-green-500">Online</div>
              </div>
            </div>
            <button onClick={toggleChatBot} className="text-gray-400 hover:text-gray-600">
              ✖
            </button>
          </div>

          {/* Chat messages */}
          <div className="p-4 flex-1 overflow-y-auto space-y-4 max-h-[50vh]">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                {/* Label above each message */}
                <span className={`text-xs mb-1 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                  {msg.sender === 'user' ? 'You' : botName}
                </span>
                <div
                  className={`max-w-xs rounded-lg p-2 ${
                    msg.sender === 'user' ? 'bg-white border border-cyan-500' : 'bg-white text-black'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {/* Dummy div to automatically scroll to */}
            <div ref={messagesEndRef} />
          </div>

          {/* Predefined options */}
          <div className="p-2 flex space-x-2 justify-center border-t ">
            {/* <button
              className="px-4 py-2 bg-white border border-y-cyan-500 rounded-lg text-sm "
              onClick={() => handleOptionClick('experience')}
            >
              Experience
            </button> */}
            <button
              className="px-4 py-2 bg-white border border-cyan-500 rounded-lg text-sm"
              onClick={() => handleOptionClick('Education')}
            >
              Education
            </button>
            <button
              className="px-4 py-2 bg-white border border-cyan-500 rounded-lg text-sm"
              onClick={() => handleOptionClick('Projects')}
            >
              Projects
            </button>
            <button
              className="px-4 py-2 bg-white border border-cyan-500  rounded-lg text-sm"
              onClick={() => handleOptionClick('Skills')}
            >
              Skills
            </button>
          </div>

          {/* Input area */}
          <div className="flex items-center p-2 border-t bg-white">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 border rounded-lg"
              placeholder="Type your message here"
            />
            <button
            className='px-2 py-2'
              onClick={handleUserInput}
            >
              <Image src="/send-message.png" alt="logo" width={21} height={7}    />   
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
