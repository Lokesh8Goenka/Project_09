import React from 'react';
import { BookOpen, Crown, Shield, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <BookOpen className="w-8 h-8 text-green-500" />
            <span className="ml-2 text-xl font-bold">Lingo</span>
          </div>
          
          <div className="flex items-center space-x-8">
            <button className="flex flex-col items-center text-gray-600 hover:text-green-500">
              <Shield className="w-6 h-6" />
              <span className="text-xs">Learn</span>
            </button>
            <button className="flex flex-col items-center text-gray-600 hover:text-green-500">
              <Crown className="w-6 h-6" />
              <span className="text-xs">Leaderboard</span>
            </button>
            <button className="flex flex-col items-center text-gray-600 hover:text-green-500">
              <User className="w-6 h-6" />
              <span className="text-xs">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;