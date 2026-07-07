import { Link } from 'react-router-dom';
import gmail from '../../media/gmail.png';
import youtube from '../../media/youtube.png';
import tiktok from '../../media/tiktok.png';
import instagram from '../../media/instagram.png';
import facebook from '../../media/facebook.png';
import esewa from '../../media/esewa.png';
import khalti from '../../media/khalti.png';
import email from '../../media/email.png';

const Footer = () => {
  return (
    <footer className="bg-[#0f131b] text-gray-400 font-sans border-t border-gray-800">
      
      {/* --- Top Section: Newsletter & Links --- */}
      <div className="max-w-350 px-6 py-12 flex flex-col lg:flex-row justify-between gap-12 mx-5">
        
        {/* Left: Newsletter */}
        <div className="w-full lg:w-1/3 space-y-5">
          <div className="flex items-center gap-3 mb-2">
            <img src={gmail} alt="Email icon" className="w-8 h-8 object-contain" />
            <h2 className="text-3xl font-serif text-white tracking-wide">Join our DailyBite</h2>
          </div>
          <p className="text-sm pb-2">
            Sign up for <span className="text-white font-semibold">5% off</span>, latest news, Discounts, and competitions.
          </p>
          
          {/* Separated Input and Button */}
          <div className="flex items-center gap-3">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-transparent border border-gray-700 outline-none text-white px-5 py-2.5 w-full max-w-65 rounded-full text-sm focus:border-gray-400 transition-colors"
            />
            <button className="bg-white text-black text-sm font-medium py-2.5 px-6 rounded-full hover:bg-gray-200 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Right: Navigation Links */}
        <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Company */}
          <div>
            <h3 className="text-white font-medium mb-5">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/under-construction" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/under-construction" className="hover:text-white transition-colors">Our Mission</Link></li>
              <li><Link to="/under-construction" className="hover:text-white transition-colors">Reviews</Link></li>
              <li><Link to="/under-construction" className="hover:text-white transition-colors">Affiliate Program</Link></li>
            </ul>
          </div>

          {/* Column 2: Product */}
          <div>
            <h3 className="text-white font-medium mb-5">Product</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/products" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link to="/under-construction" className="hover:text-white transition-colors">Best Sellers</Link></li>
              <li><Link to="/under-construction" className="hover:text-white transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Column 3: Learn */}
          <div>
            <h3 className="text-white font-medium mb-5">Learn</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/under-construction" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link to="/under-construction" className="hover:text-white transition-colors">Why DailyBite.</Link></li>
              <li><Link to="/under-construction" className="hover:text-white transition-colors">Ingredients</Link></li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h3 className="text-white font-medium mb-5">Support</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/under-construction" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/under-construction" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link to="/under-construction" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/under-construction" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* --- Middle Section: Payments, Support, Socials --- */}
      <div className="border-y border-gray-800 bg-[#0f131b] px-5">
        {/* Increased height to md:h-20 to give social links more presence */}
        <div className="max-w-350 mx-auto flex flex-col md:flex-row items-center h-auto md:h-20 ">
          
          {/* Payment Methods - Left Box */}
          <div className="w-full md:w-1/3 flex items-center md:justify-start justify-center px-6 py-4 md:py-0 border-b md:border-b-0 md:border-r border-gray-800 h-full">
            <div className="flex space-x-4">
              {/* Increased px/py and image dimensions (h-8 w-16) */}
              <div className="bg-white px-3 py-1.5 rounded flex items-center justify-center">
                <img src={esewa} alt="eSewa" className="h-8 w-16 object-contain" />
              </div>
              <div className="bg-white px-3 py-1.5 rounded flex items-center justify-center">
                <img src={khalti} alt="Khalti" className="h-8 w-16 object-contain" />
              </div>
            </div>
          </div>

          {/* Customer Support Email - Middle Box */}
          <div className="w-full md:w-1/3 flex justify-center items-center py-4 md:py-0 h-full">
            <a href="mailto:support@dailybite.com" className="flex items-center space-x-2 bg-transparent border border-gray-700 hover:border-gray-500 rounded-full px-5 py-2 text-sm transition-colors group">
              <img src={email} className='w-5 h-5 pt-1 object-contain brightness-0 invert'/>
              <span className="text-gray-300 font-medium tracking-wide group-hover:text-white transition-colors">support@dailybite.com</span>
            </a>
          </div>

          {/* Social Media Links - Right Box */}
          {/* Removed parent border-l so the child borders seamlessly connect to the middle section */}
          <div className="w-full md:w-1/3 flex items-center justify-center md:justify-end border-t border-gray-800 md:border-t-0 h-16 md:h-full mx-5">
            {/* Increased width to w-[80px] and icon size to w-6 h-6 */}
            <a href="https://www.youtube.com/@ujwalshrestha8432" className="flex items-center justify-center w-20 h-full border-l border-gray-800 hover:bg-gray-800/50 transition-colors">
              <img src={youtube} alt="YouTube" className="w-6 h-6 object-contain brightness-0 invert" />
            </a>
            <a href="https://www.tiktok.com/@ujwalstha79?_r=1&_t=ZS-97pJ4w3Af5Q" className="flex items-center justify-center w-20 h-full border-l border-gray-800 hover:bg-gray-800/50 transition-colors">
              <img src={tiktok} alt="TikTok" className="w-6 h-6 object-contain brightness-0 invert" />
            </a>
            <a href="https://www.instagram.com/xthazujwalz/" className="flex items-center justify-center w-20 h-full border-l border-gray-800 hover:bg-gray-800/50 transition-colors">
              <img src={instagram} alt="Instagram" className="w-6 h-6 object-contain brightness-0 invert" />
            </a>
            <a href="https://www.facebook.com/ujwal.shrestha.079/" className="flex items-center justify-center w-20 h-full border border-gray-800 hover:bg-gray-800/50 transition-colors">
              <img src={facebook} alt="Facebook" className="w-6 h-6 object-contain brightness-0 invert" />
            </a>
          </div>
        </div>
      </div>

      {/* --- Bottom Section: Copyright, Location, Legal --- */}
      {/* Increased text size from text-sm to text-base */}
      <div className="max-w-350 px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-base mx-5">
        
        {/* Copyright */}
        <div className="flex-1 flex justify-start items-center">
          <span>&copy; All right reserved 2026</span>
        </div>
        
        {/* Location */}
        <div className="flex-1 flex justify-center text-center">
          Location: Sundarmarga-8, Chippledhunga, Pokhara
        </div>
        
        {/* Legal Links */}
        <div className="flex-1 flex justify-end space-x-6">
          <Link to="/under-construction" className="hover:text-white transition-colors">Terms of Use</Link>
          <Link to="/under-construction" className="hover:text-white transition-colors">Privacy</Link>
        </div>
      </div>

    </footer>
  )
}

export default Footer