
import { FaChalkboardTeacher, FaUsers, FaGlobe, FaRegSmile } from 'react-icons/fa';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-blue-600 text-white p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to GlobalLearn</h1>
        <p className="text-xl mb-6">Connect with educators and students worldwide.</p>
        <button className="bg-yellow-500 text-black py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-400">Get Started</button>
      </section>

      {/* Key Features */}
      <section className="p-8">
        <h2 className="text-3xl font-bold mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaChalkboardTeacher className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Global Classrooms</h3>
            <p>Join virtual classes with students from around the globe.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaUsers className="text-green-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Collaborative Projects</h3>
            <p>Work together on projects and share ideas.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaGlobe className="text-red-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cultural Immersion</h3>
            <p>Experience different cultures through interactive lessons.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaRegSmile className="text-purple-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Language Exchange</h3>
            <p>Connect with native speakers and practice new languages.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-200 p-8">
        <h2 className="text-3xl font-bold mb-6">What Our Users Say</h2>
        {/* Testimonials content */}
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 text-center">
        <p>&copy; 2024 GlobalLearn. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-blue-400 hover:underline">About Us</a>
          <a href="#" className="text-blue-400 hover:underline">Contact</a>
          <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
