
import { FaVideo, FaShareAlt, FaFileAlt, FaComments } from 'react-icons/fa';
import { useState } from 'react';

const GlobalClassroom = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  return (
    <div className="flex h-screen">
      {/* Video Conference */}
      <div className="flex-1 p-4 bg-gray-200">
        <div className="bg-gray-800 text-white p-4 rounded-lg mb-4">
          <h2 className="text-2xl font-bold mb-2">Global Classroom</h2>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-500 text-white p-2 rounded">
              <FaVideo />
            </button>
            <button className="bg-blue-500 text-white p-2 rounded">
              <FaShareAlt />
            </button>
            <button className="bg-blue-500 text-white p-2 rounded">
              <FaFileAlt />
            </button>
          </div>
        </div>

        {/* Chat */}
        <div className="flex-1 bg-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4">Chat</h3>
          <div className="overflow-auto mb-4 h-40 bg-gray-600 p-2 rounded-lg">
            {messages.map((msg, index) => (
              <div key={index} className="text-white mb-2">{msg}</div>
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1 p-2 rounded-l-lg"
              placeholder="Type a message"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white p-2 rounded-r-lg"
            >
              <FaComments />
            </button>
          </div>
        </div>
      </div>

      {/* Resource Panel */}
      <div className="w-64 bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-4">Resources</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="mb-2">Share and access documents during the class.</p>
          {/* Resource content */}
        </div>
      </div>
    </div>
  );
};

export default GlobalClassroom;
