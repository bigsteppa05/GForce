
import { FaGlobe, FaVideo, FaMusic } from 'react-icons/fa';

const CulturalImmersion = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Cultural Immersion</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaGlobe className="text-blue-500 text-4xl mb-4" />
          <h2 className="text-xl font-semibold mb-2">Virtual Tours</h2>
          <p>Explore new cultures with our 360-degree tours.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaVideo className="text-green-500 text-4xl mb-4" />
          <h2 className="text-xl font-semibold mb-2">Interactive Lessons</h2>
          <p>Engage with multimedia lessons and interactive content.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaMusic className="text-red-500 text-4xl mb-4" />
          <h2 className="text-xl font-semibold mb-2">Cultural Music</h2>
          <p>Listen to traditional music from around the world.</p>
        </div>
      </div>
    </div>
  );
};

export default CulturalImmersion;
