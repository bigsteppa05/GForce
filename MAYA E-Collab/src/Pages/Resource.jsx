
import { FaSearch, FaFileDownload, FaEye } from 'react-icons/fa';

const ResourceRepository = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="mb-6 flex items-center bg-white p-4 rounded-lg shadow-md">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search resources..."
          className="flex-1 p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaFileDownload className="text-blue-500 text-3xl mb-4" />
          <h2 className="text-xl font-semibold mb-2">Downloadable Resources</h2>
          <p>Access and download essential learning materials.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaEye className="text-green-500 text-3xl mb-4" />
          <h2 className="text-xl font-semibold mb-2">View Resources</h2>
          <p>Browse through available resources and view details.</p>
        </div>
      </div>
    </div>
  );
};

export default ResourceRepository;
