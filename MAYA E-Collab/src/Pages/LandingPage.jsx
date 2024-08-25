
import { Link } from 'react-router-dom';
import { FaUsers, FaProjectDiagram, FaGlobe, FaStar, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const LandingPage = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Hero Section */}
      <section className="flex-1 bg-blue-600 text-white flex flex-col justify-center items-center p-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to GlobalLearn</h1>
        <p className="text-xl mb-6">Connecting students and educators from around the world with collaborative learning tools.</p>
        <Link to="/get-started" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded">
          Get Started
        </Link>
      </section>

      {/* Key Features */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <FaUsers className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Global Classrooms</h3>
            <p>Engage in virtual classrooms with students and educators from around the world.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <FaProjectDiagram className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Collaborative Projects</h3>
            <p>Work on projects with peers using our advanced collaboration tools.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <FaGlobe className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cultural Immersion</h3>
            <p>Experience different cultures through interactive programs and virtual tours.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <FaStar className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Top-rated Learning</h3>
            <p>Discover highly-rated courses and resources tailored to your interests.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-100 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-6">What Our Users Say</h2>
          <div className="flex flex-wrap -mx-4">
            {/* Example Testimonial */}
            <div className="w-full md:w-1/3 px-4 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700 mb-4">"GlobalLearn has transformed my learning experience. The global connections and resources are unmatched!"</p>
                <p className="font-semibold">Alex Johnson</p>
              </div>
            </div>
            {/* Add more testimonials here */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-2xl font-bold">GlobalLearn</Link>
          </div>
          <div className="flex space-x-6">
            <Link to="/about-us" className="hover:underline">About Us</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
            <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          </div>
          <div className="flex space-x-4">
            {/* Add social media icons */}
            <a href="#" className="text-white hover:text-gray-400">
              <FaFacebookF />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
