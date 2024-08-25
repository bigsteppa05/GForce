
import {  FaComments, FaShareSquare, FaFileUpload } from 'react-icons/fa';

const CollaborativeProjects = () => {
  return (
    <div className="flex h-screen p-4">
      {/* Kanban Board */}
      <div className="flex-1 bg-gray-200 p-4">
        <h2 className="text-2xl font-bold mb-4">Kanban Board</h2>
        {/* Kanban board content */}
      </div>

      {/* Document Collaboration */}
      <div className="w-64 bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-4">Document Collaboration</h2>
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
          <button className="bg-blue-500 text-white p-2 rounded mb-2 w-full flex items-center">
            <FaFileUpload className="mr-2" />
            Upload Document
          </button>
          <button className="bg-blue-500 text-white p-2 rounded w-full flex items-center">
            <FaShareSquare className="mr-2" />
            Share Document
          </button>
        </div>
        <h3 className="text-lg font-semibold mb-2">Chat</h3>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <FaComments className="text-blue-500 text-3xl mb-2" />
          <p>Communicate with your team in real-time.</p>
        </div>
      </div>
    </div>
  );
};

export default CollaborativeProjects;
