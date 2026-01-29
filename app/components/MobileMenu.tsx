'use client';

import Link from 'next/link';
import StarsLogo from './StarsLogo';

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
}

export default function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-white dark:bg-black z-[100] md:hidden transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ minHeight: '100vh', height: '100vh' }}
    >
      <div className="flex flex-col h-full pt-20 px-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          aria-label="Close menu"
        >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
        </button>

        <div className="flex justify-center mb-8">
          <Link 
            href="/" 
            onClick={onClose}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <StarsLogo size={120} />
          </Link>
        </div>

        <div className="space-y-0 flex-grow">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                onClick={onClose}
                className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-4 text-xl font-medium border-b border-gray-200 dark:border-gray-800"
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-auto pb-8 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400 italic">
            May the Force be with you
          </p>
        </div>
      </div>
    </div>
  );
}
