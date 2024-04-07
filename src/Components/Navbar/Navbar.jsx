import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    
<nav className='text-3xl border h-20 flex items-center px-14'>
        {/* <img src="https://png.pngtree.com/png-vector/20230225/ourmid/pngtree-smart-chatbot-cartoon-clipart-png-image_6620453.png" alt="brand_image" className='h-full'/> */}
        <button className='rounded px-2 py-1 border shadow-md h-[70%] ms-auto hover:bg-gray-200 hover:text-gray-800'><Link to="/login" className="nav-link">Login</Link></button>
        <button className='rounded px-2 py-1 border shadow-md h-[70%] hover:bg-gray-200 hover:text-gray-800 mx-6'><Link to="/register" className="nav-link">Signup</Link></button>
        
    </nav>

  );
}

export default Navbar;