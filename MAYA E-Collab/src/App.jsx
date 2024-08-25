
const App = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl">GlobalLearn</h1>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-gray-800 text-white p-6">
        <p>© 2024 GlobalLearn. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="text-gray-400 hover:text-white mr-4">About Us</a>
          <a href="#" className="text-gray-400 hover:text-white mr-4">Contact</a>
          <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
