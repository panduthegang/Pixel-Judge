import React from 'react';
import { Footer } from '../components/Footer';
import { Code, Bug, Rocket, Compass, Lightbulb, ArrowRight } from 'lucide-react';
import { Ticker } from '../components/Ticker';

export const CaseStudiesPage: React.FC = () => {
  return (
    <>
      <main className="flex-grow w-full bg-vintage-cream">
        <section className="w-full bg-vintage-cream pt-20 pb-24 px-4 relative overflow-hidden border-b-2 border-vintage-border">
          <div className="absolute top-10 left-10 opacity-10 pointer-events-none">
            <svg width="300" height="300" viewBox="0 0 200 200">
              <path fill="currentColor" d="M45.7,-76.3C58.9,-69.3,69.1,-56.6,76.8,-43.1C84.5,-29.6,89.7,-15.3,87.7,-1.2C85.7,13,76.5,26.9,67,39.1C57.5,51.3,47.7,61.7,36.1,68.5C24.5,75.3,11.1,78.5,-1.5,81.1C-14.1,83.7,-29.7,85.7,-42.8,80.2C-55.9,74.7,-66.5,61.7,-74.3,47.6C-82.1,33.5,-87.1,18.3,-85.8,3.6C-84.5,-11.1,-76.9,-25.3,-67.4,-37.7C-57.9,-50.1,-46.5,-60.7,-34,-68.1C-21.5,-75.5,-7.9,-79.7,4.2,-86.9L16.3,-94.2" />
            </svg>
          </div>

          <div className="max-w-6xl mx-auto text-center z-10 relative">
            <div className="inline-block mb-6 px-4 py-1 border-2 border-vintage-border bg-vintage-gold shadow-retro transform rotate-2">
              <span className="font-mono font-bold text-xs uppercase tracking-widest text-vintage-charcoal">
                The Complete Handbook
              </span>
            </div>

            <h1 className="font-serif text-6xl md:text-8xl font-black text-vintage-charcoal leading-[0.9] mb-8 tracking-tight">
              MASTER THE CRAFT <br />
              <span className="italic font-normal text-vintage-red">of AI-Powered</span> DEVELOPMENT
            </h1>

            <p className="max-w-2xl mx-auto font-mono text-lg md:text-xl text-vintage-charcoal/80 mb-12 leading-relaxed">
              From prompt engineering to production deployment, discover the secrets of building with artificial intelligence.
            </p>

            <div className="mt-16 border-t-2 border-vintage-border pt-8 flex flex-wrap justify-center gap-8 md:gap-12 text-xs font-mono uppercase tracking-widest text-vintage-charcoal/60">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-vintage-red rounded-full"></div>
                <span>Prompting Mastery</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-vintage-red rounded-full"></div>
                <span>Debug Like a Pro</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-vintage-red rounded-full"></div>
                <span>Deploy Anywhere</span>
              </div>
            </div>
          </div>
        </section>

        <Ticker />

        <section className="w-full border-b-2 border-vintage-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
            <div className="border-2 border-vintage-border bg-white p-8 md:p-12 lg:border-r-0">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-vintage-red flex items-center justify-center border-2 border-vintage-border shadow-retro">
                  <Lightbulb className="text-white" size={24} />
                </div>
                <h2 className="font-serif text-4xl font-bold text-vintage-charcoal">
                  The Art of Prompting
                </h2>
              </div>

              <div className="space-y-8 font-mono text-vintage-charcoal/80">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-vintage-charcoal mb-4">
                    1. Be Specific & Structured
                  </h3>
                  <div className="bg-vintage-paper border-l-4 border-vintage-red p-6">
                    <p className="mb-4 font-bold text-vintage-charcoal">BAD PROMPT:</p>
                    <p className="mb-6 italic">"Make a dashboard"</p>
                    <p className="mb-4 font-bold text-vintage-charcoal">GOOD PROMPT:</p>
                    <p className="italic text-sm">
                      "Create a dashboard with: 1) A sidebar navigation with home, analytics, and settings icons, 2) A top header with search bar and user avatar, 3) Main content area showing 4 metric cards (revenue, users, conversion, churn) in a 2x2 grid"
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-bold text-vintage-charcoal mb-4">
                    2. Layer Your Context
                  </h3>
                  <ul className="list-disc list-inside space-y-3 ml-4 text-sm">
                    <li>Start with the WHAT (overall purpose)</li>
                    <li>Define the WHO (target users)</li>
                    <li>Specify the HOW (technical constraints)</li>
                    <li>Add the WHY (business context)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-2 border-vintage-border bg-vintage-paper p-8 md:p-12 lg:border-l-0">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-vintage-gold flex items-center justify-center border-2 border-vintage-border shadow-retro">
                  <Compass className="text-vintage-charcoal" size={24} />
                </div>
                <h2 className="font-serif text-4xl font-bold text-vintage-charcoal">
                  Explore & Iterate
                </h2>
              </div>

              <div className="space-y-6 font-mono text-vintage-charcoal/80">
                <div className="border-l-4 border-vintage-charcoal pl-6">
                  <h4 className="font-bold text-vintage-charcoal mb-2">Start Broad, Then Narrow</h4>
                  <p className="text-sm">Begin with basic structure. Once the skeleton is right, add styling, interactions, and polish.</p>
                </div>

                <div className="border-l-4 border-vintage-charcoal pl-6">
                  <h4 className="font-bold text-vintage-charcoal mb-2">Iterate in Small Steps</h4>
                  <p className="text-sm">Make one change at a time. This makes it easier to identify what works and what breaks.</p>
                </div>

                <div className="border-l-4 border-vintage-charcoal pl-6">
                  <h4 className="font-bold text-vintage-charcoal mb-2">Ask for Alternatives</h4>
                  <p className="text-sm">"Show me 3 different color schemes for this" or "Give me 2 layout variations" opens creative possibilities.</p>
                </div>

                <div className="border-l-4 border-vintage-charcoal pl-6">
                  <h4 className="font-bold text-vintage-charcoal mb-2">Request Explanations</h4>
                  <p className="text-sm">Don't just accept code. Ask "Why did you choose this approach?" to learn and verify decisions.</p>
                </div>

                <div className="bg-vintage-gold/20 border-2 border-vintage-gold p-6 mt-8">
                  <p className="font-bold mb-3">PRO TIP:</p>
                  <p className="text-sm">Upload wireframes or screenshots. Say "Create something like this but with X, Y, Z differences" rather than describing from scratch.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-vintage-red py-16 px-8 md:px-12 border-b-2 border-vintage-border">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-white flex items-center justify-center border-2 border-vintage-border shadow-retro">
              <Bug className="text-vintage-red" size={24} />
            </div>
            <h2 className="font-serif text-4xl font-bold text-vintage-cream">
              Debugging Strategies
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 font-mono">
            <div className="bg-white/95 p-6 border-2 border-vintage-border shadow-retro">
              <h4 className="font-bold text-vintage-charcoal mb-3 text-lg">ISSUE: "Nothing is showing up"</h4>
              <p className="mb-3 text-sm text-vintage-charcoal/80">Check:</p>
              <ul className="list-disc list-inside ml-2 space-y-2 text-sm text-vintage-charcoal/80">
                <li>Console for errors (F12)</li>
                <li>Component in the DOM</li>
                <li>CSS hiding (z-index, opacity)</li>
                <li>Data actually loading</li>
              </ul>
            </div>

            <div className="bg-white/95 p-6 border-2 border-vintage-border shadow-retro">
              <h4 className="font-bold text-vintage-charcoal mb-3 text-lg">ISSUE: "Styling looks broken"</h4>
              <p className="mb-3 text-sm text-vintage-charcoal/80">Solutions:</p>
              <ul className="list-disc list-inside ml-2 space-y-2 text-sm text-vintage-charcoal/80">
                <li>Inspect element to see CSS</li>
                <li>Check conflicting styles</li>
                <li>Verify breakpoints</li>
                <li>Check missing imports</li>
              </ul>
            </div>

            <div className="bg-white/95 p-6 border-2 border-vintage-border shadow-retro">
              <h4 className="font-bold text-vintage-charcoal mb-3 text-lg">ISSUE: "API/Data not working"</h4>
              <p className="mb-3 text-sm text-vintage-charcoal/80">Debug steps:</p>
              <ul className="list-disc list-inside ml-2 space-y-2 text-sm text-vintage-charcoal/80">
                <li>Check Network tab (F12)</li>
                <li>Verify API keys in .env</li>
                <li>Check CORS errors</li>
                <li>Test endpoint directly</li>
              </ul>
            </div>
          </div>

          <div className="bg-vintage-gold border-2 border-vintage-border p-6 mt-8 font-mono shadow-retro">
            <p className="font-bold mb-3 text-vintage-charcoal">DEBUGGING GOLDEN RULE:</p>
            <p className="text-vintage-charcoal/90">Isolate the problem. Comment out code sections until it works, then add back piece by piece to find the culprit.</p>
          </div>
        </section>

        <section className="w-full bg-vintage-paper py-12 border-b-2 border-vintage-border">
          <div className="px-8 md:px-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-vintage-charcoal flex items-center justify-center border-2 border-vintage-border shadow-retro">
                  <Code className="text-white" size={24} />
                </div>
                <h2 className="font-serif text-4xl font-bold text-vintage-charcoal">
                  Platform Comparison
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono">
                <div className="bg-white border-2 border-vintage-border p-6 shadow-retro hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                  <h3 className="font-bold text-xl text-vintage-charcoal mb-3">Bolt.new</h3>
                  <p className="text-sm text-vintage-charcoal/60 mb-4">Full-stack apps, rapid prototyping</p>
                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="font-bold text-vintage-red">+</span> Complete environment, instant preview
                    </div>
                    <div>
                      <span className="font-bold text-vintage-charcoal">-</span> Can get expensive
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-vintage-border p-6 shadow-retro hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                  <h3 className="font-bold text-xl text-vintage-charcoal mb-3">Claude Projects</h3>
                  <p className="text-sm text-vintage-charcoal/60 mb-4">Planning, code review, complex logic</p>
                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="font-bold text-vintage-red">+</span> Deep reasoning, long context
                    </div>
                    <div>
                      <span className="font-bold text-vintage-charcoal">-</span> No direct execution
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-vintage-border p-6 shadow-retro hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                  <h3 className="font-bold text-xl text-vintage-charcoal mb-3">v0.dev</h3>
                  <p className="text-sm text-vintage-charcoal/60 mb-4">UI components, design systems</p>
                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="font-bold text-vintage-red">+</span> Beautiful designs, quick iterations
                    </div>
                    <div>
                      <span className="font-bold text-vintage-charcoal">-</span> Limited to frontend
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-vintage-border p-6 shadow-retro hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                  <h3 className="font-bold text-xl text-vintage-charcoal mb-3">Lovable.dev</h3>
                  <p className="text-sm text-vintage-charcoal/60 mb-4">MVPs, startups, database-heavy apps</p>
                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="font-bold text-vintage-red">+</span> Supabase, auth built-in
                    </div>
                    <div>
                      <span className="font-bold text-vintage-charcoal">-</span> Less flexible than custom
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-vintage-border p-6 shadow-retro hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                  <h3 className="font-bold text-xl text-vintage-charcoal mb-3">GitHub Copilot</h3>
                  <p className="text-sm text-vintage-charcoal/60 mb-4">Local development, IDE integration</p>
                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="font-bold text-vintage-red">+</span> Works in your editor, fast
                    </div>
                    <div>
                      <span className="font-bold text-vintage-charcoal">-</span> Limited to code completion
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-vintage-border p-6 shadow-retro hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                  <h3 className="font-bold text-xl text-vintage-charcoal mb-3">Cursor</h3>
                  <p className="text-sm text-vintage-charcoal/60 mb-4">Serious development, production apps</p>
                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="font-bold text-vintage-red">+</span> Full IDE, multi-file edits
                    </div>
                    <div>
                      <span className="font-bold text-vintage-charcoal">-</span> Steeper learning curve
                    </div>
                  </div>
                </div>
              </div>

            <div className="mt-8 bg-vintage-gold/20 border-2 border-vintage-gold p-6 font-mono">
              <p className="font-bold mb-3 text-vintage-charcoal uppercase tracking-wider">Quick Selection Guide:</p>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-vintage-charcoal/80">
                <div><span className="font-bold">Just exploring?</span> v0.dev or Bolt.new</div>
                <div><span className="font-bold">Building MVP?</span> Lovable.dev or Bolt.new</div>
                <div><span className="font-bold">Production quality?</span> Cursor + Claude</div>
                <div><span className="font-bold">Only UI components?</span> v0.dev</div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full border-b-2 border-vintage-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
            <div className="border-2 border-vintage-border bg-white p-8 md:p-12 lg:border-r-0">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-vintage-red flex items-center justify-center border-2 border-vintage-border shadow-retro">
                  <Rocket className="text-white" size={24} />
                </div>
                <h2 className="font-serif text-4xl font-bold text-vintage-charcoal">
                  Deployment Guide
                </h2>
              </div>

              <div className="space-y-8 font-mono text-vintage-charcoal/80">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-vintage-charcoal mb-6">
                    Frontend Platforms
                  </h3>

                  <div className="space-y-4">
                    <div className="border-2 border-vintage-border p-4 bg-vintage-paper/30 hover:bg-vintage-paper transition-colors">
                      <h4 className="font-bold text-vintage-charcoal mb-2 text-base">Vercel</h4>
                      <p className="text-xs mb-2 text-vintage-charcoal/60">Next.js, React, Vue, static sites</p>
                      <p className="text-xs font-bold text-vintage-red">FREE TIER: Generous for most projects</p>
                    </div>

                    <div className="border-2 border-vintage-border p-4 bg-vintage-paper/30 hover:bg-vintage-paper transition-colors">
                      <h4 className="font-bold text-vintage-charcoal mb-2 text-base">Netlify</h4>
                      <p className="text-xs mb-2 text-vintage-charcoal/60">Static sites, Jamstack, forms</p>
                      <p className="text-xs font-bold text-vintage-red">FREE TIER: 100GB bandwidth</p>
                    </div>

                    <div className="border-2 border-vintage-border p-4 bg-vintage-paper/30 hover:bg-vintage-paper transition-colors">
                      <h4 className="font-bold text-vintage-charcoal mb-2 text-base">Cloudflare Pages</h4>
                      <p className="text-xs mb-2 text-vintage-charcoal/60">Global performance, unlimited bandwidth</p>
                      <p className="text-xs font-bold text-vintage-red">FREE TIER: Unlimited bandwidth</p>
                    </div>

                    <div className="border-2 border-vintage-border p-4 bg-vintage-paper/30 hover:bg-vintage-paper transition-colors">
                      <h4 className="font-bold text-vintage-charcoal mb-2 text-base">GitHub Pages</h4>
                      <p className="text-xs mb-2 text-vintage-charcoal/60">Simple static sites, documentation</p>
                      <p className="text-xs font-bold text-vintage-red">FREE TIER: Completely free for public repos</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-bold text-vintage-charcoal mb-6">
                    Full-Stack Options
                  </h3>

                  <div className="space-y-4">
                    <div className="border-l-4 border-vintage-red pl-4 bg-vintage-paper/30 p-4">
                      <h4 className="font-bold text-vintage-charcoal mb-1 text-base">Railway</h4>
                      <p className="text-xs text-vintage-charcoal/80">Node.js, Python, Go apps with databases</p>
                    </div>

                    <div className="border-l-4 border-vintage-red pl-4 bg-vintage-paper/30 p-4">
                      <h4 className="font-bold text-vintage-charcoal mb-1 text-base">Render</h4>
                      <p className="text-xs text-vintage-charcoal/80">Static sites, APIs, background workers</p>
                    </div>

                    <div className="border-l-4 border-vintage-red pl-4 bg-vintage-paper/30 p-4">
                      <h4 className="font-bold text-vintage-charcoal mb-1 text-base">Fly.io</h4>
                      <p className="text-xs text-vintage-charcoal/80">Docker containers, global edge deployment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-2 border-vintage-border bg-vintage-paper p-8 md:p-12 lg:border-l-0">
              <div className="mb-8">
                <h3 className="font-serif text-2xl font-bold text-vintage-charcoal mb-6">
                  Database & Backend
                </h3>

                <div className="border-2 border-vintage-gold bg-vintage-gold/10 p-6 mb-6">
                  <h4 className="font-bold text-vintage-charcoal mb-3 text-lg">Supabase</h4>
                  <p className="text-xs mb-3 text-vintage-charcoal/80">PostgreSQL database, auth, storage, edge functions</p>
                  <div className="bg-white/50 p-3 border border-vintage-gold/30 text-xs">
                    <p className="font-bold text-vintage-charcoal mb-2">QUICK START:</p>
                    <ol className="list-decimal list-inside space-y-1 text-vintage-charcoal/80">
                      <li>Create project at supabase.com</li>
                      <li>Get project URL and anon key</li>
                      <li>Add to environment variables</li>
                      <li>Deploy migrations</li>
                    </ol>
                  </div>
                  <p className="mt-3 text-xs font-bold text-vintage-red">FREE: 500MB DB, 2GB bandwidth</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="border-2 border-vintage-border p-4 bg-white">
                    <h4 className="font-bold text-vintage-charcoal mb-1 text-sm">Firebase</h4>
                    <p className="text-xs text-vintage-charcoal/60">NoSQL, real-time</p>
                  </div>

                  <div className="border-2 border-vintage-border p-4 bg-white">
                    <h4 className="font-bold text-vintage-charcoal mb-1 text-sm">PlanetScale</h4>
                    <p className="text-xs text-vintage-charcoal/60">MySQL with branching</p>
                  </div>
                </div>
              </div>

              <div className="bg-vintage-red text-vintage-cream p-6 border-2 border-vintage-border font-mono">
                <h3 className="font-serif text-xl font-bold mb-4">Pre-Deploy Checklist</h3>
                <ul className="space-y-1.5 text-xs">
                  <li>[ ] Environment variables configured</li>
                  <li>[ ] API keys in .env (never commit!)</li>
                  <li>[ ] Build runs successfully</li>
                  <li>[ ] No console errors</li>
                  <li>[ ] Database migrations applied</li>
                  <li>[ ] CORS configured</li>
                  <li>[ ] Test on multiple browsers</li>
                  <li>[ ] Check mobile responsiveness</li>
                  <li>[ ] Custom domain setup (optional)</li>
                  <li>[ ] HTTPS enabled</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-vintage-cream py-20 px-8 md:px-12 border-t-2 border-vintage-border">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-5xl md:text-6xl font-black mb-6 tracking-tight text-vintage-charcoal">
                Ready to Build?
              </h2>
              <p className="font-mono text-lg text-vintage-charcoal/80 max-w-2xl mx-auto">
                You now have the complete toolkit for AI-powered development. Start with these fundamentals and iterate. Remember: every shipped project beats perfect unreleased code.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border-2 border-vintage-border p-8 bg-white hover:bg-vintage-paper transition-colors shadow-retro">
                <div className="font-serif text-3xl font-bold text-vintage-red mb-4">1</div>
                <h3 className="font-serif text-xl font-bold mb-3 text-vintage-charcoal">Master Your Prompts</h3>
                <p className="font-mono text-sm text-vintage-charcoal/80">Be specific, layer context, use references. The better your prompt, the better your results. Practice makes perfect.</p>
              </div>

              <div className="border-2 border-vintage-border p-8 bg-white hover:bg-vintage-paper transition-colors shadow-retro">
                <div className="font-serif text-3xl font-bold text-vintage-red mb-4">2</div>
                <h3 className="font-serif text-xl font-bold mb-3 text-vintage-charcoal">Debug Fearlessly</h3>
                <p className="font-mono text-sm text-vintage-charcoal/80">Use your browser tools. Isolate problems methodically. Every bug solved teaches you something valuable about your code.</p>
              </div>

              <div className="border-2 border-vintage-border p-8 bg-white hover:bg-vintage-paper transition-colors shadow-retro">
                <div className="font-serif text-3xl font-bold text-vintage-red mb-4">3</div>
                <h3 className="font-serif text-xl font-bold mb-3 text-vintage-charcoal">Ship Early</h3>
                <p className="font-mono text-sm text-vintage-charcoal/80">Don't wait for perfection. Deploy today, refine tomorrow. Real user feedback beats perfect planning every time.</p>
              </div>
            </div>

            <div className="mt-16 p-12 bg-vintage-gold border-2 border-vintage-border shadow-retro text-center">
              <p className="font-serif text-3xl font-bold mb-4 text-vintage-charcoal">Your next project starts now.</p>
              <p className="font-mono text-vintage-charcoal/90">Apply these principles. Build something. Ship it. Learn from it. Repeat.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
