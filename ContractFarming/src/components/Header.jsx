const Header = () => {
    return (
      <header className="bg-green-700 text-white py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          
          {/* Logo */}
          <div className="text-2xl font-semibold">
            Contract Farming
          </div>
  
          {/* Search bar */}
          <div className="flex-1 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search contracts, crops, locations..."
              className="w-full px-4 py-2 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none"
            />
          </div>
  
          {/* Login Buttons */}
          <div className="flex gap-3 justify-center sm:justify-end">
            <button className="px-4 py-2 border border-white text-white rounded-md hover:bg-white hover:text-green-700 transition">
              Farmer Login
            </button>
            <button className="px-4 py-2 bg-yellow-400 text-green-900 font-semibold rounded-md hover:bg-yellow-300 transition">
              Buyer Login
            </button>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;
  