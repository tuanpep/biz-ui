import { ArrowRight, Sparkles } from "lucide-react";
import { Badge, Button } from "biz-ui";
import { ComponentPreview } from "./ComponentPreview";

/**
 * Hero section for the homepage
 */
export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6">
      {/* Background glows */}
      <div className="hero-glow bg-blue-500 top-0 left-1/4" />
      <div className="hero-glow bg-purple-500 top-1/4 right-1/4" />

      <div className="mx-auto max-w-7xl relative">
        {/* Version badge */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <Badge variant="outline" className="px-4 py-2 text-sm gap-2">
            <Sparkles className="h-4 w-4 text-blue-500" />
            <span>v0.1.0 released</span>
            <ArrowRight className="h-3 w-3" />
          </Badge>
        </div>

        {/* Headline */}
        <h1 className="text-center text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-slide-up">
          Build Beautiful
          <br />
          <span className="gradient-text">React Apps Faster</span>
        </h1>

        {/* Subheadline */}
        <p className="text-center text-lg sm:text-xl text-[var(--site-muted)] max-w-2xl mx-auto mb-10 animate-slide-up animate-delay-100">
          60+ accessible, customizable components built on Radix UI & Tailwind
          CSS.
          <br className="hidden sm:block" />
          The foundation for your next business application.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up animate-delay-200">
          <Button
            size="lg"
            className="gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90"
            asChild
          >
            <a href="/docs/getting-started">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="gap-2" asChild>
            <a href="/components">View Components</a>
          </Button>
        </div>

        {/* Live Component Preview */}
        <div className="max-w-3xl mx-auto animate-scale-in animate-delay-300">
          <div className="relative rounded-2xl border border-[var(--site-border)] bg-[var(--site-card)] overflow-hidden">
            {/* Window controls */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--site-border)] bg-[var(--site-bg)]">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-xs text-[var(--site-muted)] font-mono">
                Live Preview
              </span>
            </div>
            <ComponentPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
