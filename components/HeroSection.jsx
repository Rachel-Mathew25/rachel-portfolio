"use client";

import { useEffect, useState } from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function GradientOrb({ className }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute rounded-full blur-[120px] opacity-20",
        className
      )}
    />
  );
}

function ShimmerDivider() {
  return (
    <div className="relative w-full h-px overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/60 to-transparent animate-shimmer" />
    </div>
  );
}

function StatusBadge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono tracking-widest uppercase select-none">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
      </span>
      {children}
    </span>
  );
}

function Button({ href, variant = "primary", icon, children }) {
  const base =
    "group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]";

  const styles = {
    primary:
      "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/40 hover:shadow-blue-700/40 hover:-translate-y-0.5 active:translate-y-0",
    ghost:
      "border border-white/10 hover:border-blue-500/50 text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] hover:-translate-y-0.5 active:translate-y-0",
  };

  return (
    <a href={href} className={cn(base, styles[variant])}>
      {icon && <span className="w-4 h-4 flex-shrink-0">{icon}</span>}
      {children}
      {variant === "primary" && (
        <ArrowIcon className="w-3.5 h-3.5 -mr-0.5 opacity-70 group-hover:translate-x-0.5 transition-transform" />
      )}
    </a>
  );
}

function ProfileImage() {
  return (
    <div className="relative flex-shrink-0">
      <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-blue-600/50 via-blue-400/20 to-transparent blur-sm" />

      <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full ring-1 ring-blue-500/30 overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900">
        <img
          src="/profile2.png"
          alt="Rachel Mathew"
          className="w-full h-full object-cover"
        />
      </div>

      <span className="absolute bottom-1.5 right-1.5 md:bottom-2 md:right-2 w-3.5 h-3.5 rounded-full bg-emerald-400 ring-2 ring-[#0a0a0f]" />
    </div>
  );
}

function TechTag({ children }) {
  return (
    <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono">
      {children}
    </span>
  );
}

function GitHubIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function FolderIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v8.25A2.25 2.25 0 0 0 4.5 16.5h15a2.25 2.25 0 0 0 2.25-2.25V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44z"
      />
    </svg>
  );
}

function ArrowIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8h10m-4-4 4 4-4 4"
      />
    </svg>
  );
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const fadeUp = (delay = 0) =>
    cn(
      "transition-all duration-700 ease-out",
      mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
      delay === 0 && "delay-0",
      delay === 1 && "delay-100",
      delay === 2 && "delay-200",
      delay === 3 && "delay-300",
      delay === 4 && "delay-500",
      delay === 5 && "delay-700"
    );

  const techStack = ["C", "Python", "JavaScript", "React", "Node.js", "Git"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-shimmer {
          animation: shimmer 2.5s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }
        .delay-500 { transition-delay: 500ms; }
        .delay-700 { transition-delay: 700ms; }

        .hero-root {
          font-family: 'Syne', sans-serif;
        }

        .hero-root .font-mono {
          font-family: 'DM Mono', monospace;
        }
      `}</style>

      <section className="hero-root relative min-h-screen w-full bg-[#0a0a0f] overflow-hidden flex items-center">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(99,179,237,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,237,0.3) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />

        <GradientOrb className="w-[500px] h-[500px] -top-40 -left-40 bg-blue-600" />
        <GradientOrb className="w-[400px] h-[400px] bottom-0 right-0 bg-blue-800" />
        <GradientOrb className="w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-700 opacity-10" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 py-24">
          <div
            className={cn(
              "flex items-center justify-between mb-16 md:mb-20",
              fadeUp(0)
            )}
          >
            <span className="font-mono text-xs text-zinc-600 tracking-widest uppercase">
              Rachel.dev
            </span>

            <span className="font-mono text-xs text-zinc-600 tracking-widest">
              Open to internships
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16">
            <div className="flex-1 min-w-0">
              <div className={cn("mb-6", fadeUp(1))}>
                <StatusBadge>Building & Learning</StatusBadge>
              </div>

              <h1
                className={cn(
                  "text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05] mb-5",
                  fadeUp(2)
                )}
              >
                Rachel{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  Mathew
                </span>
              </h1>

              <p
                className={cn(
                  "font-mono text-sm text-blue-400/70 tracking-widest uppercase mb-6",
                  fadeUp(3)
                )}
              >
                CSE Student · Open Source Contributor · Full-Stack Developer
              </p>

              <p
                className={cn(
                  "text-zinc-400 text-base md:text-lg leading-relaxed max-w-lg mb-8",
                  fadeUp(3)
                )}
              >
                I’m a Computer Science student at PES University focused on
                full-stack development, open source, and machine learning. I
                enjoy building scalable applications, experimenting with product
                ideas, and combining engineering with thoughtful design.
              </p>

              <div
                className={cn(
                  "flex flex-wrap items-center gap-3 mb-10",
                  fadeUp(4)
                )}
              >
                <Button
                  href="https://github.com/Rachel-Mathew25"
                  variant="primary"
                  icon={<GitHubIcon className="w-4 h-4" />}
                >
                  GitHub
                </Button>

                <Button
                  href="#projects"
                  variant="ghost"
                  icon={<FolderIcon className="w-4 h-4" />}
                >
                  View Projects
                </Button>
              </div>

              <div className={cn("mb-6", fadeUp(5))}>
                <ShimmerDivider />
              </div>

              <div className={cn("flex flex-wrap gap-2", fadeUp(5))}>
                {techStack.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </div>
            </div>

            <div className={cn("animate-float hidden md:block", fadeUp(2))}>
              <ProfileImage />
            </div>
          </div>

          <div
            className={cn(
              "mt-16 md:mt-20 flex items-center gap-4",
              fadeUp(5)
            )}
          >
            <span className="font-mono text-xs text-zinc-700">
              Based in Bangalore, India
            </span>
            <span className="text-zinc-800">·</span>
            <span className="font-mono text-xs text-zinc-700">
              Building for the web
            </span>
          </div>
        </div>
      </section>
    </>
  );
}