import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-from-blue-50 bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">Dreamzz Travels</h2>
            <p className="text-black mb-4 leading-relaxed">
              Creating unforgettable travel experiences across India's most beautiful destinations. 
              Your journey begins with us.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className=" hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className=" hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#" className=" hover:text-white transition-colors">Tour Packages</a></li>
              <li><a href="#" className=" hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#" className=" hover:text-white transition-colors">Testimonials</a></li>
            </ul>
          </div>
          
          {/* Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              <li><a href="#" className=" hover:text-white transition-colors">Chikmagalur</a></li>
              <li><a href="#" className=" hover:text-white transition-colors">Munnar</a></li>
              <li><a href="#" className=" hover:text-white transition-colors">Goa</a></li>
              <li><a href="#" className=" hover:text-white transition-colors">Coorg</a></li>
              <li><a href="#" className=" hover:text-white transition-colors">Ooty</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className=" text-sm leading-relaxed">
                    123 Travel Street<br />
                    Bangalore, Karnataka 560001
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a href="tel:+916362040932" className=" hover:text-white transition-colors">
                  +91 6362 040 932
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@dreamzztravel.com" className=" hover:text-white transition-colors">
                  info@dreamzztravel.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <p className=" text-sm">
                  Mon - Sat: 9:00 AM - 7:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Dreamzz Travels. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;