import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Mail,
  Download,
  MapPin,
  ArrowRight,
  ArrowDown,
  Brain,
  Database,
  Plug,
  Bot,
  Activity,
  Sparkles,
  GraduationCap,
  ExternalLink,
  Languages,
} from "lucide-react";

const Github = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.3-3.2-.2-.4-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.2 2.8.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
  </svg>
);
const Linkedin = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5V9h3v10zM6.5 7.7A1.7 1.7 0 1 1 6.5 4.3a1.7 1.7 0 0 1 0 3.4zM19 19h-3v-5c0-1.2-.4-2-1.5-2-.8 0-1.3.6-1.5 1.1-.1.2-.1.5-.1.7V19h-3V9h3v1.3a3 3 0 0 1 2.7-1.5c2 0 3.4 1.3 3.4 4V19z" />
  </svg>
);
import raedImg from "@/assets/raed.png";
import cvPdf from "@/assets/Cv_Raed_Hamrouni.pdf";
import { CursorGlow } from "@/components/CursorGlow";
import { NeuralBackground } from "@/components/NeuralBackground";
import { Chatbot } from "@/components/Chatbot";
import {
  T,
  LANGS,
  EXPERIENCES,
  PROJECTS,
  SKILLS,
  PIPELINE,
  FULLSTACK_PIPELINE,
  type Lang,
} from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Raed Hamrouni" },
      {
        name: "description",
        content:
          "Portfolio of Raed Hamrouni, AI & Fullstack Engineer from Sousse, Tunisia. LLM, MLOps, RAG, and production-grade AI systems.",
      },
      { property: "og:title", content: "Raed Hamrouni — AI & Fullstack Engineer" },
      {
        property: "og:description",
        content: "I don't just use AI — I engineer it into production.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

const PIPELINE_ICONS = [Sparkles, Database, Brain, Plug, Bot, Activity, ArrowRight];

const FULLSTACK_PIPELINE_ICONS = [Sparkles, Bot, Database, Plug, ArrowRight, Activity, ArrowRight];

function Portfolio() {
  const [lang, setLang] = useState<Lang>("en");
  const [langOpen, setLangOpen] = useState(false);
  const t = T[lang];
  const isRTL = lang === "ar";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.body.dir = isRTL ? "rtl" : "ltr";
  }, [lang, isRTL]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <div className="relative min-h-screen text-foreground overflow-x-hidden">
      <CursorGlow />

      {/* progress bar */}
      <motion.div
        className="fixed top-0 inset-x-0 h-[2px] z-50 origin-left"
        style={{ scaleX, background: "var(--grad-primary)" }}
      />

      {/* nav */}
      <header className="fixed top-0 inset-x-0 z-40">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="glass-strong rounded-full px-5 py-2.5 flex items-center justify-between">
            <a href="#hero" className="font-mono text-sm font-bold tracking-tight">
              <span className="text-gradient">RH</span>
              <span className="text-muted-foreground">.dev</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#about" className="hover:text-foreground transition">
                {t.nav_about}
              </a>
              <a href="#experience" className="hover:text-foreground transition">
                {t.nav_experience}
              </a>
              <a href="#projects" className="hover:text-foreground transition">
                {t.nav_projects}
              </a>
              <a href="#skills" className="hover:text-foreground transition">
                {t.nav_skills}
              </a>
              <a href="#contact" className="hover:text-foreground transition">
                {t.nav_contact}
              </a>
            </nav>

            <div className="relative">
              <button
                onClick={() => setLangOpen((o) => !o)}
                className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full glass border hover:border-primary/40 transition"
                aria-label="Change language"
              >
                <Languages className="size-3.5" />
                {LANGS.find((l) => l.code === lang)?.label}
              </button>
              {langOpen && (
                <div className="absolute end-0 mt-2 glass-strong rounded-xl overflow-hidden min-w-[120px] py-1">
                  {LANGS.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setLangOpen(false);
                      }}
                      className={`w-full px-3 py-2 text-sm text-start flex items-center gap-2 hover:bg-white/5 transition ${
                        lang === l.code ? "text-cyan" : ""
                      }`}
                    >
                      <span>{l.flag}</span>
                      <span className="font-medium">{l.label}</span>
                      {lang === l.code && <span className="ms-auto text-cyan">●</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden noise"
      >
        <div className="absolute inset-0 grid-bg opacity-40" />
        <NeuralBackground />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at top, oklch(0.72 0.18 235 / 0.18), transparent 60%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-5xl px-6 pt-24 pb-16 text-center">
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block mb-8"
          >
            <div className="relative animate-float">
              <div className="absolute inset-0 rounded-full animate-pulse-ring" />
              <img
                src={raedImg}
                alt="Raed Hamrouni"
                width={160}
                height={160}
                className="size-40 rounded-full object-cover relative glow-ring"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground mb-4 px-3 py-1.5 rounded-full glass"
          >
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <MapPin className="size-3" /> {t.hero_location}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4"
          >
            <span className="shimmer-text">{t.hero_name}</span>
          </motion.h1>

          <Typewriter words={t.roles as string[]} />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            {t.hero_subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href={cvPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-primary-foreground font-medium text-sm hover-glow"
              style={{ background: "var(--grad-primary)" }}
            >
              <Download className="size-4" /> {t.hero_cv}
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full glass border font-medium text-sm hover:border-primary/40 hover-glow"
            >
              {t.hero_connect}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mt-8 flex items-center justify-center gap-3"
          >
            {[
              { icon: Github, href: "https://github.com/hamrouniraed07", label: "GitHub" },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/raed-med-amin-hamrouni",
                label: "LinkedIn",
              },
              { icon: Mail, href: "mailto:Hamrouniraed50@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="size-11 grid place-items-center rounded-full glass border hover:border-primary/50 hover:text-cyan transition-all hover:scale-110"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-xs text-muted-foreground"
          >
            <span className="font-mono uppercase tracking-widest">scroll</span>
            <ArrowDown className="size-3 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" eyebrow={t.about_eyebrow as string} title={t.about_title as string}>
        <div className="grid md:grid-cols-5 gap-6 items-start">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-3 text-lg leading-relaxed text-muted-foreground"
          >
            {t.about_body}
          </motion.p>

          <div className="md:col-span-2 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyan flex items-center gap-2">
              <GraduationCap className="size-4" /> {t.edu_title}
            </h3>
            {[
              {
                school: t.edu1_school as string,
                degree: t.edu1_deg as string,
                date: t.edu1_date as string,
              },
              {
                school: t.edu2_school as string,
                degree: t.edu2_deg as string,
                date: t.edu2_date as string,
              },
              {
                school: t.edu3_school as string,
                degree: t.edu3_deg as string,
                date: t.edu3_date as string,
              },
            ].map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-5 hover-glow"
              >
                <div className="font-semibold">{e.school}</div>
                <div className="text-sm text-muted-foreground mt-1">{e.degree}</div>
                <div className="text-xs font-mono text-cyan mt-2">{e.date}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pipeline */}
        <div className="mt-16">
          <h3 className="text-xs font-mono uppercase tracking-widest text-cyan mb-6 text-center">
            {t.pipeline_title}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {PIPELINE.map((step, i) => {
              const Icon = PIPELINE_ICONS[i] || Sparkles;
              return (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-2"
                >
                  <div className="glass rounded-xl px-4 py-2.5 flex items-center gap-2 hover-glow">
                    <Icon className="size-4 text-cyan" />
                    <span className="text-sm font-medium">{step}</span>
                  </div>
                  {i < PIPELINE.length - 1 && (
                    <ArrowRight className="size-3 text-muted-foreground rtl:rotate-180" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Fullstack Pipeline */}
        <div className="mt-12">
          <h3 className="text-xs font-mono uppercase tracking-widest text-cyan mb-6 text-center">
            Fullstack Pipeline
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {FULLSTACK_PIPELINE.map((step, i) => {
              const Icon = FULLSTACK_PIPELINE_ICONS[i] || Sparkles;
              return (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-2"
                >
                  <div className="glass rounded-xl px-4 py-2.5 flex items-center gap-2 hover-glow">
                    <Icon className="size-4 text-cyan" />
                    <span className="text-sm font-medium">{step}</span>
                  </div>
                  {i < FULLSTACK_PIPELINE.length - 1 && (
                    <ArrowRight className="size-3 text-muted-foreground rtl:rotate-180" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" eyebrow={t.exp_eyebrow as string} title={t.exp_title as string}>
        <div className="relative max-w-3xl mx-auto">
          <div
            className="absolute start-4 md:start-1/2 top-2 bottom-2 w-px md:-translate-x-1/2"
            style={{
              background:
                "linear-gradient(to bottom, transparent, oklch(0.72 0.18 235 / 0.5), transparent)",
            }}
          />
          <div className="space-y-10">
            {EXPERIENCES.map((e, i) => (
              <motion.div
                key={e.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`relative ps-12 md:ps-0 md:grid md:grid-cols-2 md:gap-10 ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                <div
                  className="absolute start-4 md:start-1/2 top-3 size-3 rounded-full -translate-x-1/2 ring-4 ring-background"
                  style={{
                    background: "var(--grad-primary)",
                    boxShadow: "0 0 20px var(--electric)",
                  }}
                />

                <div className={i % 2 === 0 ? "md:text-end md:pe-10" : "md:ps-10"}>
                  <div className="text-xs font-mono text-cyan uppercase tracking-wider">
                    {e.period}
                  </div>
                  <div className="mt-1 text-2xl font-bold">{e.company}</div>
                  <div className="text-sm text-muted-foreground">{e.role[lang]}</div>
                </div>

                <div
                  className={
                    i % 2 === 0 ? "md:ps-10 mt-3 md:mt-0" : "md:pe-10 md:text-end mt-3 md:mt-0"
                  }
                >
                  <div className="glass rounded-2xl p-5 hover-glow">
                    <p className="text-sm leading-relaxed text-muted-foreground">{e.desc[lang]}</p>
                    <div
                      className={`mt-3 flex flex-wrap gap-1.5 ${i % 2 === 0 ? "" : "md:justify-end"}`}
                    >
                      {e.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-primary/30 text-cyan bg-primary/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" eyebrow={t.proj_eyebrow as string} title={t.proj_title as string}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.6 }}
              className="group relative glass rounded-2xl p-6 hover-glow overflow-hidden flex flex-col justify-between"
            >
              <div
                className={`absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-br ${p.accent} -z-10 blur-xl`}
              />
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`size-10 rounded-xl bg-gradient-to-br ${p.accent} grid place-items-center`}
                >
                  <Sparkles className="size-5 text-background" />
                </div>
                <ExternalLink className="size-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition" />
              </div>
              <h3 className="text-lg font-bold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 min-h-[3rem]">
                {p.blurb[lang]}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-muted-foreground border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 mt-4">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover-glow transition-all hover:scale-105"
                  >
                    <Github className="size-3.5 group-hover:text-cyan transition-colors" />
                    <span>GitHub</span>
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover-glow transition-all hover:scale-105"
                  >
                    <ExternalLink className="size-3.5 group-hover:text-cyan transition-colors" />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" eyebrow={t.skills_eyebrow as string} title={t.skills_title as string}>
        <div className="space-y-6">
          {SKILLS.map((group, i) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="grid md:grid-cols-[180px_1fr] gap-3 md:gap-6 items-start"
            >
              <div className="text-xs font-mono uppercase tracking-widest text-cyan pt-2">
                {group.group}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, j) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.03 }}
                    whileHover={{ y: -2, scale: 1.05 }}
                    className="px-3.5 py-1.5 rounded-full text-sm glass border hover:border-primary/50 hover:text-cyan transition cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <section id="contact" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.72 0.18 235 / 0.15), transparent 60%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-2xl mx-auto text-center"
        >
          <div className="text-xs font-mono uppercase tracking-widest text-cyan mb-3">
            {t.nav_contact}
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            <span className="shimmer-text">{t.contact_title}</span>
          </h2>
          <p className="text-muted-foreground mb-10 text-lg">{t.contact_tagline}</p>

          <a
            href="mailto:Hamrouniraed50@gmail.com"
            className="inline-flex items-center gap-3 px-7 py-4 rounded-full glass-strong border-2 border-primary/30 hover:border-primary/60 transition group"
            style={{ boxShadow: "var(--shadow-glow-cyan)" }}
          >
            <Mail className="size-5 text-cyan" />
            <span className="text-lg font-medium">Hamrouniraed50@gmail.com</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
          </a>

          <div className="mt-8 flex justify-center gap-3">
            {[
              { icon: Github, href: "https://github.com/hamrouniraed07", label: "GitHub" },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/raed-med-amin-hamrouni/",
                label: "LinkedIn",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="size-12 grid place-items-center rounded-full glass border hover:border-primary/50 hover:text-cyan hover:scale-110 transition-all"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      <footer className="py-8 text-center text-xs text-muted-foreground border-t border-white/5">
        © {new Date().getFullYear()} — {t.footer}
      </footer>

      <Chatbot lang={lang} />
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="text-xs font-mono uppercase tracking-widest text-cyan mb-2">
            {eyebrow}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            <span className="text-gradient">{title}</span>
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function Typewriter({ words }: { words: string[] }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  const word = useMemo(() => words[idx % words.length], [idx, words]);

  useEffect(() => {
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) setTimeout(() => setDel(true), 1400);
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDel(false);
          setIdx((i) => i + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, word]);

  return (
    <div className="mt-3 h-9 md:h-11 text-2xl md:text-3xl font-mono text-cyan cursor-blink">
      {text}
    </div>
  );
}
