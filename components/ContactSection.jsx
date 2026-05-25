export default function ContactSection() {
  return (
    <section className="px-6 md:px-12 py-24 bg-[#0a0a0f] border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-sm text-blue-400 uppercase tracking-widest mb-3">
          Contact
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let’s Connect
        </h2>

        <p className="text-zinc-400 text-lg mb-8 max-w-2xl">
          I’m currently exploring software engineering opportunities, open
          source collaborations, and building impactful digital products.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:rachel26sm@gmail.com"
            className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition-all"
          >
            Email Me
          </a>

          <a
            href="https://github.com/Rachel-Mathew25"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl border border-white/10 hover:border-blue-500/40 transition-all"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl border border-white/10 hover:border-blue-500/40 transition-all"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}