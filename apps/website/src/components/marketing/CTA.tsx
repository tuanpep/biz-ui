import { ArrowRight, Github } from "lucide-react";
import { Button } from "@biz-ui/react";

/**
 * Call-to-action section at the bottom of the homepage
 */
export function CTA() {
  return (
    <section className="py-20 px-6 border-t border-[var(--site-border)]">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 p-12 text-center text-white">
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to build something amazing?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Start building your next project with Biz UI today. Free,
              open-source, and always will be.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="gap-2 bg-white text-gray-900 hover:bg-white/90"
                asChild
              >
                <a href="/docs/getting-started">
                  Start Building
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-white/30 text-white hover:bg-white/10"
                asChild
              >
                <a
                  href="https://github.com/biz-ui/biz-ui"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  Star on GitHub
                </a>
              </Button>
            </div>
          </div>
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
