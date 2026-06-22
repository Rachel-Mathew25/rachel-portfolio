export default function ProjectsSection() {
  const projects = [
        {
      title: "Semantic Code Search Engine",
      description:
        "Production-style semantic code search engine that indexes Python repositories using AST-based chunking, vector embeddings, and two-stage retrieval with cross-encoder reranking.",
      image: "/semantic-search-cover.png",
      demo: "https://huggingface.co/spaces/Rachel-Mathew/semantic-search-engine",
      github: "https://github.com/Rachel-Mathew25/semantic-code-search",
      tech: [
        "rag","nip",
        "Python",
        "FastAPI",
        "Sentence Transformers",
        "ChromaDB",
        "Cross Encoder",
        "Streamlit",
      ],
    },
    {
      title: "Tumor AI Detection System",
      description:
        "ML-powered tumor classification app capable of predicting malignant or benign tumors using medical diagnostic data.",
      image: "/tumor-ai-cover.png",
      github: "https://github.com/Rachel-Mathew25/tumor-ai-app",
      demo: "https://tumor-ai-app-ukefjyqhjsyqsps7h6mgye.streamlit.app",
      tech: [
        "Python",
        "Machine Learning",
        "Streamlit",
        "Scikit-learn",
      ],
    },
    {
      title: "AI Blood Report Analyzer",
      description:
        "AI-powered application that analyzes uploaded blood reports, identifies abnormal biomarkers, and generates personalized Indian diet recommendations using LangChain and Gemini.",
      image: "/blood-report-cover.png",
      demo: "https://blood-report-ai-analyzer-3nxet8ghagkgy3nluenrtk.streamlit.app",
      github: "https://github.com/Rachel-Mathew25/blood-report-ai-analyzer",
      tech: ["Python", "Streamlit", "LangChain", "Gemini", "Groq"],
    },
  ];

  return (
    <section
      id="projects"
      className="px-6 md:px-12 py-24 bg-[#0a0a0f]"
    >
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-sm text-blue-400 uppercase tracking-widest mb-3">
          Selected Work
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] hover:border-blue-500/40 transition-all duration-300"
            >
              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition-all text-white text-sm font-medium"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg border border-white/10 hover:border-blue-500/40 transition-all text-zinc-300 hover:text-white text-sm"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}