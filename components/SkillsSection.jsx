export default function SkillsSection() {
  const skills = [
    "C",
    "Python",
    "JavaScript",
    "React",
    "Node.js",
    "Git & GitHub",
    "Machine Learning",
    "Open Source",
    "Tailwind CSS",
    "DSA",
  ];

  return (
    <section className="px-6 md:px-12 py-24 bg-[#0a0a0f]">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-sm text-blue-400 uppercase tracking-widest mb-3">
          Tech Stack
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Skills & Technologies
        </h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-zinc-300 hover:border-blue-500/40 hover:text-white transition-all"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}