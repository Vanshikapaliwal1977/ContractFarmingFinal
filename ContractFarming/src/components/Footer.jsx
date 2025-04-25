const Footer = () => {
    return (
      <footer className="bg-white border-t text-gray-700 py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
          
          {/* About Us */}
          <div>
            <h3 className="font-semibold mb-3">ABOUT US</h3>
            <ul className="space-y-2">
              <li><a href="#">Our Mission</a></li>
              <li><a href="#">Meet the Team</a></li>
              <li><a href="#">Sustainability</a></li>
            </ul>
          </div>
  
          {/* Farmers */}
          <div>
            <h3 className="font-semibold mb-3">FARMERS</h3>
            <ul className="space-y-2">
              <li><a href="#">Join as Farmer</a></li>
              <li><a href="#">Available Contracts</a></li>
              <li><a href="#">Success Stories</a></li>
            </ul>
          </div>
  
          {/* Buyers */}
          <div>
            <h3 className="font-semibold mb-3">BUYERS</h3>
            <ul className="space-y-2">
              <li><a href="#">Join as Buyer</a></li>
              <li><a href="#">Available Produce</a></li>
              <li><a href="#">Quality Standards</a></li>
            </ul>
          </div>
  
          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-3">CONNECT</h3>
            <ul className="space-y-2">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Newsletter</a></li>
            </ul>
          </div>
        </div>
  
        {/* Bottom Footer */}
        <div className="mt-10 border-t pt-6 text-center text-gray-500 text-xs">
          <p>© 2025 Contract Farming. All rights reserved.</p>
          <div className="flex justify-center mt-2 space-x-4">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  