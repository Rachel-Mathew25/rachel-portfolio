export default function AboutSection() {
  return (
    <section className="px-6 md:px-12 py-24 bg-[#0a0a0f]">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-sm text-blue-400 uppercase tracking-widest mb-3">
          About Me
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Building with curiosity & creativity
        </h2>

        <div className="space-y-6 text-zinc-400 text-lg leading-relaxed max-w-3xl">
          <p>
            I’m a Computer Science student at PES University currently focused
            on full-stack development, open source, and machine learning.
          </p>

          <p>
            Over the past year, I’ve been actively exploring software
            engineering through projects, open-source contributions, and
            hands-on learning. I enjoy building products that combine
            engineering with thoughtful design and real-world usability.
          </p>

          <p>
            Currently, I’m working on improving my backend engineering skills,
            DSA problem-solving, and building scalable full-stack applications.
          </p>
        </div>
      </div>
    </section>
  );
}