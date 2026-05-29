import { useState, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { Theme } from '../types';

interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
  activeSection: string;
}

export default function Header({ theme, onToggleTheme, activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const menuItems = [
    { name: 'About', href: '#hero', isExternal: false },
    { name: 'Work', href: '#work', isExternal: false },
    { name: 'Career Roadmap', href: '#roadmap', isExternal: false },
    { name: 'Testimonials', href: '#testimonials', isExternal: false },
  ];

  // Smooth scroll helper for internal anchors
  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, href: string, isExternal: boolean) => {
    if (isExternal) return; // Allow natural external navigations
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      id="main-header"
      className="sticky top-0 z-50 w-full h-[90px] flex items-center transition-colors duration-500 border-b border-custom-border backdrop-blur-xl bg-page-bg/80"
    >
      <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-12" id="header-container">
        {/* 1. Logo Branding */}
        <a
          href="#hero"
          onClick={(e) => handleScroll(e, '#hero', false)}
          className="group relative flex items-center space-x-1"
          id="logo-brand"
        >
          <span className="font-sans font-medium text-lg md:text-xl tracking-wider text-text-main transition-colors duration-300">
            Tanja Ogirchuk
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 dark:bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-1" />
        </a>

        {/* 2. Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10" id="desktop-nav">
          {menuItems.map((item, idx) => {
            const isCurrentActive = !item.isExternal && activeSection === item.name.toLowerCase();
            return (
              <a
                key={item.name}
                href={item.href}
                target={item.isExternal ? '_blank' : undefined}
                rel={item.isExternal ? 'noopener noreferrer' : undefined}
                onClick={(e) => handleScroll(e, item.href, item.isExternal)}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative px-4 py-2 text-sm font-sans tracking-wide transition-colors duration-300 flex items-center space-x-1 ${
                  isCurrentActive
                    ? 'text-[#2F4EFF] dark:text-text-main font-semibold'
                    : 'text-text-secondary hover:text-[#2F4EFF] dark:hover:text-[#2F4EFF]'
                }`}
                id={`nav-${item.name.toLowerCase().replace(' ', '-')}`}
              >
                <span>{item.name}</span>
                {item.isExternal && (
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 dark:opacity-90 dark:text-neutral-200 group-hover:opacity-100 transition-opacity" />
                )}
 
                {/* Glowing Dynamic Backdrop Blur Anchor */}
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.div
                      layoutId="header-glow"
                      className="absolute inset-0 -z-10 rounded-full bg-radial from-indigo-500/10 via-purple-500/4 dark:from-purple-400/14 dark:via-pink-500/2 to-transparent blur-md md:blur-lg"
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1.05 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    />
                  )}
                </AnimatePresence>
 
                {/* Underline for Active Internal Anchor */}
                {isCurrentActive && (
                  <motion.div
                    layoutId="active-underline"
                    className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-[#2F4EFF] dark:bg-[#2F4EFF] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>
 
        {/* 3. Global Actions (Theme Switch + Mobile Toggle) */}
        <div className="flex items-center space-x-4 md:space-x-6" id="header-actions">
          {/* Sun/Moon Toggle Button */}
          <button
            onClick={onToggleTheme}
            className="group relative p-2.5 rounded-full border border-custom-border bg-card-bg/50 hover:bg-card-bg hover:border-[#2F4EFF]/45 transition-all duration-300 text-text-main hover:text-[#2F4EFF] flex items-center justify-center overflow-hidden cursor-pointer"
            aria-label="Toggle Theme Mode"
            id="theme-toggle"
          >
            <motion.div
              initial={false}
              animate={{ rotate: theme === 'light' ? 0 : 180 }}
              transition={{ type: 'spring', stiffness: 180, damping: 15 }}
              className="flex items-center justify-center h-4 w-4 md:h-5 md:w-5"
            >
              {theme === 'light' ? (
                <Sun className="h-4 w-4 md:h-5 md:w-5 text-[#2F4EFF]" />
              ) : (
                <Moon className="h-4 w-4 md:h-5 md:w-5 text-text-main fill-current" />
              )}
            </motion.div>
          </button>

          {/* Mobile Menu Open Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="p-2.5 rounded-full md:hidden border border-custom-border bg-card-bg/50 text-text-main hover:bg-card-bg transition-all cursor-pointer"
            aria-label="Open Navigation Drawer"
            id="mobile-menu-burger"
          >
            <Menu className="w-5 h-5 text-text-main" />
          </button>
        </div>
      </div>

      {/* 4. Responsive Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 md:hidden bg-black/60 dark:bg-page-bg/60 backdrop-blur-md flex justify-end"
            id="mobile-drawer-overlay"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="w-full max-w-[320px] h-screen bg-card-bg p-8 flex flex-col justify-between border-l border-custom-border shadow-2xl z-50"
              id="mobile-drawer-content"
            >
              <div>
                {/* Header of Mobile Drawer */}
                <div className="flex items-center justify-between">
                  <span className="font-sans font-medium text-lg tracking-wider text-text-main">
                    Menu
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full border border-custom-border text-text-secondary hover:bg-page-bg cursor-pointer"
                    id="mobile-menu-close"
                  >
                    <X className="w-5 h-5 text-text-main" />
                  </button>
                </div>
              </div>

              {/* Centered/Vertically Balanced Navigation Items */}
              <div className="flex-1 flex flex-col justify-center py-10">
                <nav className="flex flex-col space-y-8">
                  {menuItems.map((item, idx) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target={item.isExternal ? '_blank' : undefined}
                      rel={item.isExternal ? 'noopener noreferrer' : undefined}
                      onClick={(e) => handleScroll(e, item.href, item.isExternal)}
                      className="group flex items-center justify-between text-2xl font-sans font-light text-text-main hover:text-[#2F4EFF] transition-colors"
                      id={`mobile-nav-${item.name.toLowerCase().replace(' ', '-')}`}
                    >
                      <span className="relative">
                        {item.name}
                      </span>
                      <ArrowUpRight className="w-5 h-5 opacity-70 text-text-secondary group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </a>
                  ))}
                </nav>
              </div>

              {/* Bottom Footer Section in Drawer */}
              <div className="border-t border-custom-border pt-8 text-xs font-mono text-text-secondary space-y-2 bg-transparent">
                <p>© 2026 Tanja Ogirchuk</p>
                <p>Munich, Germany</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
