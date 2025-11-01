'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FileText, Zap, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-6 py-12">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              Build Your Resume in Minutes
            </h1>
            <p className="text-xl text-muted-foreground">
              Create a professional resume that stands out. No complicated forms, just simple and intuitive.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link href="/resume">
              <Button size="lg" className="gap-2 min-w-48">
                Get Started <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground pt-4 flex items-center justify-center gap-2">
            <Lock className="w-4 h-4" />
            Your data stays on your device • No account needed
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Resume Builder?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="space-y-4 p-6 rounded-lg border bg-background hover:shadow-lg hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Professional Templates</h3>
              <p className="text-sm text-muted-foreground">
                Choose from carefully designed templates that impress employers
              </p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-4 p-6 rounded-lg border bg-background hover:shadow-lg hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">
                See your resume update in real-time as you type
              </p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-4 p-6 rounded-lg border bg-background hover:shadow-lg hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">100% Private</h3>
              <p className="text-sm text-muted-foreground">
                All your data stays private and never leaves your device
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
              <div className="space-y-1">
                <h4 className="font-semibold text-lg">Fill in Your Details</h4>
                <p className="text-muted-foreground">Enter your personal info, work experience, education, and skills</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
              <div className="space-y-1">
                <h4 className="font-semibold text-lg">Live Preview</h4>
                <p className="text-muted-foreground">See your professional resume update instantly as you make changes</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
              <div className="space-y-1">
                <h4 className="font-semibold text-lg">Download & Apply</h4>
                <p className="text-muted-foreground">Export as PDF and start applying to your dream jobs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Everything You Need</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['ATS-friendly format', 'Auto-save to browser', 'Multiple sections', 'Easy customization', 'Professional fonts', 'Print-ready design'].map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 p-4 rounded-lg border border-transparent hover:border-primary/20 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Build Your Resume?</h2>
          <p className="text-muted-foreground text-lg">
            Create a resume that gets you noticed. Start free, no credit card required.
          </p>
          <Link href="/resume">
            <Button size="lg" className="gap-2">
              Start Building Now <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}