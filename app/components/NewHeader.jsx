import {Link, useLocation} from 'react-router';
import {Search, User, ShoppingBag, Menu, X} from 'lucide-react';
import {useState} from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '~/components/ui/dropdown-menu';

const ChevronDownIcon = () => (
  <svg
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-2 h-1.5"
  >
    <path
      d="M0.666664 0.666748L4.66666 4.66675L8.66666 0.666748"
      stroke="#43414F"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const NavDropdown = ({label, items, currentPathname}) => (
  <DropdownMenu>
    <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-2 rounded-md text-slate-dark font-playfair text-md leading-5 hover:text-slate-dark/90 transition-colors">
      {label}
      <ChevronDownIcon />
    </DropdownMenuTrigger>
    <DropdownMenuContent className="bg-neutral-light border-slate-dark/20">
      {items.map((item) => {
        const isActive = currentPathname === item.path;
        return (
          <DropdownMenuItem key={item.path} className="cursor-pointer">
            <Link
              to={item.path}
              className={`w-full text-slate-dark font-playfair text-md py-1 px-2 hover:text-slate-dark/90 rounded ${isActive ? 'underline' : ''}`}
            >
              {item.name}
            </Link>
          </DropdownMenuItem>
        );
      })}
    </DropdownMenuContent>
  </DropdownMenu>
);

export default function Header({header, isLoggedIn, cart, publicStoreDomain}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(null);
  const {pathname} = useLocation();

  const sciencePages = [
    {name: 'Approach', path: '/approach'},
    {name: 'Process', path: '/process'},
    {name: 'Chloe Tracking App', path: '/chloe-tracking-app'},
  ];

  const learnPages = [
    {name: 'Microbiome Masterclass', path: '/microbiome-masterclass'},
    {name: 'Microbiome 101', path: '/microbiome-101'},
    {name: 'Blogs', path: '/blogs'},
    {name: 'Videos', path: '/videos'},
    {name: 'Provider Education', path: '/provider-education'},
  ];

  const shopPages = [{name: 'ThaenaBiotic<sup>&reg;</sup>', path: '/thaena-biotic'}];

  return (
    <header className="h-20 shadow-[0_4px_20px_-4px_rgba(29,41,48,0.08)] bg-neutral-light relative">
      <div className="max-w-[1400px] mx-auto h-full flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center z-20">
          <img
            src="https://cdn.shopify.com/s/files/1/0602/5281/5555/files/Thaena_Logo_Resized.png?v=1736382826"
            alt="Thaena"
            className="w-[130px] h-9"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 ml-auto">
          <Link
            to="/"
            className="px-3 py-2 rounded-md text-slate-dark font-playfair text-md leading-5 hover:text-slate-dark/90 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/who-we-are"
            className="px-3 py-2 rounded-md text-slate-dark font-playfair text-md leading-5 hover:text-slate-dark/90 transition-colors"
          >
            Who We Are
          </Link>
          <NavDropdown label="Science" items={sciencePages} currentPathname={pathname} />
          <NavDropdown label="Learn" items={learnPages} currentPathname={pathname} />
          <NavDropdown label="Shop" items={shopPages} currentPathname={pathname} />
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-1 ml-[25px]">
          <button
            className="p-2.5 rounded-md transition-colors"
            aria-label="Search"
          >
            <Search
              className="w-[18px] h-[18px] text-slate-dark hover:text-slate-dark/90"
              strokeWidth={1.33}
            />
          </button>
          <button
            className="p-2.5 rounded-md transition-colors"
            aria-label="Login"
          >
            <User
              className="w-[18px] h-[18px] text-slate-dark hover:text-slate-dark/90"
              strokeWidth={1.33}
            />
          </button>
          <a
            href="https://thaena.com/cart"
            className="p-2.5 rounded-md transition-colors"
            aria-label="Shopping cart"
          >
            <ShoppingBag
              className="w-[18px] h-[18px] text-slate-dark hover:text-slate-dark/90"
              strokeWidth={1.33}
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 z-20"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-slate-dark" />
          ) : (
            <Menu className="w-6 h-6 text-slate-dark" />
          )}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-neutral-light shadow-lg z-10 border-t max-h-[calc(100vh-80px)] overflow-y-auto">
            <nav className="flex flex-col p-4">
              <Link
                to="/"
                className="px-3 py-3 text-slate-dark font-playfair text-md hover:text-slate-dark/90 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/who-we-are"
                className="px-3 py-3 text-slate-dark font-playfair text-md hover:text-slate-dark/90 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Who We Are
              </Link>

              {/* Science Menu */}
              <div>
                <button
                  className="flex items-center justify-between w-full px-3 py-3 text-slate-dark font-playfair text-md hover:text-slate-dark/90 rounded-md text-left"
                  onClick={() =>
                    setExpandedMobileMenu(
                      expandedMobileMenu === 'science' ? null : 'science',
                    )
                  }
                >
                  Science
                  <ChevronDownIcon />
                </button>
                {expandedMobileMenu === 'science' && (
                  <div className="bg-gray-100/50 pl-4">
                    {sciencePages.map((page) => {
                      const isActive = pathname === page.path;
                      return (
                        <Link
                          key={page.path}
                          to={page.path}
                          className={`block px-3 py-2 text-slate-dark font-playfair text-md hover:text-slate-dark/90 rounded-md ${isActive ? 'underline' : ''}`}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setExpandedMobileMenu(null);
                          }}
                        >
                          {page.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Learn Menu */}
              <div>
                <button
                  className="flex items-center justify-between w-full px-3 py-3 text-slate-dark font-playfair text-md hover:text-slate-dark/90 rounded-md text-left"
                  onClick={() =>
                    setExpandedMobileMenu(
                      expandedMobileMenu === 'learn' ? null : 'learn',
                    )
                  }
                >
                  Learn
                  <ChevronDownIcon />
                </button>
                {expandedMobileMenu === 'learn' && (
                  <div className="bg-gray-100/50 pl-4">
                    {learnPages.map((page) => {
                      const isActive = pathname === page.path;
                      return (
                        <Link
                          key={page.path}
                          to={page.path}
                          className={`block px-3 py-2 text-slate-dark font-playfair text-md hover:text-slate-dark/90 rounded-md ${isActive ? 'underline' : ''}`}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setExpandedMobileMenu(null);
                          }}
                        >
                          {page.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Shop Menu */}
              <div>
                <button
                  className="flex items-center justify-between w-full px-3 py-3 text-slate-dark font-playfair text-md hover:text-slate-dark/90 rounded-md text-left"
                  onClick={() =>
                    setExpandedMobileMenu(
                      expandedMobileMenu === 'shop' ? null : 'shop',
                    )
                  }
                >
                  Shop
                  <ChevronDownIcon />
                </button>
                {expandedMobileMenu === 'shop' && (
                  <div className="bg-gray-100/50 pl-4">
                    {shopPages.map((page) => {
                      const isActive = pathname === page.path;
                      return (
                        <Link
                          key={page.path}
                          to={page.path}
                          className={`block px-3 py-2 text-slate-dark font-playfair text-md hover:text-slate-dark/90 rounded-md ${isActive ? 'underline' : ''}`}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setExpandedMobileMenu(null);
                          }}
                        >
                          {page.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-4 px-3 py-3 mt-4 border-t">
                <button
                  className="p-2 rounded-md"
                  aria-label="Search"
                >
                  <Search
                    className="w-[18px] h-[18px] text-slate-dark hover:text-slate-dark/90"
                    strokeWidth={1.33}
                  />
                </button>
                <button
                  className="p-2 rounded-md"
                  aria-label="Login"
                >
                  <User
                    className="w-[18px] h-[18px] text-slate-dark hover:text-slate-dark/90"
                    strokeWidth={1.33}
                  />
                </button>
                <a
                  href="https://thaena.com/cart"
                  className="p-2 rounded-md"
                  aria-label="Shopping cart"
                >
                  <ShoppingBag
                    className="w-[18px] h-[18px] text-slate-dark hover:text-slate-dark/90"
                    strokeWidth={1.33}
                  />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

/**
 * @typedef {Object} HeaderProps
 * @property {HeaderQuery} header
 * @property {Promise<CartApiQueryFragment|null>} cart
 * @property {Promise<boolean>} isLoggedIn
 * @property {string} publicStoreDomain
 */

/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */
/** @typedef {import('storefrontapi.generated').CartApiQueryFragment} CartApiQueryFragment */


