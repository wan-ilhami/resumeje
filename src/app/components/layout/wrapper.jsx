'use client';

import { useState } from 'react';
import headerNavLinks from '../navigationbar/navigation.link.data'
import Link from 'next/link'
import SectionContainer from '../ui/section.container'
import ThemeSwitch from '../ui/theme.switch'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

import Footer from './footer'

const LayoutWrapper = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen w-screen flex-col justify-between">
      {/* Desktop Header */}
      <header className="hidden sm:flex items-center justify-center py-10 px-6">
        <div className="flex items-center text-base leading-5 space-x-4">
          <div className="flex gap-2">
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="link-underline rounded py-1 px-2 text-gray-900  dark:text-gray-100 sm:py-2 sm:px-3"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <ThemeSwitch />
        </div>
      </header>

      {/* Mobile Header */}
      <header className="sm:hidden flex items-center justify-between py-4 px-6 border-b">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </Button>
        <ThemeSwitch />
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="sm:hidden bg-background border-b">
          <div className="flex flex-col px-6 py-4 space-y-2">
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="rounded py-2 px-3 text-foreground hover:bg-accent block"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </nav>
      )}

      <main className='w-screen flex-grow'>
        <SectionContainer>
          {children}
        </SectionContainer>
      </main>
      <Footer />
    </div>
  )
}

export default LayoutWrapper