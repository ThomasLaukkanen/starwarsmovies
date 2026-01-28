import Link from 'next/link';
import StarsLogo from './StarsLogo';

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-4">
              <StarsLogo size={100} />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Explore the galaxy far, far away. Discover films, characters, planets, and more from the Star Wars universe.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Films
                </Link>
              </li>
              <li>
                <Link 
                  href="/characters" 
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Characters
                </Link>
              </li>
              <li>
                <Link 
                  href="/planets" 
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Planets
                </Link>
              </li>
              <li>
                <Link 
                  href="/species" 
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Species
                </Link>
              </li>
              <li>
                <Link 
                  href="/vehicles" 
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Vehicles
                </Link>
              </li>
              <li>
                <Link 
                  href="/starships" 
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Starships
                </Link>
              </li>
            </ul>
          </div>

        
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
              Data Source
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Powered by
            </p>
            <a 
              href="https://swapi.info" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              SWAPI.info
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} - Craft of Thomas Laukkanen
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              May the Force be with you
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
